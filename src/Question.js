function Question({ questions, dispatch, answer }) {
  const hasAnswered = answer !== null;
  // const image = questions.img;
  console.log(questions.img);
  return (
    <div className="question">
      <div className="question-container">
        <h4 className="questions">{questions.question}</h4>
        {questions.img && (
          <img
            className="image"
            src={questions.img}
            alt="error in loading the img"
            key={Date.now()}
          />
        )}
      </div>
      <div className="opt-btn-container">
        {questions.options.map((item, index) => (
          <button
            className={`opt_btn btn
              
              ${index === answer ? "answer-user" : ""}
              ${
                hasAnswered
                  ? index === questions.correctOption
                    ? "correct_ans"
                    : "wrong_ans"
                  : ""
              }`}
            key={item}
            disabled={hasAnswered}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Question;
