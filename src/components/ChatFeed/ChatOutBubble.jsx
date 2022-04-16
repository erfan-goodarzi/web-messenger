import styled from 'styled-components';
export const Message = styled.div`
  background: #f05454;
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 100;
  border-radius: 50px;
  max-width: 60%;
  float: right;
  margin: 4px 10px;
  color: #f0f0f0;
  border-top-right-radius: 2px;
`;

export const Img = styled.img`
  float: left;
  width: 42px;
  margin: 3px 1rem;
  border-radius: 3%;
`;

const ChatOutBubble = ({ message }) => {
  if (message?.attachments?.length > 0) {
    <Img src={message.attachments[0].file} alt='message' />;
  }

  return <Message>{message.text}</Message>;
};

export default ChatOutBubble;
