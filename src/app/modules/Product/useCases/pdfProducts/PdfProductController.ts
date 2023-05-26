import { Request, Response } from 'express';
import { PdfProductService } from './PdfProductService';

export class PdfProductController {
  constructor(private PdfProductService: PdfProductService) { }

  async handle(request: Request, response: Response) {

    const pdfProductService = new PdfProductService;

    const result = await pdfProductService.execute(response);

    return response.json(result);
  }
}
