import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './app.css';
import Chatlist from './components/ChatList/ChatList';

function App() {
  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='116c0809-94cd-4f8d-b608-cdabc1fb23af'
        userName='Yark'
        userSecret='4459'
        renderChatFeed={(props) => <ChatFeed {...props} />}
        renderChatList={(props) => <Chatlist {...props} />}
      />
    </>
  );
}

export default App;
