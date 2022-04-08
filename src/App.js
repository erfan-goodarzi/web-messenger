import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
import './app.css';
function App() {
  return (
    <>
      <ChatEngine
        height='98vh'
        projectID='116c0809-94cd-4f8d-b608-cdabc1fb23af'
        userName='Yark'
        userSecret='4459'
        renderChatFeed={(props) => <ChatFeed {...props} />}
        renderChatList={(chatAppState) => {}}
      />
    </>
  );
}

export default App;
