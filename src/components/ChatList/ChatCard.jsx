import { Box } from '@chakra-ui/react';

const Chatcard = ({ title, clicked, id }) => {
  return (
    <div>
      <Box
        id={id}
        onClick={clicked}
        bg='#30475E'
        w='93%'
        height={85}
        p={4}
        m='4px 11px'
        color='white'
        transition='0.3s all ease-in-out'
        _hover={{
          transition: '0.3s all ease-in-out',
          boxShadow: '-2px 1px 7px 2px #758ba1',
        }}>
        {title}
      </Box>
    </div>
  );
};

export default Chatcard;
