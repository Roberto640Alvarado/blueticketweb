import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LinearScale,
    CategoryScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler,
} from "chart.js";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Tooltip,
    Legend,
    Filler
);



var ticketVendido = [65, 59, 80, 81, 56, 55, 40];
var localidad = ["Playa", "Platinum", "Platea", "General", "Tribuna", "vip", "Sombra"];
var colores = ["#E01A4F", "#E98A15", "#E01A4F" ,"#E98A15","#E01A4F", "#E98A15","#E01A4F"];

var misopciones = {
    responsive: true,
    animation: false,
    plugins: {
        legend: {
            display: false,
        },
    },
    scales: {
        y: {
            min: 0,
            max: 100,
            ticks: {
                stepSize: 20, // Establecer el tamaño del paso en 20
            },
            grid: {
                color: 'transparent', // Establecer el color de la cuadrícula en transparente
            },
        },
        x: {
            ticks: { color: colores },
            grid: {
                color: 'transparent', // Establecer el color de la cuadrícula en transparente
            },
        },
    }
};

var midata = {
    labels: localidad,
    datasets: [
        {
            label: "Ticket Vendido",
            data: ticketVendido,
            backgroundColor: colores,
        }
    ]
};

export default function Bars() {
    return <Bar data={midata} options={misopciones} />;
}