import Messageform from './MessageForm';
import ChatInBubble from './ChatInBubble';
import ChatOutBubble from './ChatOutBubble';
import styled from 'styled-components';
const ChatFeed = styled.div`
  height: 100%;
  width: 100%;
  overflow: scroll;
  background-color: rgb(240, 240, 240);
`;
const ChatTitle = styled.div`
  color: #7554a0;
  font-weight: 800;
  font-size: 24px;
`;
const ChatSubtitle = styled.div`
  color: #7554a0;
  font-weight: 600;
  font-size: 12px;
  padding-top: 4px;
`;

const Chatfeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];
  const rendreMsg = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const msg = messages[key];
      const lastMsgKey = index === 0 ? null : keys[index - 1];
      const isMyMsg = userName === msg.sender.username;

      return (
        <div key={`msg${index}`} style={{ widt: '100%' }}>
          <div className='msg-block'>
            {isMyMsg ? (
              <ChatInBubble message={msg} lastMsg={lastMsgKey} />
            ) : (
              <ChatOutBubble message={msg} lastMsg={lastMsgKey} />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMsg ? '18px' : '0px',
              marginLeft: isMyMsg ? '0px' : '60px',
            }}>
            thir msg
          </div>
        </div>
      );
    });
  };

  if (!chat) return 'loading...';
  return (
    <ChatFeed>
      <ChatTitle>{chat?.title}</ChatTitle>
      <ChatSubtitle>
        {chat.people.map((person) => person.person.username)}
      </ChatSubtitle>
      {rendreMsg()}
      <div className='form-container'>
        <Messageform {...props} chatId={activeChat} />
      </div>
    </ChatFeed>
  );
};

export default Chatfeed;
