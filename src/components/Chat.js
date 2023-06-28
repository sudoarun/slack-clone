import React, { useEffect, useRef, useState } from "react";
import ChatBox from "./ChatBox";

export default function Chat({ channel, user }) {
  const [input, setInput] = useState("");
  const [messageList, setMessageList] = useState([]);
  const addMsg = (message) => {
    setMessageList([...messageList, message]);
  };

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  });
  return (
    <div className="w-75 vh-100 pt-3 try pb-4">
      <div className="w-100 mt-5">
        {channel ? (
          <div className="border-bottom pb-2">
            <span className="fw-bold ms-2 dropdown-toggle">{channel}</span>
          </div>
        ) : (
          <div className="border-bottom pb-2">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
              alt="profile"
              className="rounded ps-3"
              height="25"
            />
            <span className="fw-bold ms-2">{user}</span>
          </div>
        )}

        <div className="pb-2 border-bottom pt-2">
          <i className="fa fa-plus ps-3" aria-hidden="true"></i>
          <span className="ms-2">Add bookmark</span>
        </div>
      </div>

      <div
        className="px-3 h-75 overflow-y-scroll"
        data-mdb-perfect-scrollbar="true"
      >
        <div className=" ">
          {channel ? (
            <div className="mt-5">
              <div className="d-flex align-items-center">
                <div>
                  <i className="fa fa-bullhorn" aria-hidden="true"></i>
                </div>

                <div className="ms-2">
                  <div>
                    <span>
                      You're looking at the <b>{channel}</b> channel{" "}
                    </span>
                  </div>
                  <div>
                    <p className="fs-7 mb-0">
                      This is the one channel that will always include everyone.
                      It’s a great spot for announcements and team-wide
                      conversations. Edit description
                    </p>
                  </div>
                </div>
              </div>
              <div className="ms-3">
                <button
                  className="border-0 bg-white text-primary py-3 px-4"
                  data-mdb-toggle="modal"
                  data-mdb-target="#addPeople"
                >
                  <i className="fa fa-user-plus" aria-hidden="true"></i> Add
                  people
                </button>
                {/* <!-- Modal --> */}
                <div
                  className="modal fade"
                  id="addPeople"
                  tabIndex="-1"
                  aria-labelledby="ChannelModal"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add People in {channel}
                        </h5>
                        <button
                          type="button"
                          className="btn-close"
                          data-mdb-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">
                        <div>
                          <input
                            className="form-control"
                            placeholder="Enter Name and Email"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-success">
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div>
              <div className="mt-3">
                <img
                  src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                  alt="profile"
                  className="rounded"
                  height="60"
                />
                <span className="fw-semibold ms-2">
                  {user} (you)
                  <i
                    className="fa fa-circle ms-2 text-success"
                    aria-hidden="true"
                  ></i>
                </span>
                <div className="mt-3">
                  <p>
                    <b>This is your space.</b> Draft messages, list your to-dos,
                    or keep links and files handy. You can also talk to yourself
                    here, but please bear in mind you’ll have to supply both
                    sides of the conversation
                  </p>
                  <button
                    className="border border-secondary px-3 rounded fw-bold"
                    data-mdb-toggle="modal"
                    data-mdb-target="#EditProfile"
                  >
                    Edit Profile
                  </button>
                  <button className="ms-2 border border-secondary px-3 rounded fw-bold">
                    Update Profile Photo
                  </button>
                  {/* <!-- Edit Profile Modal --> */}
                  <div
                    className="modal fade"
                    id="EditProfile"
                    tabIndex="-1"
                    aria-labelledby="editProfileModal"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalLabel">
                            Edit Your Profile
                          </h5>
                          <button
                            type="button"
                            className="btn-close"
                            data-mdb-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div className="modal-body">
                          <div className="d-flex justify-content-between">
                            <div>
                              <div>
                                <span className="d-block mb-2">Full Name</span>
                                <input
                                  placeholder="Enter Name"
                                  className="form-control"
                                  type="text"
                                />
                                <span className="mt-3 mb-2 d-block">
                                  Display Name
                                </span>

                                <input
                                  placeholder="Enter Your Display name"
                                  className="form-control"
                                />
                              </div>
                            </div>
                            <div>
                              <img
                                alt="profile"
                                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                                width={200}
                                className="rounded"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="modal-footer">
                          <button
                            type="button"
                            className="btn btn-secondary"
                            data-mdb-dismiss="modal"
                          >
                            Close
                          </button>
                          <button type="button" className="btn btn-success">
                            Save changes
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className=" mt-5">
            {messageList.map((message, id) => (
              <div
                className="d-flex align-items-center mb-3 MsgBox position-relative"
                key={id}
              >
                <div className="">
                  <img
                    src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="profile"
                    width={45}
                    className="rounded me-2"
                  />
                </div>
                <div className="d-flex justify-content-between w-100">
                  <div>
                    <div>
                      <span className="fw-bold">{user}</span>
                    </div>
                    <div ref={messagesEndRef}>
                      <span>{message}</span>
                    </div>
                  </div>
                  <div className="border px-2 rounded reactions bg-white position-absolute float-end top-0 end-0">
                    <div className="d-flex align-items-center">
                      <li className="me-3">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </li>
                      <li className="me-3">
                        <i className="fa fa-smile-o" aria-hidden="true"></i>
                        <span> React</span>
                      </li>
                      <li className="me-3">
                        <i
                          className="fa fa-commenting-o"
                          aria-hidden="true"
                        ></i>
                        <span> Reply</span>
                      </li>
                      <li className="dropstart">
                        <button
                          className="border-0"
                          aria-expanded="false"
                          data-mdb-toggle="dropdown"
                        >
                          <i
                            className="fa fa-ellipsis-v"
                            aria-hidden="true"
                          ></i>
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <button className="dropdown-item text-danger border-0">
                              Delete Message
                            </button>
                          </li>
                        </ul>
                      </li>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="mt-4 mx-3">
        <ChatBox input={input} setInput={setInput} addMsg={addMsg} />
      </div>
    </div>
  );
}
