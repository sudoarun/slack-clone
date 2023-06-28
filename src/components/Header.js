import React from "react";

export default function Header({ login }) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg fixed-top slackPurple text-white">
        <div className="container-fluid">
          <div className="d-flex justify-content-between w-25">
            <div>
              <button className="slackPurple text-white fw-light border border-0">
                <i className="fa fa-bars"></i>
              </button>
            </div>
            <div>
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 pe-4">
                <li className="nav-item me-3">
                  <i
                    className="fa fa-arrow-left fw-light"
                    aria-hidden="true"
                  ></i>
                </li>
                <li className="nav-item">
                  <i
                    className="fa fa-arrow-right fw-light"
                    aria-hidden="true"
                  ></i>
                </li>
              </ul>
            </div>
          </div>

          <div className="d-flex align-items-center w-75 justify-content-between">
            <a className="text-reset me-3" href="1">
              <i className="fa fa-clock-o" aria-hidden="true"></i>
            </a>
            <div className="w-50">
              <div className="input-group rounded slackPurple-light rounded-pill ">
                <input
                  type="search"
                  className=" border border-0 rounded-pill text-white slackPurple-light ps-3 w-100"
                  placeholder="Search for Soal"
                  aria-label="Search"
                  aria-describedby="search-addon"
                />
                <span
                  className="input-group-text border-0 text-white"
                  id="search-addon"
                >
                  <i className="fa fa-sliders" aria-hidden="true"></i>
                </span>
                <span
                  className="input-group-text border-0 text-white"
                  id="search-addon"
                >
                  <i className="fa fa-search"></i>
                </span>
              </div>
            </div>

            <div className="dropdown d-flex align-items-center">
              <i
                className="fa fa-question-circle-o me-3"
                aria-hidden="true"
              ></i>
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="1"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  className="rounded-square"
                  height="25"
                  alt="Black and White Portrait of a Man"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <button className="dropdown-item border-0">My profile</button>
                </li>
                <li>
                  <button className="dropdown-item border-0">Settings</button>
                </li>
                <li>
                  <a className="dropdown-item" href={"/"}>
                    {!login ? <span>Logout</span> : <span>Login</span>}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
