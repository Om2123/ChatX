import { useState, useEffect, useContext } from "react";
import io from "socket.io-client";
import MyContex from './MyContex';
import "./App.css";

// dot .env
const socket = io("http://localhost:5000/");



function App() {
  const {userName} = useContext(MyContex);
  const [message, setMessage] = useState("");
  const [chat, setChat] = useState([]);

  const sendM = (e) => {
    e.preventDefault();
    socket.emit("chat", { message, userName: userName });
    setMessage("");
  };

  useEffect(() => {
    socket.on("chat", (payload) => {
      setChat([...chat, payload]);
    });
  });

  return (
    <div className="App">
      <h1>CHAT X </h1>
      <section>
        {chat.map((payload, index) => {
          return (
            <p key={index} id="c" className="mess">
              {payload.message} <span>UserName: {payload.userName}</span>
            </p>
          );
        })}
      </section>

      <header>
        <form onSubmit={sendM}>
          <input
            type="text"
            placeholder="enter message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />

          <button type="submit">Send</button>
        </form>
      </header>
    </div>
  );
}

export default App;
