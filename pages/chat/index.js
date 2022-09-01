// export default function Chat() {
//   return (
//       <main className='main'>
//       </main>
//   );
// }
import { useState } from 'react';
import ChatSystem from '../../scripts/chat';
import styles from '../../styles/Home.module.css';

const Chat = () => {
  const { messages, sendMessage } = ChatSystem(); // Creates a websocket and manages messaging
  const [newMessage, setNewMessage] = useState([]); // Message to be sent

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    var chatDiv = document.getElementsByClassName(`messagesList`)[0];
    sendMessage(newMessage);
    setNewMessage('');
    setTimeout(function () {
      chatDiv.scrollTop = chatDiv.scrollHeight;
    }, 150);
  };

  return (
    <main className='container'>
      <div className='messagesContainer'>
        <div className='messagesList'>
          {messages.map((message, i) => (
            <li
              key={i}
              className={`messageItem ${
                message.ownedByCurrentUser ? 'my-message' : 'received-message'
              }`}
            >
              {message}
            </li>
          ))}
        </div>
      </div>
      <div>
        <form id={styles.form}>
          <input
            type='text'
            placeholder='Type a message...'
            value={newMessage}
            onChange={handleNewMessageChange}
          />
          <button
            className='damnbuttons'
            onClick={handleSendMessage}
            value='submit'
          >
            Send
          </button>
        </form>
      </div>
    </main>
  );
};

export default Chat;
