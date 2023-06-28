import React from "react";
import "./SignIn.css";
import img from "../assets/slack.png";
import logo from "../assets/slack-Logo.png";
import { useNavigate } from "react-router-dom";

export default function SignIn({ setLogin }) {
  const navigate = useNavigate();
  return (
    <div className="vh-100 text-white bg-slack d-flex justify-content-between overflow-hidden ">
      <div className="ps-5 ms-5 d-flex justify-content-between flex-column pt-5 mt-5 pb-4">
        <div className="mt-5 ms-5 w-50">
          <h1 className="fw-bold fs-1">
            <img
              alt="logo"
              src={logo}
              width="60"
              height="auto"
              className="text-white"
            />
            slack
          </h1>
          <p className="fs-2 fw-bold">
            Slack brings the team together wherever you are
          </p>
          <button
            className="px-5 py-2 fw-bold slackButton text-white border-0 rounded bg-success"
            onClick={() =>
              setLogin(true) || navigate("/") || alert("Signed in Successfully")
            }
          >
            Sign In to Slack
          </button>
          <p className="mt-3 text-secondary">
            We'll take you to your browser to sign in then bring you back here.
          </p>
        </div>
        <div className="ms-5">
          <p>
            Is your team new to Slack?
            <span className="text-decoration-underline ms-2">
              Create new workspace
            </span>
          </p>
        </div>
      </div>
      <div className="">
        <img alt="globe" src={img} className="ms-auto" width="100%" />
      </div>
    </div>
  );
}
