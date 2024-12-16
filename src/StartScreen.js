function StartScreen({ numQuestion, dispatch }) {
  return (
    <div className="start-container">
      <h2 className="wellcome-text">Wellcome to the Uprise Quiz 😉</h2>
      <h3 className="questions-start">{numQuestion} questions to answer</h3>
      <h2>Let's goo ➡️</h2>
      <button
        onClick={() => dispatch({ type: "start" })}
        className="start-btn btn"
      >
        START
      </button>
    </div>
  );
}

export default StartScreen;
