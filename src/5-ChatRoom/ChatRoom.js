import { useEffect, useState } from "react";
import { fakeFetch } from "./fakefetch";

// Create a React component that fetches chats from an API endpoint using useEffect hook and display chat data (chat message) as a list on the screen using the useState hook. Display "You: " before every odd message and "user: " at every even message.
export function ChatRoom() {
  const URL = "https://example.com/api/userchats";
  const [chats, setChats] = useState([]);
  const getChats = async () => {
    try {
      const { status, data } = await fakeFetch(URL);
      if (status === 200) setChats(data);
    } catch ({ status, message }) {
      console.error(`${status} : ${message}`);
    }
  };
  const showChats = () => {
    return chats?.map((chat, index) => {
      if (index % 2 === 0) {
        return <p key={index}>You: {chat}</p>;
      } else {
        return <p key={index}>User: {chat}</p>;
      }
    });
  };

  useEffect(() => {
    getChats();
  }, []);
  return (
    <div
      style={{
        border: "0.2rem solid lightgrey",
        borderRadius: "0.3rem",
        padding: "1rem",
        margin: "0.8rem 0"
      }}
    >
      <h2>Chat Room </h2>
      <div>{showChats()}</div>
    </div>
  );
}
