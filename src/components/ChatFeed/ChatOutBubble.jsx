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
  float: left;
  width: 42px;
  margin: 3px 1rem;
  border-radius: 3%;
`;

const ChatOutBubble = ({ message }) => {
  if (message?.attachments?.length > 0) {
    <Img src={message.attachments[0].file} alt='message' />;
  }

  return (
    <>
      <Message>{message.text}</Message>
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
