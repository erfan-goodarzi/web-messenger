import { AddIcon, ChatIcon } from '@chakra-ui/icons';
import { IconButton, Input, Text } from '@chakra-ui/react';
import { SimpleGrid } from '@chakra-ui/react';
import { Flex } from '@chakra-ui/react';

const Chatlist = (props) => {
  const { chats, creds } = props;

  const rendreMsg = () => {
    if (chats) {
      const keys = Object.keys(chats);
      return keys.map((key, index) => {
        const msg = chats[key];
        console.log(msg);

        return (
          <div key={`msg${index}`} style={{ widt: '100%' }}>
            <p>{msg.title}</p>
          </div>
        );
      });
    }
  };
  return (
    <div>
      <SimpleGrid dspacing={2}>
        <Flex ml='3rem' align='center' w='71%'>
          <ChatIcon color='#392c8b' m={21} fontSize='xl' />
          <Text color='#392c8b' textAlign='cente' fontSize='2xl'>
            Web Messenger
          </Text>
        </Flex>
        <Flex mt='1rem' align='center' justify='space-evenly'>
          <Input
            variant='filled'
            placeholder='Create a Room'
            w='76%'
            ml='4'
            bg='#3f4751'
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
