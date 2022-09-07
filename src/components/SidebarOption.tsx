import { addDoc, collection } from 'firebase/firestore/lite';
import styled from 'styled-components';
import { db } from '../firebase';
import { SidebarOptionProps } from '../interfaces/sidebar.interfaces';

export const SidebarOption = ({ Icon, title, addChannelOption }: SidebarOptionProps) => {
  const addChannel = () => {
    const channelName = prompt('Please enter the channel name');

    if (channelName) {
      addDoc(collection(db, 'channels'), {
        name: channelName,
      });
    }
  };
  const selectChannel = () => {};

  return (
    <SidebarOptionContainer onClick={addChannelOption ? addChannel : selectChannel}>
      {Icon && <Icon fontSize="small" style={{ padding: 10 }} />}
      {Icon ? (
        <h3>{title}</h3>
      ) : (
        <SidebarOptionChannel>
          <span>#</span>
          {title}
        </SidebarOptionChannel>
      )}
    </SidebarOptionContainer>
  );
};

const SidebarOptionContainer = styled.div`
  display: flex;
  font-size: 12px;
  align-items: center;
  padding-left: 2px;

  :hover {
    opacity: 0.9;
    background-color: #340e36;
    cursor: pointer;
  }

  > h3 {
    font-weight: 500;
  }

  > h3 > span {
    padding: 15px;
  }
`;
const SidebarOptionChannel = styled.div``;
