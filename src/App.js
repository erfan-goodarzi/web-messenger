import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './app.css';
// import Chatlist from './components/ChatList/ChatList';

function App() {
  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='6662a658-aec5-447e-be79-296de22bd51c'
        userName='Erfan'
        userSecret='4459'
        renderChatFeed={(props) => <ChatFeed {...props} />}
        // renderChatList={(props) => <Chatlist {...props} />}
      />
    </>
  );
}

export default App;
