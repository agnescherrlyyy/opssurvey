import React from 'react';
import { HiOutlineArrowSmallLeft, HiDocumentCheck } from 'react-icons/hi2';
const SesiSatuSurveySatu = () => {
    return (
        <>
            <section className="max-w-full w-full">
                <div className="w-full flex flex-col items-center justify-center bg-sekunder-60 p-5">
                    <div className="max-w-md w-full">
                        <div className="w-full flex items-center justify-between relative">
                            <HiOutlineArrowSmallLeft className='text-2xl text-slate-50 cursor-pointer' />
                            <div className="flex items-center gap-1">
                                <HiDocumentCheck className='text-2xl text-slate-50' />
                                <span className='font-semibold text-sm text-slate-50'>Survey</span>
                            </div>
                            <span className='font-semibold text-sm'></span>
                            <div className="w-20 absolute right-0 top-0">
                                <img 
                                    src="./img/Loka 1.png" 
                                    alt="Loka"
                                    className='w-full h-full'
                                />
                            </div>
                        </div>
                        <div className="w-full pt-20">
                            <div class="bar">
                                <div class="bar-fill bar-fill-photoshop start"></div>
                            </div>
                        </div>
                        <div className="w-full flex flex-col gap-2 px-6 py-4">
                            <strong className='text-sm'>Silahkan Berikan Penilaian Atas Pengalaman Anda di Saloka</strong>
                            <span className='text-sm'>Masukan anda sangat penting bagi kami👋</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default SesiSatuSurveySatu;