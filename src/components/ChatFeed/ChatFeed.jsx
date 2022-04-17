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
  color: #f05454;
  font-weight: 700;
  font-size: 33px;
  text-align: center;
  margin-top: 22px;
`;
const ChatSubtitle = styled.div`
  color: #f05454;
  font-weight: 400;
  font-size: 13px;
  text-align: center;
`;

const Chatfeed = (props) => {
  const { chats, activeChat, userName, messages } = props;
  const chat = chats && chats[activeChat];

  const renderReadReceipts = (message, isMyMessage) =>
    chat.people.map(
      (person, index) =>
        person.last_read === message.id && (
          <div
            key={`read_${index}`}
            className='read-receipt'
            style={{
              float: isMyMessage ? 'right' : 'left',
              backgroundImage:
                person.person.avatar && `url(${person.person.avatar})`,
            }}
          />
        )
    );
  const rendreMsg = () => {
    const keys = Object.keys(messages);
    return keys.map((key, index) => {
      const msg = messages[key];
      const lastMsgKey = index === 0 ? null : keys[index - 1];
      const isMyMsg = userName === msg.sender.username;

      return (
        <div key={`msg_${index}`} style={{ widt: '100%' }}>
          <div className='message-block'>
            {isMyMsg ? (
              <ChatOutBubble message={msg} />
            ) : (
              <ChatInBubble message={msg} lastMsg={messages[lastMsgKey]} />
            )}
          </div>
          <div
            className='read-receipts'
            style={{
              marginRight: isMyMsg ? '18px' : '0px',
              marginLeft: isMyMsg ? '0px' : '60px',
            }}>
            {renderReadReceipts(msg, isMyMsg)}
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
        {new Intl.DateTimeFormat('en-US', {
          dateStyle: 'medium',
        }).format(new Date(chat.created))}
      </ChatSubtitle>
      {rendreMsg()}
      <div
        className='form-container'
        style={{
          margin: '6rem 1rem',
        }}>
        <Messageform {...props} chatId={activeChat} />
      </div>
    </ChatFeed>
  );
};

export default Chatfeed;
