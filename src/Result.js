function Result({ score, highScore, dispatch, maxPossiblePoints }) {
  const percentage = (score / maxPossiblePoints) * 100;
  return (
    <div className="result-container">
      <div className="result-content">
        <p className="total-score">
          Your score is <span className="result-font">{score}</span> 🥳🥳🎉🎉🎊
        </p>
        <p className="total-perc">{Math.ceil(percentage)}%</p>
        <p className="total-high score">
          your high Score is <span className="result-font">{highScore}</span>{" "}
          🥳🥳
        </p>
      </div>
      <div className="restart-container">
        <button
          className="restart-btn  btn"
          onClick={() => dispatch({ type: "reset" })}
        >
          Restart 🔄️
        </button>
      </div>
    </div>
  );
}

export default Result;
