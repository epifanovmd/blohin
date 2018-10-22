import * as React from "react";
import { Link } from "react-scroll";

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

          <nav>
            <ul className="menu d-flex animated fadeInDown">
              <li className="menu__item">
                <Link
                  activeClass="active"
                  to="Services"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  <a href="#">Services</a>
                </Link>
              </li>
              <li className="menu__item">
                <Link
                  activeClass="active"
                  to="Prices"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1000}
                >
                  <a href="#">Prices</a>
                </Link>
              </li>
            </ul>
          </nav>

          {/* <div className="menu">
            <Link
              className="mr-5"
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button>Services</button>
            </Link>
            <Link
              className="mr-5"
              activeClass="active"
              to="Prices"
              spy={true}
              smooth={true}
              offset={0}
              duration={1000}
            >
              <button>Prices</button>
            </Link>
          </div> */}
        </div>
      </div>
    );
  }
}

export default Header;
