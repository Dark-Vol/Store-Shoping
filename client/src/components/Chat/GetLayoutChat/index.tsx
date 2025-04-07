// import { ChatContainer } from "@components/Chat/ChatContainer";
// import { StartChatForm } from "@components/Chat/StartChatForm";
// import { LoginForm } from "@components/Chat/LoginForm";

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
