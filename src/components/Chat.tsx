import { useMemo, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ChatInput } from './ChatInput';
import { selectChannelId } from '../features/appSlice';
import { db } from '../firebase';

import { doc, getDoc } from 'firebase/firestore/lite';
import StarOutlineOutlinedIcon from '@mui/icons-material/StarOutlineOutlined';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import styled from 'styled-components';

export const Chat = () => {
  const channelId = useSelector(selectChannelId);
  const [channelContent, setChannelContent] = useState() as any;
  const [channelMessages, setChannelMessages] = useState([]) as any[];

  useEffect(() => {
    if (channelId) {
      fetchChannelData();
      fetchChannelMessages();
    }
  }, [channelId]);

  const fetchChannelData = async () => {
    const channelDetailsRef = doc(db, 'channels', channelId);
    const docSnap = await getDoc(channelDetailsRef);
    if (docSnap.exists()) {
      console.log('docSnap', docSnap.data());
      setChannelContent(docSnap.data());
    }
  };
  const fetchChannelMessages = async () => {
    // collection(db, 'messages')
  };

  return (
    <ChatContainer>
      <Header>
        <HeaderLeft>
          <h4>
            <strong>#Channel-name</strong>
          </h4>
          <StarOutlineOutlinedIcon />
        </HeaderLeft>
        <HeaderRight>
          <p>
            <InfoOutlinedIcon />
            Details
          </p>
        </HeaderRight>
      </Header>
      <ChatMessages></ChatMessages>
      <ChatInput channelName="Test" channelId={channelId} />
    </ChatContainer>
  );
};

const ChatContainer = styled.div`
  flex: 0.7;
  flex-grow: 1;
  overflow-y: auto;
  margin-top: 40px;
`;

const ChatMessages = styled.div``;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  border-bottom: 1px solid lightgray;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;

  > h4 {
    display: flex;
    text-transform: lowercase;
    margin-right: 10px;
  }

  > h4 > .MuiSvgIcon-root {
    margin-left: 10px;
    font-size: 18px;
  }
`;
const HeaderRight = styled.div`
  > p {
    display: flex;
    align-items: center;
    font-size: 14px;
  }

  > p > .MuiSvgIcon-root {
    margin-right: 5px !important;
    font-size: 16px;
  }
`;
