import { ChatContainer } from "../ChatContainer";
import { LoginForm } from "../LoginForm";
import StartChatForm from "../StartChatForm";
import useChat from "@hooks/useChat";
import useAuth from "@hooks/useAuth";
import styles from "./GetLayoutChat.module.scss";
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

  if (!isChatOpen) {
    return (
      <BtnChat onClick={toggleChat} />
    )
  }
  if (auth && activeChat) {
    return (
      <ChatContainer
        messages={messages}
        message={message}
        setMessage={setMessage}
        SendMasseg={SendMasseg}
        CloseTicket={CloseTicket}
        getRole={getRole}
      />
    );
  }
  if (auth && activeChat === false) {
    return (
      <StartChatForm
        problemTitle={problemTitle}
        setProblemTitle={setProblemTitle}
        problemDescription={problemDescription}
        setProblemDescription={setProblemDescription}
        startChat={startChat}
      />
    );
  }
  if (auth === false) {
    return (
      <LoginForm
        email={email}
        setUserEmail={setUserEmail}
        password={password}
        setUserPassword={setUserPassword}
        loginAction={loginAction}
        registerAction={registerAction}
      />
    );
  }
  return <h1 className={styles.title}>test 2</h1>;
};

export default GetLayoutChat;