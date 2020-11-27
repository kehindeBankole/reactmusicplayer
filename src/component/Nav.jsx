import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { faLocationArrow } from "@fortawesome/free-solid-svg-icons";
import { faStickyNote} from "@fortawesome/free-solid-svg-icons";
import { faChartLine} from "@fortawesome/free-solid-svg-icons";
import { faSignal} from "@fortawesome/free-solid-svg-icons";
import { faBookOpen} from "@fortawesome/free-solid-svg-icons";
import { faCropAlt} from "@fortawesome/free-solid-svg-icons";
function Nav() {
  const isauth = true;
  const homenav = (
    <header>
      <nav id="homenav">
        <div className="logo">
          <Link to="/" style={{ textDecoration: "none" }}>
            <h1>all your music</h1>
          </Link>
        </div>
        <div className="nav-content">
          <ul>
            <li>
              <Link to="/">
                <button className="btn">SIGN IN</button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
  const musicpagenav = (
    <header>
      <nav id="musicnav">
        <div className="nav-content" id="musicmenu">
          <ul>
            <Link to="/" style={{ textDecoration: "none" }}>
              <li className="nav-item">
                {" "}
                <div>
                  <FontAwesomeIcon icon={faHome} size="sm" />{" "}
                </div>
                <div>Home</div>
              </li>
            </Link>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faLocationArrow} size="sm" />{" "}
              </div>
              <div>recommendations</div>
            </li>
            <li className="nav-item">
              <div>
              <FontAwesomeIcon icon={faStickyNote} size="sm" />{" "}
              </div>
              <div>new releases</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faChartLine} size="sm" />{" "}
              </div>
              <div>top charts</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faSignal} size="sm" />{" "}
              </div>
              <div>radio</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faBookOpen} size="sm" />{" "}
              </div>
              <div>feed</div>
            </li>
            <li className="nav-item" id="newplaylist">
              <div>
                <button className="btn">new playlist</button>
              </div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faBookOpen} size="sm" />{" "}
              </div>
              <div>top charts</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faBookOpen} size="sm" />{" "}
              </div>
              <div>this is kanye</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faBookOpen} size="sm" />{" "}
              </div>
              <div>best hits</div>
            </li>
            <li className="nav-item">
              <div>
                <FontAwesomeIcon icon={faCropAlt} size="sm" />{" "}
              </div>
              <div>best of christmas hits</div>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );

  if (isauth === true) {
    return musicpagenav;
  } else {
    return homenav;
  }
}

export default Nav;
