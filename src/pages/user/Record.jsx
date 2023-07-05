import React from 'react';
import Footer from '../../components/Footer/Footer';
import CardHome from '../../components/Card/CardHome';

export const Record = () => {
    return (
        <>
            <h1 className="text-center text-4xl font-bold mt-8 mb-4">Asistencias</h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-1 justify-items-center mt-10 mx-auto max-w-7xl px-4" style={{ rowGap: '40px' }}>
                <CardHome />
                <CardHome />
                <CardHome />

                <CardHome />
                <CardHome />
                <CardHome />

                <CardHome />
                <CardHome />
                <CardHome />
            </div>

            <div className="mt-8">
                <Footer />
            </div>
        </>
    );
};

export default Record;
