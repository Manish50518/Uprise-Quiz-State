function Progress({ index, numQuestion, answer }) {
  return (
    <header className="progress">
      <progress max={numQuestion} value={index + Number(answer !== null)} />
      <p>
        Question <strong>{index + 1}</strong>/ {numQuestion}
      </p>
    </header>
  );
}

export default Progress;
