import { ArrowForwardIcon, AttachmentIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import styled from 'styled-components';
const Form = styled.form`
  overflow: hidden;
  align-items: center;
  display: flex;
  justify-content: space-around;
`;

const Input = styled.input`
  height: 40px;
  color: #fff;
  width: calc(100% - 132px);
  background-color: #30475e;
  border-radius: 5px;
  padding: 0px 18px;
  outline: none;
  font-size: 15px;
`;
const FormWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: 100%;
  padding: 10px;
  background-color: rgb(240, 240, 240);
  left: 0;
`;
const Messageform = (props) => {
  const [value, setValue] = useState('');
  const { chatId, creds } = props;
  const handleSubmit = (e) => {
    e.preventDefault();
    const text = value.trim();

    if (text.length > 0) {
      sendMessage(creds, chatId, { text });
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
    isTyping(props, chatId);
  };
  return (
    <FormWrapper>
      <Form onSubmit={handleSubmit}>
        <IconButton
          size='sm'
          border='none'
          variant='outline'
          padding={[1, 2]}
          aria-label='Attacment'
          color='#30475e'
          fontSize='17px'
          icon={<AttachmentIcon />}
        />

        <Input
          value={value}
          type='text'
          placeholder='Send a message'
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
        <IconButton
          size='sm'
          border='none'
          onClick={handleSubmit}
          
          variant='outline'
          padding={[1, 2]}
          aria-label='Send'
          color='#30475e'
          fontSize='17px'
          icon={<ArrowForwardIcon />}
        />
      </Form>
      <label htmlFor='upload'>
        <span></span>
      </label>
    </FormWrapper>
  );
};

export default Messageform;
