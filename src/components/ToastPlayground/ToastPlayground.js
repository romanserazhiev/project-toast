import React from "react";

import Button from "../Button";
import { ToastContext } from "../ToastProvider";
import ToastShelf from "../ToastShelf";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const { createToast } = React.useContext(ToastContext);
  const [currentMessage, setCurrentMessage] = React.useState("");
  const [selectedOption, setSelectedOption] = React.useState("notice");

  function onPopToast() {
    createToast(currentMessage, selectedOption);

    setCurrentMessage("");
    setSelectedOption("notice");
  }

  function handleRadioSelect(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />

      <form
        onSubmit={(event) => {
          event.preventDefault();
          onPopToast();
        }}
        className={styles.controlsWrapper}
      >
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={currentMessage}
              onChange={(event) => {
                setCurrentMessage(event.target.value);
              }}
            />
          </div>
        </div>

        <div role="radiogroup" className={styles.row} aria-labelledby="variant">
          <div id="variant" className={styles.label}>
            Variant
          </div>

          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((option) => (
              <label key={option} htmlFor={`variant-${option}`}>
                <input
                  id={`variant-${option}`}
                  type="radio"
                  name="variant"
                  value={option}
                  checked={option === selectedOption}
                  onChange={handleRadioSelect}
                />
                {option}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
