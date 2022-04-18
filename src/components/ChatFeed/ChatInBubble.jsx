import { Flex, Text } from '@chakra-ui/react';
import styled from 'styled-components';

const Message = styled.div`
  background: #222831;
  padding: 7px 12px;
  font-size: 16px;
  font-weight: 100;
  border-radius: 50px;
  max-width: 60%;
  float: left;
  margin: 10px 13px;
  color: #f0f0f0;
  border-top-left-radius: 2px;
`;

export const Img = styled.img`
  float: right;
  width: 36%;
  margin-right: 18px;
  object-fit: cover;
  border-radius: 6px;
  height: 12vw;
`;

const Avatar = styled.div`
  background-image: ${(props) => props.imgUrl};
  width: 44px;
  height: 44px;
  border-radius: 50%;
  background-size: cover;
  background-position: center;
`;
const ChatInBubble = ({ lastMsg, message }) => {
  const isFirstMsg =
    !lastMsg || lastMsg.sender.username !== message.sender.username;

  return (
    <Flex>
      {isFirstMsg && <Avatar imgUrl={`url(${message.sender.avatar})`} />}
      {message.attachments && message.attachments.length > 0 ? (
        <Img
          src={message.attachments[0].file}
          alt='message-attachment'
          style={{ marginLeft: isFirstMsg ? '4px' : '14px' }}
        />
      ) : (
        <Message sx={{ float: 'left' }}>{message.text}</Message>
      )}
      <Text
        sx={{
          float: 'right',
          fontSize: '12px',
          margin: '19px 1px',
          color: '#9b9b9b',
        }}>
        {new Intl.DateTimeFormat('en-US', { timeStyle: 'short' }).format(
          new Date(message.created)
        )}
      </Text>
    </Flex>
  );
};

export default ChatInBubble;
