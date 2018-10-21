import * as React from "react";

import "./Header.css";

class Header extends React.Component {
  public render() {
    return (
      <div className="pb-5">
        <div className="d-sm-flex justify-content-between">
          <div className="mr-auto p-2 align-self-center">Flex item 1</div>
          <div className="align-self-center">
          <i className="fa fa-clock-o fa-3x" aria-hidden="true" />
          </div>
          <div className="mr-auto p-2 align-self-center">
            
            Работаем каждый день, без выходных c 7:00 до 23:00!
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

        {/* <div className="child">
          <img
            src="/docs/4.1/assets/brand/bootstrap-solid.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
          />
          Logo
        </div>

        <i className="fa fa-clock-o fa-3x" aria-hidden="true" />
        <div className="child-centr">
          Работаем каждый день, без выходных c 7:00 до 23:00!
        </div>
        <i className="fa fa-phone fa-2x" aria-hidden="true" />
        <div className="child-right">
          <a href="tel:+74959222377">
            +7 (495) <strong>922-23-77</strong>
          </a>
        </div> */}
      </div>
    );
  }
}

export default Header;
