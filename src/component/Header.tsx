import * as React from "react";

class Header extends React.Component {
  public render() {
    return (
      <div className="container pb-5">
        <div className="d-sm-flex justify-content-between">
          <div className="mr-auto p-2 align-self-center">Flex item 1</div>
          <div className="align-self-center">
            <i className="fa fa-clock-o fa-3x" aria-hidden="true" />
          </div>
          <div className="mr-auto p-2 align-self-center">
            Работаем каждый день, <br />
            без выходных c 7:00 до 23:00!
          </div>

          <div className="align-self-center">
            <i className="fa fa-phone fa-2x" aria-hidden="true" />
          </div>

          <div className="p-2 align-self-center">
            <a href="tel:+74959222377">
              +7 (495) <strong>922-23-77</strong>
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
