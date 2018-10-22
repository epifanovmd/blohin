import * as React from "react";
import Carousel from "nuka-carousel";

class Content extends React.Component {
  public render() {
    return (
        <div className="container">
          <Carousel autoplay={true}>
            <img src={require("../image/imgHead.png")} />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" />
            <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" />
          </Carousel>
          <div className="pt-5 row">
            <div className="col-sm-4 text-center">
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

            <div className="col-sm-4 text-center">
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
            <div className="col-sm-4 text-center">
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
          </div>
        </div>
    );
  }
}

export default Content;
