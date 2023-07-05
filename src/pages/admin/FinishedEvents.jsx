import Footer from '../../components/Footer/Footer';
import CardHome from '../../components/Card/CardHome';


export const FinishedEvents = () => {

    return (
        <>
            <div>
                <h1 className='text-center text-4xl font-bold py-4'> Eventos finalizados</h1>
                {/* <SearchBox />    aqui ocupo un componente que debe subir omar xD*/}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10" style={{ justifyItems: 'center', alignItems: 'center' }} >
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                    <CardHome />
                </div>
                <div className="flex justify-center py-10">
                    <button className="px-4 py-2 bg-orange rounded-md mr-4 text-black font-bold">Anterior</button>
                    <button className="px-4 py-2 bg-blue rounded-md text-white font-bold">Siguiente</button>
                </div>
                <Footer />

            </div>
        </>
    );

};

export default FinishedEvents;