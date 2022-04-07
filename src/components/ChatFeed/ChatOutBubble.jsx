import styled from 'styled-components';
export const Message = styled.div`
  float: 'rigth';
  margin-right: '18px';
  color: '#3b2a50';
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
