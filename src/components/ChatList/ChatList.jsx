import { AddIcon, ChatIcon } from '@chakra-ui/icons';
import { IconButton, Input, Text } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';
import Chatcard from './ChatCard';

const Chatlist = (props) => {
  const { chats, setActiveChat } = props;

  const setChat = (e) => {
    setActiveChat(e.target.id);
  };
  const rendreMsg = () => {
    if (chats) {
      const keys = Object.keys(chats);
      return keys.map((key, index) => {
        const msg = chats[key];
        return (
          <div key={`msg${index}`} style={{ widt: '100%' }}>
            <Chatcard title={msg.title} id={msg.id} clicked={setChat} />
          </div>
        );
      });
    }
  };
  return (
    <div>
      <SimpleGrid dspacing={2}>
        <Flex ml='3rem' align='center' w='71%'>
          <ChatIcon color='#F05454' m={21} fontSize='xl' />
          <Text color='#F05454' textAlign='cente' fontSize='2xl'>
            Web Messenger
          </Text>
        </Flex>
        <Flex mt='1rem' align='center' justify='space-evenly' mb={12}>
          <Input
            variant='filled'
            placeholder='Create a Room'
            w='76%'
            ml='4'
            bg='#30475E'
            _hover={{
              background: '#3f4751',
            }}
          />
          <IconButton
            _hover={{
              background: '#90A4BC',
            }}
            icon={<AddIcon />}
          />
        </Flex>
        {rendreMsg()}
      </SimpleGrid>
    </div>
  );
};

export default Chatlist;
