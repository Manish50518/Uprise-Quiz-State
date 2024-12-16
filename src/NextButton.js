function NextButton({ dispatch, numQuestion, index, answer }) {
  if (answer === null) return;

  if (index < numQuestion - 1) {
    return (
      <div className="next-btn-container">
        <button
          className="next_btn btn"
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next ➡️
        </button>
      </div>
    );
  }

  if (index === numQuestion - 1) {
    return (
      <div className="next-btn-container">
        <button
          className="next_btn btn"
          onClick={() => dispatch({ type: "finish" })}
        >
          Finish ✔️
        </button>
      </div>
    );
  }
}

export default NextButton;
