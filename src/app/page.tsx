import Image from "next/image";
import { HeaderComponent } from "../../shared/components/header/header.component";

export default function Home() {
  return (
    <div className="flex max-w-7xl flex-col m-auto font-[family-name:var(--font-unbounded)] pb-20 gap-40 sm:p-10">
      <HeaderComponent />
      <div className="">
        <div>
          <h3>Наші послуги</h3>

          <div>
            <div>
              <p>Полірування Кузова</p>
              <p>Надаємо професійне полірування для відновлення глянцю та захисту кузова.</p>
              <a href="">Звʼязатись з нами</a>
            </div>
            <div>
              <p>Хімчистка салону</p>
              <p>Глибоке очищення текстильних, шкіряних та інших матеріалів в салоні.</p>
              <p>5 000 - 10 000грн</p>
            </div>
            <div>
              <p>Нанесення захисних покриттів</p>
              <p>Захист лакофарбового покриття від подряпин і забруднень.</p>
              <p>5 000 - 10 000грн</p>
            </div>
            <div>
              <p>Полірування фар</p>
              <p>Відновлення прозорості фар для кращої видимості та безпеки.</p>
              <p>5 000 - 10 000грн</p>
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
