import * as React from "react";

import "./App.css";

class App extends React.Component {
  public render() {
    return (
      <div>
        <div className="container">
          <nav className="navbar navbar-light bg-light">
            <a className="navbar-brand" href="#">
              <img
                src="/docs/4.1/assets/brand/bootstrap-solid.svg"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
              Logo
            </a>

            <div>Работаем каждый день, без выходных c 7:00 до 23:00!</div>

            <div>
              <a href="tel:+74959222377">
                +7 (495) <strong>922-23-77</strong>
              </a>
            </div>
          </nav>

          <section className="row">
            <div className="col-4">
              <img
                src="http://compline.md/design/compline/i/img_02.png"
                alt=""
              />
              <h3>Оперативность</h3>
              <p>
                Мастер у вас в течении 1 часа. <br />
                Вызов на дом - бесплатный.
              </p>
            </div>

            <div className="col-4">
              <img
                src="http://compline.md/design/compline/i/img_03.png"
                alt=""
              />
              <h3>Честные цены</h3>
              <p>
                Нас рекомендуют друзьям, потому что у <br />
                нас лучшие цены.
              </p>
            </div>
            <div className="col-4">
              <img
                src="http://compline.md/design/compline/i/img_04.png"
                alt=""
              />
              <h3>Гарантия качества</h3>
              <p>
                На все виды услуг предоставляется <br />
                гарантия до 6 месцев.
              </p>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default App;
