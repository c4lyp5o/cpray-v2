import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import socketIOClient from 'socket.io-client';

import styles from '../../styles/Home.module.css';

const NEW_CHAT_MESSAGE_EVENT = 'chat message';
const SOCKET_SERVER_URL = 'https://chat.waktusolat.me';

const ChatSystem = () => {
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  const socketRef = useRef();

  useEffect(() => {
    setUsername('Anon' + Math.floor(Math.random() * 100));

    socketRef.current = socketIOClient(SOCKET_SERVER_URL);

    socketRef.current.emit('joining msg', username);

    socketRef.current.on(NEW_CHAT_MESSAGE_EVENT, (message) => {
      setMessages((messages) => [...messages, message]);
    });

    return () => {
      socketRef.current.disconnect();
    };
  }, []);

  const sendMessage = (messageBody) => {
    const message = `${username}: ${messageBody.trim()}`;

    if (message.length > 0) {
      setMessages((messages) => [...messages, message]);
      socketRef.current.emit(NEW_CHAT_MESSAGE_EVENT, message);
    }
  };

  return (
    <>
      <Head>
        <title>Chat</title>
        <meta
          name='description'
          content='Chat dengan orang awam tanpa diketahui nama'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
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
          <form
            id={styles.form}
            onSubmit={(event) => {
              event.preventDefault();
              sendMessage(event.target.message.value);
              event.target.message.value = '';
            }}
          >
            <input type='text' name='message' />
            <button type='submit'>Send</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ChatSystem;
