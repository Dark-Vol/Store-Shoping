import { ChatContainer } from "../ChatContainer";
import { LoginForm } from "../LoginForm";
import { RegistraisheForm } from "../RegistraisheForm"
import StartChatForm from "../StartChatForm";
import useChat from "@hooks/useChat";
import useAuth from "@hooks/useAuth";
import BtnChat from "@components/Buttons/BtnChat";
import styles from './GetLayoutChat.module.scss';
import { useEffect, useRef, useState } from 'react';

const GetLayoutChat: React.FC = () => {
  const chatRef = useRef<HTMLDivElement>(null);
  // Новое состояние для переключения между формами
  const [isRegistered, setIsRegistered] = useState(true); // true = LoginForm, false = RegistraisheForm

  // Функции для переключения форм
  const handleSwitchToRegister = () => setIsRegistered(false);
  const handleSwitchToLogin = () => setIsRegistered(true);

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
    firstName,
    setFirstName,
    lastName,
    setLastName,
  } = useAuth()

  // Обработчик клика вне чата
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (chatRef.current && !chatRef.current.contains(event.target as Node)) {
        // Проверяем, что клик не по кнопке чата
        const target = event.target as HTMLElement;
        if (!target.closest('[data-testid="btn-chat"]')) {
          toggleChat();
        }
      }
    };

    if (isChatOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isChatOpen, toggleChat]);

  return (
    <>
      <div className={styles.btnChatContainer}>
        <BtnChat onClick={toggleChat} />
      </div>

      {isChatOpen && (
        <div className={styles.chatPopup} ref={chatRef}>
          <div className={styles.chatContent}>
            <div className={styles.chatHeader}>
              <h3 className={styles.chatTitle}>
                {auth ? (activeChat ? 'Чат поддержки' : 'Начать чат') : (isRegistered ? 'Войти в чат' : 'Регистрация')}
              </h3>
              <button
                className={styles.closeButton}
                onClick={toggleChat}
                aria-label="Закрыть чат"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            {/* Если не авторизован, показываем одну из форм */}
            {auth === false && (
              isRegistered ? (
                <LoginForm
                  email={email}
                  setUserEmail={setUserEmail}
                  password={password}
                  setUserPassword={setUserPassword}
                  loginAction={loginAction}
                  registerAction={registerAction}
                  onSwitchToRegister={handleSwitchToRegister}
                />
              ) : (
                <RegistraisheForm
                  email={email}
                  setUserEmail={setUserEmail}
                  password={password}
                  setUserPassword={setUserPassword}
                  firstName={firstName}
                  setFirstName={setFirstName}
                  lastName={lastName}
                  setLastName={setLastName}
                  loginAction={loginAction}
                  registerAction={registerAction}
                  onSwitchToLogin={handleSwitchToLogin}
                />
              )
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
          </div>
        </div>
      )}
    </>
  )
};

export default GetLayoutChat;