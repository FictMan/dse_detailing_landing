'use client';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

export const MapComponent = () => {
  const containerStyle = {
    width: "100%",
    height: "500px",
  };
  
  const center = {
    lat: 49.433462,
    lng: 31.99816,
  };

  return (
    <div id='address' className="flex flex-col">
      <div className='flex flex-col pb-7 border-b border-boder-base-color'>
        <p className='font-golos-regular text-lg opacity-70 mb-4'>Адреса</p>
        <p className='text-5xl'>м. Черкаси</p>
        <p className='text-5xl'>Вул. 30-річчя Перемоги, 70</p>
      </div>

      <div className="mt-7 flex justify-between">
        <div className='flex flex-col'>
          <p className="font-golos-regular text-lg opacity-70">Ми працюємо</p>
          <p className="text-xl">з 9 до 18:00, Пн-Пт</p>
        </div>
        <div className='flex flex-col'>
          <p className="font-golos-regular text-lg opacity-70">Номер телефону</p>
          <p className="text-xl">+380 93 216 84 51</p>
        </div>
        <div className='flex flex-col'>
        <a href="https://www.instagram.com/dse_detailing" className='bg-action-base-default text-xl py-3 px-4 rounded-lg'>Звʼязатись з нами</a>
        </div>
      </div>

      <div id='map' className="mt-7 rounded-lg">
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || ''}>
          <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={16}>
            <Marker
              position={center}
              onClick={() =>
                window.open(
                  `https://www.google.com/maps?q=${center.lat},${center.lng}`,
                  "_blank"
                )
              }
            />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};
