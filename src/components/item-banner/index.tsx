import styles from "./index.module.css";

type Props = {
  text: string;
  startAt: string;
  endAt: string;
};

export const ItemBanner: React.FC<Props> = ({ text, startAt, endAt }) => {
  return (
    <div className={styles.container}>
      <div className={styles.date}>
        {startAt} - {endAt}
      </div>
      <div className={styles.text}>{text}</div>
    </div>
  );
};
