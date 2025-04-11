import { ChatContainer } from "../ChatContainer";
import { LoginForm } from "../LoginForm";
import StartChatForm from "../StartChatForm";
import useChat from "@hooks/useChat";
import useAuth from "@hooks/useAuth";

// interface LayoutChatProps {
//   isChatOpen: boolean;
//   auth: boolean;
//   activeChat: boolean;
//   messages: { text: string; role: string }[];
//   message: string;
//   setMessage: (value: string) => void;
//   SendMasseg: () => void;
//   CloseTicket: () => void;
//   getRole: (message: { text: string; role: string }) => string;
//   problemTitle: string;
//   setProblemTitle: (value: string) => void;
//   problemDescription: string;
//   setProblemDescription: (value: string) => void;
//   startChat: () => void;
//   email: string;
//   setUserEmail: (value: string) => void;
//   password: string;
//   setUserPassword: (value: string) => void;
//   setUserPasswordConfirm: (value: string) => void;
//   loginAction: () => void;
//   registerAction: () => void;
// }

// export const GetLayoutChat = ({
//   isChatOpen,
//   auth,
//   activeChat,
//   messages,
//   message,
//   setMessage,
//   SendMasseg,
//   CloseTicket,
//   getRole,
//   problemTitle,
//   setProblemTitle,
//   problemDescription,
//   setProblemDescription,
//   startChat,
//   email,
//   setUserEmail,
//   password,
//   setUserPassword,
//   setUserPasswordConfirm,
//   loginAction,
//   registerAction,
// }: LayoutChatProps) => {
//   if (!isChatOpen) return null;
//   if (auth && activeChat) {
//     return (
//       <ChatContainer
//         messages={messages}
//         message={message}
//         setMessage={setMessage}
//         SendMasseg={SendMasseg}
//         CloseTicket={CloseTicket}
//         getRole={getRole}
//       />
//     );
//   }
//   if (auth && activeChat === false) {
//     return (
//       <StartChatForm
//         problemTitle={problemTitle}
//         setProblemTitle={setProblemTitle}
//         problemDescription={problemDescription}
//         setProblemDescription={setProblemDescription}
//         startChat={startChat}
//       />
//     );
//   }
//   if (auth === false) {
//     return (
//       <LoginForm
//         email={email}
//         setUserEmail={setUserEmail}
//         password={password}
//         setUserPassword={setUserPassword}
//         setUserPasswordConfirm={setUserPasswordConfirm}
//         loginAction={loginAction}
//         registerAction={registerAction}
//       />
//     );
//   }
//   return null;
// };
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

  if (!isChatOpen) return <div>CHAT</div>;
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