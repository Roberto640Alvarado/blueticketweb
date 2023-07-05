import { saveAs } from 'file-saver';
import { PDFDocument, StandardFonts, rgb } from 'pdf-lib';


const generatePDF = async () => {
  const pdfDoc = await PDFDocument.create();
  const page = pdfDoc.addPage();

  const { width, height } = page.getSize();

  const ticketsVendidos = 200;

  const localidades = [
    { nombre: 'La Playa', cantidad: 65 },
    { nombre: 'Platinum', cantidad: 59 },
    { nombre: 'Platea', cantidad: 60 },
    { nombre: 'General', cantidad: 81 },
    { nombre: 'Tribuna', cantidad: 50 },
    { nombre: 'VIP', cantidad: 55 },
    { nombre: 'Sombra', cantidad: 40 },
  ];

  const porcentajeEntradaIndividual = 40;
  const porcentajeEntradaGrupal = 60;

  const fontSize = 12;
  const padding = 20;

  page.drawText('Datos del evento', {
    x: padding,
    y: height - padding,
    size: fontSize + 6,
    font: await pdfDoc.embedFont(StandardFonts.HelveticaBold),
    color: rgb(0, 0, 0),
  });

  page.drawText(`Tickets vendidos: ${ticketsVendidos}`, {
    x: padding,
    y: height - padding - fontSize * 2,
    size: fontSize,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  page.drawText('Localidades populares:', {
    x: padding,
    y: height - padding - fontSize * 3,
    size: fontSize,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  for (let index = 0; index < localidades.length; index++) {
    const localidad = localidades[index];
    const text = `${index + 1}. ${localidad.nombre}: ${localidad.cantidad}`;
    page.drawText(text, {
      x: padding,
      y: height - padding - fontSize * (4 + index),
      size: fontSize,
      font: await pdfDoc.embedFont(StandardFonts.Helvetica),
      color: rgb(0, 0, 0),
    });
  }

  page.drawText(`Porcentaje de entradas individuales: ${porcentajeEntradaIndividual}%`, {
    x: padding,
    y: height - padding - fontSize * (4 + localidades.length),
    size: fontSize,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  page.drawText(`Porcentaje de entradas grupales: ${porcentajeEntradaGrupal}%`, {
    x: padding,
    y: height - padding - fontSize * (5 + localidades.length),
    size: fontSize,
    font: await pdfDoc.embedFont(StandardFonts.Helvetica),
    color: rgb(0, 0, 0),
  });

  const pdfBytes = await pdfDoc.save();

  const blob = new Blob([pdfBytes], { type: 'application/pdf' });
  saveAs(blob, 'reporte.pdf');
};

export { generatePDF };
