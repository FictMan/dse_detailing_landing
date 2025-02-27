'use client';

export const HeaderComponent = () => {
  return (
    <header className="flex flex-col">
      <div className="absolute right-0 top-0 z-[-1] max-h-[700px] bg-[url('/images/bg-white.png')] w-full bg-cover bg-center h-full" />

      <div className="flex justify-between">
        <p className="text-4xl font-medium">DSE</p>
        <a href="tel:380-93-216-84-51" className="mt-auto mb-auto text-xl">+380 93 216 84 51</a>
      </div>

      <div className='mt-[10rem] flex flex-col'>
        <h2 className="text-6xl font-medium max-w-4xl">Детейлінг для вашого авто - догляд без компромісів</h2>
        <div className='flex mt-10'>
          <a href="https://www.instagram.com/dse_detailing" className='bg-action-base-default text-xl py-3 px-4 rounded-lg'>Звʼязатись з нами</a>
          <p className="ml-10 mt-auto mb-auto text-xl font-golos-regular opacity-70 max-w-sm">Повернемо вашому авто досконалий вигляд і захистимо кожну деталь</p>
        </div>
      </div>
    </header>
  );
};
