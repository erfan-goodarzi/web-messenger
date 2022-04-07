import Messageform from './MessageForm';
import ChatInBubble from './ChatInBubble';
import ChatOutBubble from './ChatOutBubble';

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
    <div className='chat-feed'>
      <div className='chat-title'>{chat?.title}</div>
      <div className='chat-subtitle'>
        {chat.people.map((person) => person.person.username)}
      </div>
      {rendreMsg()}
      <div className='form-container'>
        <Messageform {...props} chatId={activeChat} />
      </div>
    </div>
  );
};

export default Chatfeed;
