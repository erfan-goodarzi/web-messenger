import { ChatEngine } from 'react-chat-engine';
import ChatFeed from './components/ChatFeed/ChatFeed';
function App() {
  return (
    <>
      <ChatEngine
        height='88vh'
        projectID='116c0809-94cd-4f8d-b608-cdabc1fb23af'
        userName='Yark'
        userSecret='4459'
        onNewMessage={(chatId, message) =>
          alert('u have a new message from someone')
        }
        renderChatFeed={(props) => <ChatFeed {...props} />}
      />
    </>
  );
}

export default App;
