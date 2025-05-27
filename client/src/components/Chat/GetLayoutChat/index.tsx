import { ChatContainer } from "../ChatContainer";
import { LoginForm } from "../LoginForm";
import StartChatForm from "../StartChatForm";
import useChat from "@hooks/useChat";
import useAuth from "@hooks/useAuth";
import BtnChat from "@components/Buttons/BtnChat";


const GetLayoutChat: React.FC = () => {

  const {
    messages,
    message,
    setMessage,
    SendMasseg,
    problemDescription,
    problemTitle,
    activeChat,
    isChatOpen,
    getRole,
    CloseTicket,
    setProblemTitle,
    setProblemDescription,
    startChat,
    toggleChat,
  } = useChat()

  const {
    auth,
    email,
    setUserEmail,
    password,
    setUserPassword,
    loginAction,
    registerAction,
  } = useAuth()

  return (
    <>
      <BtnChat onClick={toggleChat} />

      {isChatOpen && (
        <>
          {auth === false && (
            <LoginForm
              email={email}
              setUserEmail={setUserEmail}
              password={password}
              setUserPassword={setUserPassword}
              loginAction={loginAction}
              registerAction={registerAction}
            />
          )}

          {auth && activeChat === false && (
            <StartChatForm
              problemTitle={problemTitle}
              setProblemTitle={setProblemTitle}
              problemDescription={problemDescription}
              setProblemDescription={setProblemDescription}
              startChat={startChat}
            />
          )}

          {auth && activeChat && (
            <ChatContainer
              messages={messages}
              message={message}
              setMessage={setMessage}
              SendMasseg={SendMasseg}
              CloseTicket={CloseTicket}
              getRole={getRole}
            />
          )}
        </>
      )}
    </>
  )
};

export default GetLayoutChat;