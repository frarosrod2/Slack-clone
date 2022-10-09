import { Button } from '@mui/material';
import { addDoc, collection, doc, serverTimestamp } from 'firebase/firestore/lite';
import React, { useRef } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { ChatInputProps } from '../interfaces/chat.interfaces';

export const ChatInput = ({ channelName, channelId }: ChatInputProps) => {
  const inputRef = useRef('') as any;

  const sendMessage = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!channelId || !inputRef?.current?.value) {
      return false;
    }

    const selectedChannel = doc(db, 'channels', channelId);
    console.log('selectedChannel', selectedChannel);
    await addDoc(collection(selectedChannel, 'messages'), {
      message: inputRef.current.value,
      timestamp: serverTimestamp(),
      user: 'Sonny',
      userImage: 'https://avatars.githubusercontent.com/u/24712956?v=4',
    });

    inputRef.current.value = '';
  };

  return (
    <ChatInputContainer>
      <form>
        <input ref={inputRef} placeholder={`Message #${channelName}`} />
        <Button hidden type="submit" onClick={sendMessage}>
          SEND
        </Button>
      </form>
    </ChatInputContainer>
  );
};

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 600px;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;
