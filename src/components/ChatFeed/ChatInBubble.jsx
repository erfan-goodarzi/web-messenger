import styled from 'styled-components';
import { Img, Message } from './ChatOutBubble';
const Avatar = styled.span`
  backgroundimage: ${(props) => props.imgUrl};
`;
const ChatInBubble = ({ lastMsg, message }) => {
  const isFirstMsg =
    !lastMsg || lastMsg?.sender?.username !== message?.sender?.username;

  return (
    <>
      {isFirstMsg && <Avatar imgUrl={`url(${message?.sender?.avatar})`} />}
      {message?.attachments?.length > 0 ? (
        <Img src={message.attachments[0].file} alt='message' />
      ) : (
        <Message>{message.text}</Message>
      )}
    </>
  );
};

export default ChatInBubble;
