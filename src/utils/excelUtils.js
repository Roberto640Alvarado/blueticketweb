import * as XLSX from 'xlsx';
import { saveAs } from 'file-saver';

export const generateExcel = () => {
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

  // Crear una estructura de datos que contenga la información del archivo Excel
  const data = [
    ['Datos del evento'],
    ['Tickets vendidos', ticketsVendidos],
    ['Localidades populares'],
    ['Localidad', 'Cantidad'],
    ...localidades.map((localidad, index) => [`${index + 1}. ${localidad.nombre}`, localidad.cantidad]),
    ['Porcentaje de entradas individuales', `${porcentajeEntradaIndividual}%`],
    ['Porcentaje de entradas grupales', `${porcentajeEntradaGrupal}%`],
  ];

  // Crear una hoja de cálculo con los datos
  const worksheet = XLSX.utils.aoa_to_sheet(data);

  // Crear un libro de trabajo y añadir la hoja de cálculo
  const workbook = XLSX.utils.book_new();
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Reporte');

  // Convertir el libro de trabajo a un archivo de Excel en formato binario
  const excelData = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });

  // Convertir los datos binarios a un objeto Blob
  const blob = new Blob([excelData], { type: 'application/octet-stream' });

  // Guardar el archivo usando la librería file-saver
  saveAs(blob, 'reporte.xlsx');
};

export default generateExcel;
