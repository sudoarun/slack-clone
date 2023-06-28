// import React, { useState } from "react";
import "./SideBar.css";

export default function SideBar({ channel, setChannel, name, setUser }) {
  return (
    <>
      <div className="w-25 text-white slackPurple-light px-3 vh-100 overflow-hidden">
        <div className="mt-5 pt-2">
          <div className="d-flex justify-content-between align-items-center border-bottom border-secondary  pb-2">
            <div className="dropdown ">
              <button
                className=" dropdown-toggle bg-transparent sideLi  border-0 text-white py-2"
                type="button"
                id="channelMenu"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                Soal
              </button>
              <ul className="dropdown-menu" aria-labelledby="channelMenu">
                <li className="ps-3 sideLi">
                  <button className="dropdown-item" type="button">
                    Action
                  </button>
                </li>
                <li className="ps-3 sideLi">
                  <button className="dropdown-item" type="button">
                    Another action
                  </button>
                </li>
                <li className="ps-3 sideLi">
                  <button className="dropdown-item" type="button">
                    Something else here
                  </button>
                </li>
              </ul>
            </div>
            <i
              className="fa fa-pencil-square-o p-2 rounded-circle me-3 bg-white text-black"
              aria-hidden="true"
            ></i>
          </div>
          <div className="mt-3 mb-3 border-bottom border-secondary pb-3">
            <li className="ps-3 sideLi">
              <i className="fa fa-building-o me-2" aria-hidden="true"></i>
              <span>Slack Connect</span>
            </li>
            <li className="mt-1 ps-3 sideLi">
              <i className="fa fa-ellipsis-v me-3" aria-hidden="true"></i>
              <span>Browse Slack</span>
            </li>
          </div>
          <div className="mt-3">
            <li className="ps-3 sideLi">
              <i className="fa fa-caret-down me-2" aria-hidden="true"></i>
              <span>Channels</span>
            </li>
            <li
              className="ps-3 sideLi"
              id="channel"
              onClick={() => setChannel("#general")}
            >
              <i className="fa fa-hashtag me-2" aria-hidden="true"></i>
              <span>general</span>
            </li>
            <li
              className="ps-3 sideLi"
              id="channel"
              onClick={() => setChannel("#random")}
            >
              <i className="fa fa-hashtag me-2" aria-hidden="true"></i>
              <span>random</span>
            </li>
            <li className="ps-3 sideLi">
              <i className="fa fa-plus-square me-2" aria-hidden="true"></i>
              <span>Add Channels</span>
            </li>
          </div>
          <div className="mt-2">
            <li className="ps-3 sideLi">
              <i className="fa fa-caret-down me-2" aria-hidden="true"></i>
              <span>Direct Messages</span>
              <ul>
                <li onClick={() => setUser(name) || setChannel("")}>
                  <img
                    alt="profile"
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    width={25}
                    className="rounded me-2"
                  />
                  <span>{name}</span>
                </li>
                <li></li>
              </ul>
            </li>
            <li className="ps-3 sideLi">
              <i className="fa fa-plus-square me-2" aria-hidden="true"></i>
              <span>Add Coworkers</span>
            </li>
          </div>
          <div className="position-absolute bottom-0 start-0 w-25">
            <div className="border-top rounded d-flex justify-content-between px-3 py-2 pb-3 align-items-center">
              <div>
                <li className="px-3 sideLi">
                  <span>general</span>
                  <i className="fa fa-caret-down ms-2" aria-hidden="true"></i>
                </li>
              </div>
              <div>
                <label className="switch">
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
