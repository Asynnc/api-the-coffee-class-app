import { TDocumentDefinitions } from 'pdfmake/interfaces';
import { fontsPDF } from '../../../../config/pdf-make';
import { Product } from '../../../../core/shared/infra/database/mongodb/models/Product';
import PDFPrinter from 'pdfmake';
import { Response } from 'express';
import { formatCurrency } from '../../../../core/utils/functions/formatCurrency';
import { getCurrentDate } from '../../../../core/utils/functions/currentDatePT-BR';

export class PdfProductService {
  public async execute(response: Response): Promise<any[] | PDFKit.PDFDocument> {
    const products = await Product.find().sort({ name: 1 });

    const body = [];

    for await (const product of products) {
      const rows = [];

      rows.push(product.id);
      rows.push(product.name);
      rows.push(formatCurrency(product.price));
      rows.push(product.ingredients.length);

      body.push(rows);

    }

    const printer = new PDFPrinter(fontsPDF);
    const docDefinitions: TDocumentDefinitions = {
      defaultStyle: { font: 'Helvetica' },
      footer: {
        text: 'The Coffee Class App', style: 'footer'
      },
      content: [
        {
          columns: [
            { text: 'Menu', style: 'header' },
            { text: `${getCurrentDate()}\n\n`, style: 'header' }
          ]
        },
        {
          table: {
            heights: function (row) {
              return 4;
            },
            body: [
              [
                { text: 'ID', style: 'columnsTitle' },
                { text: 'NAME', style: 'columnsTitle' },
                { text: 'PRICE', style: 'columnsTitle' },
                { text: 'INGREDIENTS', style: 'columnsTitle' }
              ],
              ...body
            ]
          },
        },
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true,
          alignment: 'center',
        },
        columnsTitle: {
          fontSize: 12,
          bold: true,
          alignment: 'center',
          fillColor: '#FFA500',
        },
        footer: {
          alignment: 'center',
        }
      }
    };
    const pdfDOC = printer.createPdfKitDocument(docDefinitions);

    // pdfDOC.pipe(fs.createWriteStream('./uploads/products.pdf'));

    const chunks: any[] = [];

    pdfDOC.on('data', (chunk) => {
      chunks.push(chunk);
    });

    pdfDOC.end();
    const result = pdfDOC.on('end', () => {
      const result = Buffer.concat(chunks);
      response.end(result);
    });

    return result || [];
  }
}
