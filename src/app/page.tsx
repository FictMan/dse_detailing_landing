import { HeaderComponent } from "../../shared/components/header/header.component";

export default function Home() {
  return (
    <div className="flex max-w-7xl flex-col m-auto font-[family-name:var(--font-unbounded)] pb-20 gap-40 sm:p-10">
      <HeaderComponent />

      <div className="flex flex-col">
        <div className="flex flex-col">
          <h3 className="text-h3 font-unbounded">Наші послуги</h3>

          <div className="grid gap-4 mt-5 w-full grid-cols-2">
            <a href='https://www.instagram.com/dse_detailing' className="p-8 min-h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
              <p className="text-2xl mb-3 font-semibold">Полірування Кузова</p>
              <p className="text-lg font-golos-regular opacity-70">Надаємо професійне полірування для відновлення глянцю та захисту кузова.</p>

              <div className="flex justify-between mt-7">
                <p className="font-semibold">Звʼязатись з нами</p>
                <p className="font-semibold">→</p>
              </div>
            </a>
            <div className="p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
              <p className="text-2xl mb-3 font-semibold">Хімчистка салону</p>
              <p className="text-lg font-golos-regular opacity-70">Глибоке очищення текстильних, шкіряних та інших матеріалів в салоні.</p>
              <p className="font-golos-regular mt-7 font-semibold">5 000 - 10 000грн</p>
            </div>
            <div className="p-8 min-h-[235px] bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
              <p className="text-2xl mb-3 font-semibold">Нанесення захисних покриттів</p>
              <p className="text-lg font-golos-regular opacity-70">Захист лакофарбового покриття від подряпин і забруднень.</p>
              <p className="font-golos-regular mt-7 font-semibold">5 000 - 10 000грн</p>
            </div>
            <div className="p-8 bg-base-color rounded-lg hover:bg-gradient-to-br hover:from-hover-from hover:via-hover-from hover:via-30% hover:to-hover-to">
              <p className="text-2xl mb-3 font-semibold">Полірування фар</p>
              <p className="text-lg font-golos-regular opacity-70">Відновлення прозорості фар для кращої видимості та безпеки.</p>
              <p className="font-golos-regular mt-7 font-semibold">5 000 - 10 000грн</p>
            </div>
          </div>
        </div>

        <div>
          <div id='gallery'>
            <img src="images/gallery1.png" alt="" />
            <img src="images/gallery2.png" alt="" />
            <img src="images/gallery3.png" alt="" />
            <img src="images/gallery4.png" alt="" />
          </div>
          <div id='controls'>
            <button>←</button>
            <p>dse_detailing</p>
            <button>→</button>
          </div>
        </div>

        <div id='address'>
          <div>
            <p>Адреса</p>
            <p>м. Черкаси</p>
            <p>Вул. 30-річчя Перемоги, 70</p>
          </div>

          <div>
            <div>
              <p>Ми працюємо</p>
              <p>з 9 до 18:00, Пн-Пт</p>
            </div>
            <div>
              <p>Номер телефону</p>
              <p>+380 93 216 84 51</p>
            </div>
            <div>
              <a href="">Звʼязатись з нами</a>
            </div>
          </div>

          <div id='map'>
            <p>мапа</p>
          </div>
        </div>
      </div>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
