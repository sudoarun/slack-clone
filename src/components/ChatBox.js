// import { useEffect } from "react";

export default function ChatBox({ input, setInput, addMsg }) {
  const submitHandler = (event) => {
    event.preventDefault();
    addMsg(input);
    setInput("");
  };

  // console.log(input);
  return (
    <form
      className="border-secondary border rounded p-2"
      onSubmit={submitHandler}
    >
      <div className="d-flex mb-1">
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-bold" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-italic" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-strikethrough" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-link" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-list-ol" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-list" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-code" aria-hidden="true"></i>
        </li>
        <li className="p-1 me-2 BoxLi">
          <i className="fa fa-file-code-o" aria-hidden="true"></i>
        </li>
      </div>
      <div className="mt-2 mb-3 w-100">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Jot Something Down"
          className="border-0 w-100"
        />
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex">
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-font" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-smile-o" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-at" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-video-camera" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-microphone" aria-hidden="true"></i>
          </li>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-file-archive-o" aria-hidden="true"></i>
          </li>
        </div>
        <div className="d-flex">
          <button className="p-1 me-2 BoxLi border-0">
            <i className="fa fa-paper-plane" aria-hidden="true"></i>
          </button>
          <li className="p-1 me-2 BoxLi">
            <i className="fa fa-angle-down" aria-hidden="true"></i>
          </li>
        </div>
      </div>
    </form>
  );
}
