import { useState } from 'react';
import { sendMessage, isTyping } from 'react-chat-engine';
import styled from 'styled-components';
const Form = styled.form`
  overflow: hidden;
  border-radius: 6px;
  border: 1px solid #3b2a50;
  background-color: white;
`;

const Input = styled.input`
  height: 40px;
  width: calc(100% - 132px);
  background-color: white;
  border: 1px solid white;
  padding: 0px 18px;
  outline: none;
  font-size: 15px;
`;
const FormWrapper = styled.div`
  position: absolute;
  bottom: 0px;
  width: calc(100% - 36px);
  padding: 18px;
  background-color: rgb(240, 240, 240);
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
        <Input
          value={value}
          type='text'
          placeholder='Send a message'
          onChange={handleChange}
          onSubmit={handleSubmit}
        />
      </Form>
      <label htmlFor='upload'>
        <span></span>
      </label>
    </FormWrapper>
  );
};

export default Messageform;
