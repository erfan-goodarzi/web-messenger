import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './app.css';
import Loginform from './components/Auth/LoginForm';
// import Chatlist from './components/ChatList/ChatList';

function App() {
  if (!localStorage.getItem('username')) return <Loginform />;
  return (
    <>
      <ChatEngine
        height='100vh'
        projectID='6662a658-aec5-447e-be79-296de22bd51c'
        userName={localStorage.getItem('username')}
        userSecret={localStorage.getItem('password')}
        renderChatFeed={(props) => <ChatFeed {...props} />}
        // renderChatList={(props) => <Chatlist {...props} />}
      />
    </>
  );
}

export default App;
