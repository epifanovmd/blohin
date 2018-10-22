import * as React from "react";
import { Element } from "react-scroll";

class Services extends React.Component {
  public render() {
    return (
      <Element name="Services" className="element">
        <div className="container">
          <nav id="services" aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item active" aria-current="page">
                <h3>Наши услуги</h3>
              </li>
            </ol>
          </nav>
          <div className="card-deck">
            <div className="card">
              <img
                className="card-img-top"
                src={require("../image/img1.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Очистка скважин</h5>

                <ul className="card-text">
                  <li>очиститка фильтра скважены;</li>
                  <li>проводится желонирования (удаления песка);</li>
                  <li>удаление ржавчины, а также других опасных элементов;</li>
                  <li>раскупоривание подземных вод;</li>
                  <li>вода становится действительно качественно и вкусной</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../image/img2.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Ремонт скважин</h5>

                <ul className="card-text">
                  <li>Замена фильтра;</li>
                  <li>обустройство скважин;</li>
                  <li>реанимация скважин;</li>
                  <li>ремонт протечек;</li>
                  <li>замена насоса;</li>
                  <li>замена и ремонт автоматики в скважине;</li>
                  <li>установка и замена насосного оборудования</li>
                </ul>
              </div>
            </div>
            <div className="card">
              <img
                className="card-img-top"
                src={require("../image/img3.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Диагностика скважин</h5>

                <ul className="card-text">
                  <li>показатели дебита;</li>
                  <li>обводненность и общее состояние грунта;</li>
                  <li>результаты анализов воды;</li>
                  <li>конструкционные особенности сооружения;</li>
                  <li>герметичность колонны;</li>
                  <li>наличие посторонних предметов в водозаборе;</li>
                  <li>работоспособность установленного оборудования.</li>
                </ul>
              </div>
            </div>
          </div>
          <p />
          <div className="card-deck">
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img4.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Обслуживание скважин</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img5.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Реагенты для очистки</h5>
                <p className="card-text">
                  Использование реагентного метода чистки скважин в Москве очень
                  действенный способ и его используют только в крайних случаях,
                  когда нельзя уже очистить скважину другими способами
                </p>
              </div>
            </div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img6.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Анализ воды из скважин</h5>
                <p className="card-text">
                  По результатам экспетризы готовится развернутый отчет,
                  содержащий подробные сведения о подаваемом ресурсе, а также
                  выгодные рекомендации и предложения по улучшению питьевых
                  свойств и очищению воды
                </p>
              </div>
            </div>
          </div>
          <p />
          <div className="card-deck">
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img7.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Водоподготовка</h5>

                <ul className="card-text">
                  <li>Монтаж водоснабжения;</li>
                  <li>подведение воды к дому;</li>
                </ul>
              </div>
            </div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img8.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Абиссинский колодец</h5>
                <p className="card-text">
                  Главное преимущество этого водозабора заключается в том, что
                  его можно пробурить без использования тяжелой техники, потому
                  что грунтовые воды находятся на небольшой глубине в районе
                  12-16 метров.
                </p>
              </div>
            </div>
            <div className="card text-center">
              <img
                className="card-img-top"
                src={require("../image/img9.png")}
                width="276"
                height="180"
                alt="Card image cap"
              />
              <div className="card-body">
                <h5 className="card-title">Очистка скважин в МО</h5>
                <p className="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Element>
    );
  }
}

export default Services;
