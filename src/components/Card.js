import { useState } from "react";
import styles from "./Card.module.css";

const Card = (props) => {
  const [check, setCheck] = useState();

  const delteTodoHandler = () => {
    props.delete(props.id);
  };

  const finishedTodoHandler = (e) => {
    if (e.target.checked === true) {
      setCheck(() => true);
    } else {
      setCheck(() => false);
    }
  };

  return (
    <>
      <div className={check ? styles.cardBlur : styles.card}>
        <input
          type="checkbox"
          className={styles.checkbox}
          onClick={finishedTodoHandler}
        />
        <p className={check ? styles.strikeThrough : styles.cardText}>
          {props.title}
        </p>
        <button className={styles.trashBtn} onClick={delteTodoHandler}>
          <svg
            className={styles.trashIcon}
            xmlns="http://www.w3.org/2000/svg"
            width="35"
            height="35"
            viewBox="0 0 24 24"
          >
            <g fill="currentColor">
              <path d="M12 2.75a2.25 2.25 0 0 0-2.122 1.5a.75.75 0 0 1-1.414-.5a3.751 3.751 0 0 1 7.072 0a.75.75 0 0 1-1.414.5A2.251 2.251 0 0 0 12 2.75ZM2.75 6a.75.75 0 0 1 .75-.75h17a.75.75 0 0 1 0 1.5h-17A.75.75 0 0 1 2.75 6Zm3.165 2.45a.75.75 0 1 0-1.497.1l.464 6.952c.085 1.282.154 2.318.316 3.132c.169.845.455 1.551 1.047 2.104c.591.554 1.315.793 2.17.904c.822.108 1.86.108 3.146.108h.879c1.285 0 2.324 0 3.146-.108c.854-.111 1.578-.35 2.17-.904c.591-.553.877-1.26 1.046-2.104c.162-.814.23-1.85.316-3.132l.464-6.952a.75.75 0 0 0-1.497-.1l-.46 6.9c-.09 1.347-.154 2.285-.294 2.99c-.137.685-.327 1.047-.6 1.303c-.274.256-.648.422-1.34.512c-.713.093-1.653.095-3.004.095h-.774c-1.35 0-2.29-.002-3.004-.095c-.692-.09-1.066-.256-1.34-.512c-.273-.256-.463-.618-.6-1.303c-.14-.705-.204-1.643-.294-2.99l-.46-6.9Z" />
              <path d="M9.425 10.254a.75.75 0 0 1 .821.671l.5 5a.75.75 0 0 1-1.492.15l-.5-5a.75.75 0 0 1 .671-.821Zm5.821.821a.75.75 0 0 0-1.492-.15l-.5 5a.75.75 0 0 0 1.492.15l.5-5Z" />
            </g>
          </svg>
        </button>
      </div>
    </>
  );
};

export default Card;
