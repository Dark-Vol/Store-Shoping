import styles from "./StartChatForm.module.scss";
import BtnStartChat from "@components/Buttons/BtnStartChat"; 
import InputDiscription from "@components/Inputs/InputDiscription";
import InputTitle from "@components/Inputs/InputTitle";


type StartChatFormProps = {
  problemTitle: string;
  setProblemTitle: (value: string) => void;
  problemDescription: string;
  setProblemDescription: (value: string) => void;
  startChat: () => void;
};

export const StartChatForm: React.FC<StartChatFormProps> = ({
  problemTitle,
  setProblemTitle,
  problemDescription,
  setProblemDescription,
  startChat,
}) => (
  <div className={styles.form_container}>
    <InputTitle
      value={problemTitle}
      onChange={(e) => setProblemTitle(e.target.value)}
    />
    <InputDiscription
      value={problemDescription}
      onChange={(e) => setProblemDescription(e.target.value)}
    />
    <BtnStartChat onClick={startChat} />
  </div>
);

export default StartChatForm;