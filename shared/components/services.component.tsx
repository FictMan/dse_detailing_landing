'use client';

export const ServicesComponent = () => {
  return (
    <div className="flex flex-col">
      <h3 className="font-unbounded text-h2 md:text-h3">Наші послуги</h3>

      <div className="grid gap-4 mt-5 w-full md:grid-cols-2">
        <div className="p-4 flex flex-col justify-between md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Полірування Кузова</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Надаємо професійне полірування для відновлення глянцю та захисту кузова.</p>
          </div>

          <div>
            <p className="font-golos-regular font-semibold">6 000 - 13 000грн</p>
          </div>
        </div>

        <div className="flex-col flex justify-between p-4 md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Хімчистка салону</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Глибоке очищення текстильних, шкіряних та інших матеріалів в салоні.</p>
          </div>
          <div>
            <p className="font-golos-regular font-semibold">4 000 - 6 000грн</p>
          </div>
        </div>

        <div className="flex-col flex justify-between p-4 md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Нанесення захисних покриттів</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Захист лакофарбового покриття від подряпин і забруднень.</p>
          </div>
          <div>
            <p className="font-golos-regular font-semibold">2 000 - 5 000грн</p>
          </div>
        </div>

        <div className="flex-col flex justify-between p-4 md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Поклейка плівки</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Максимальний захис автівки</p>
          </div>
          <div>
            <p className="font-golos-regular font-semibold">Вартість послуг залежить від деталей замовлення</p>
          </div>
        </div>

        <div className="flex-col flex justify-between p-4 md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Антихром</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Оклейка хромированных деталей</p>
          </div>
          <div>
            <p className="font-golos-regular font-semibold">Ціна формується індивідуально</p>
          </div>
        </div>

        <div className="flex-col flex justify-between p-4 md:p-8 h-[200px] md:h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
          <div>
            <p className="text-lg md:text-2xl mb-3 font-semibold">Усунення подряпин з автомобіля</p>
            <p className="text-base md:text-lg font-golos-regular opacity-70">Видалення дрібних, глибоких подряпин кузова</p>
          </div>
          <div>
            <p className="font-golos-regular font-semibold">Вартість обговорюється залежно від складності</p>
          </div>
        </div>
      </div>
    </div>
  );
};
