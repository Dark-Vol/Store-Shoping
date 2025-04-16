import { ChatContainer } from "../ChatContainer";
import { LoginForm } from "../LoginForm";
import StartChatForm from "../StartChatForm";
import useChat from "@hooks/useChat";
import useAuth from "@hooks/useAuth";
import styles from "./GetLayoutChat.module.scss";


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
      <div className={styles.chatButton} onClick={toggleChat} >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.25"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="lucide lucide-mails-icon lucide-mails">
          <rect
            width="16"
            height="13"
            x="6"
            y="4"
            rx="2" />
          <path d="m22 7-7.1 3.78c-.57.3-1.23.3-1.8 0L6 7" />
          <path d="M2 8v11c0 1.1.9 2 2 2h14" />
        </svg>
      </div>
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
  return <h1>test 2</h1>;
};

export default GetLayoutChat;