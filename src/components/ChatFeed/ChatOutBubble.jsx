import { Text } from '@chakra-ui/react';
import styled from 'styled-components';

const Message = styled.div`
  background: #f05454;
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 100;
  border-radius: 50px;
  max-width: 60%;
  float: right;
  margin: 10px 13px;
  color: #f0f0f0;
  border-top-right-radius: 2px;
`;

export const Img = styled.img`
  float: right;
  width: 36%;
  margin-right: 18px;
  object-fit: cover;
  border-radius: 6px;
  height: 12vw;
`;

const ChatOutBubble = ({ message }) => {
  return (
    <>
      {message?.attachments?.length > 0 ? (
        <Img src={message.attachments[0].file} alt='message' />
      ) : (
        <Message>{message.text}</Message>
      )}
      <Text
        sx={{
          float: 'right',
          fontSize: '12px',
          margin: '18px 1px',
          color: '#9b9b9b',
        }}>
        {new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(
          new Date(message.created)
        )}
      </Text>
    </>
  );
};

export default ChatOutBubble;
