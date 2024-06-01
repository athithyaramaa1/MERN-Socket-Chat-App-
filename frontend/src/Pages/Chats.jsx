import { useEffect, useState } from "react";
import axios from 'axios'

const Chats = () => {
  const [state, setState] = useState([]);
  
  const fetchChat = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/api/chat");
      console.log(data)
      setState(data);
    } catch (error) {
      console.error("Error fetching chat:", error);
    }
  };

  useEffect(() => {
    fetchChat();
  }, []);

  return (
    <div>
      {state.map(chat => <div key={chat._id}>{chat.chatName}</div>)}
    </div>
  );
};

export default Chats;
