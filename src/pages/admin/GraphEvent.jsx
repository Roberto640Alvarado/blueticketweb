import React from "react";
import Bars from "../../components/BarChart";
import Footer from "../../components/Footer/Footer";
import { BsFillPersonFill } from "react-icons/bs";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoTicket } from "react-icons/io5";
import { generatePDF } from "../../utils/pdfUtils";
import { generateExcel } from '../../utils/excelUtils';

export const GraphEvent = () => {

  const handleDownloadPDF = async () => {
    await generatePDF();
  };

  const handleDownloadExcel = () => {
    generateExcel();
  };
  return (
    <>
      <div>
        <div className="bg-orange p-2 rounded-lg w-2/3 mx-auto m-4">
          <h1 className="text-center text-4xl font-Popins font-extrabold text-white">
            Grafico Evento
          </h1>
        </div>

        <div className="flex flex-col mx-auto m-4 md:flex-row md:justify-between">
          <div className="bg-light rounded-lg p-4 mb-4 md:w-1/2 md:mr-4">
            <div className="rounded-lg w-full mb-4 bg-light p-4 mx-auto sm:flex-col sm:items-center flex flex-col items-center justify-center" style={{ boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
              <div className="flex items-center">
                <IoTicket className="text-blue font-extrabold text-4xl sm:text-2xl text-center font-Popins" />
                <h2 className="text-blue font-extrabold text-4xl sm:text-3xl text-center font-Popins ml-4">Tickets Vendidos</h2>
              </div>
              <div className="mt-2 text-center font-extrabold text-4xl sm:text-3xl font-Popins">200</div>
            </div>


            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div
                className="rounded-lg font-extrabold text-4xl font-Popins"
                style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}
              >
                <h2 className="text-blue font-extrabold text-4xl mb-4">Localidades Populares:</h2>
                <ul>
                  <li className="flex justify-between mb-2">
                    <span>La Playa:</span>
                    <span>65</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>Platinum:</span>
                    <span>59</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>Platea:</span>
                    <span>60</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>General:</span>
                    <span>81</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>Tribuna:</span>
                    <span>50</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>VIP:</span>
                    <span>55</span>
                  </li>
                  <li className="flex justify-between mb-2">
                    <span>Sombra:</span>
                    <span>40</span>
                  </li>
                </ul>
              </div>
            </div>


          </div>

          <div className="bg-light rounded-lg p-4 md:w-1/2">
            <div
              className="bg-f9f7f4 mx-auto rounded-lg"
              style={{ maxWidth: "500px", height: "230px" }}
            >
              <Bars />
            </div>

            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div
                className="rounded-lg text-center flex items-center justify-between my-2"
                style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: "75px" }}
              >
                <div className="flex items-center">
                  <BsFillPersonFill className="text-4xl text-blue-500" />
                  <h2 className="text-blue-500 ml-2 font-bold text-lg">Entrada Individual</h2>
                </div>
                <p className="font-bold text-2xl">40%</p>
              </div>
            </div>

            <div className="flex flex-col bg-light rounded-lg p-4 mx-auto w-full">
              <div
                className="rounded-lg text-center flex items-center justify-between my-2"
                style={{ backgroundColor: "#F9F7F4", padding: "10px", boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)', height: "75px" }}
              >
                <div className="flex items-center">
                  <BsFillPeopleFill className="text-4xl text-blue-500" />
                  <h2 className="text-blue-500 ml-2 font-bold text-lg">Entrada Grupal</h2>
                </div>
                <p className="font-bold text-2xl">60%</p>
              </div>
            </div>

            <div className="flex justify-center m-4">
              <button onClick={handleDownloadExcel}
                className="bg-orange rounded-full px-4 py-2 text-white mr-2"
                style={{ width: "150px" }}
              >
                Generar Excel
              </button>
              <button onClick={handleDownloadPDF}
                className="bg-blue rounded-full px-4 py-2 text-white mr-2"
                style={{ width: "150px" }}
              >
                Generar PDF
              </button>
            </div>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default GraphEvent;


