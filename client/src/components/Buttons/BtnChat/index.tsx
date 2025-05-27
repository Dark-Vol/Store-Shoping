import styles from './BtnChat.module.scss';

interface BtnChatProps {
  onClick: () => void;
}

const BtnChat: React.FC<BtnChatProps> = ({ onClick }) => {
  return (
    <button
      className={styles.btnChat}
      type="button"
      aria-label="Open chat"
      data-testid="btn-chat"
      onClick={onClick}>
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
    </button>
  )
}

export default BtnChat
