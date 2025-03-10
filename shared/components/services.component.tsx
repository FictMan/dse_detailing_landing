'use client';

export const ServicesComponent = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-unbounded text-h2 md:text-h3">Наші послуги</h3>

      <div className="grid gap-4 mt-5 w-full md:grid-cols-2">
        <a className="p-4 md:p-8 md:min-h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Полірування Кузова</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Надаємо професійне полірування для відновлення глянцю та захисту кузова.</p>
          <p className="font-golos-regular mt-7 font-semibold">6 000 - 13 000грн</p>
        </a>
        <div className="p-4 md:p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Хімчистка салону</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Глибоке очищення текстильних, шкіряних та інших матеріалів в салоні.</p>
          <p className="font-golos-regular mt-7 font-semibold">4 000 - 6 000грн</p>
        </div>
        <div className="p-4 md:p-8 md:min-h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Нанесення захисних покриттів</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Захист лакофарбового покриття від подряпин і забруднень.</p>
          <p className="font-golos-regular mt-7 font-semibold">2 000 - 5 000грн</p>

        </div>
        <div className="p-4 md:p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Поклейка плівки</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Максимальний захис автівки</p>
          <p className="font-golos-regular mt-7 font-semibold">Вартість послуг залежить від деталей замовлення</p>
        </div>
        <div className="p-4 md:p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Антихром</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Оклейка хромированных деталей</p>
          <p className="font-golos-regular mt-7 font-semibold">Ціна формується індивідуально</p>
        </div>
        <div className="p-4 md:p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <p className="text-lg md:text-2xl mb-3 font-semibold">Усунення подряпин з автомобіля</p>
          <p className="text-base md:text-lg font-golos-regular opacity-70">Видалення дрібних, глибоких подряпин кузова</p>
          <p className="font-golos-regular mt-7 font-semibold">Вартість обговорюється залежно від складності</p>
        </div>
      </div>
    </div>
  );
};
