import React, { useState } from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import Chat from "./Chat";

export default function Home({ name }) {
  const [channel, setChannel] = useState("");
  const [user, setUser] = useState("");
  return (
    <>
      <Header />
      <div className="d-flex justify-content-between">
        <SideBar
          channel={channel}
          name={name}
          setChannel={setChannel}
          setUser={setUser}
        />
        <Chat channel={channel} user={name || user} setUser={setUser} />
      </div>
    </>
  );
}
