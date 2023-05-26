import { PdfProductController } from './PdfProductController';
import { PdfProductService } from './PdfProductService';

const pdfProductService = new PdfProductService();
const pdfProductController = new PdfProductController(
  pdfProductService
);

export { pdfProductController, pdfProductService };
