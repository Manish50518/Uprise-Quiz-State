import { useEffect, useReducer } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Error from "./Error";
import Loading from "./Loading";
import StartScreen from "./StartScreen";
import Question from "./Question";
import NextButton from "./NextButton";
import Result from "./Result";
import ProgressBar from "./ProgressBar";

const initialState = {
  questions: [
    {
      question: "WAP stands for?",
      options: [
        "Wireless Application Protocol",
        "Wireless Application Program",
        "Wireless Application Portal",
        "Wireless Application parts",
      ],

      correctOption: 0,
      points: 10,
    },
    {
      question:
        "According to the give image the working Lifecycle of a React component is true or false",
      options: ["true", "false"],
      img: "https://ojhyoprgrmmnpiaavsiq.supabase.co/storage/v1/object/public/product-images/reactlifecycle.webp",
      correctOption: 0,
      points: 10,
    },
    {
      question: "Which company invented React?",
      options: ["Google", "Apple", "Netflix", "Facebook"],
      correctOption: 3,
      multiOption: [1, 3],
      points: 10,
    },
    {
      question: "What's the fundamental building block of React apps?",
      options: ["Components", "Blocks", "Elements", "Effects"],
      correctOption: 0,
      points: 10,
    },
    {
      question:
        "What's the name of the syntax we use to describe the UI in React components?",
      options: ["FBJ", "Babel", "JSX", "ES2015"],
      correctOption: 2,
      points: 10,
    },
    {
      question: "How does data flow naturally in React apps?",
      options: [
        "From parents to children",
        "From children to parents",
        "Both ways",
        "The developers decides",
      ],
      correctOption: 0,
      points: 10,
    },
    {
      question: "How to pass data into a child component?",
      options: ["State", "Props", "PropTypes", "Parameters"],
      correctOption: 1,
      points: 10,
    },
    {
      question: "When to use derived state?",
      options: [
        "Whenever the state should not trigger a re-render",
        "Whenever the state can be synchronized with an effect",
        "Whenever the state should be accessible to all components",
        "Whenever the state can be computed from another state variable",
      ],
      correctOption: 3,
      points: 30,
    },
    {
      question: "What triggers a UI re-render in React?",
      options: [
        "Running an effect",
        "Passing props",
        "Updating state",
        "Adding event listeners to DOM elements",
      ],
      correctOption: 2,
      points: 20,
    },
    {
      question: 'When do we directly "touch" the DOM in React?',
      options: [
        "When we need to listen to an event",
        "When we need to change the UI",
        "When we need to add styles",
        "Almost never",
      ],
      correctOption: 3,
      points: 20,
    },
    {
      question: "In what situation do we use a callback to update state?",
      options: [
        "When updating the state will be slow",
        "When the updated state is very data-intensive",
        "When the state update should happen faster",
        "When the new state depends on the previous state",
      ],
      correctOption: 3,
      points: 30,
    },
  ],
  status: "loading",
  index: 0,
  answer: null,
  score: 0,
  highScore: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "dataRecived":
      return {
        ...state,
        // questions: action.payload,
        status: "ready",
      };

    case "dataFailed":
      return {
        ...state,
        status: "error",
      };

    case "start":
      return {
        ...state,
        status: "active",
      };

    case "newAnswer": //paylode:index
      const question = state.questions[state.index];
      console.log(question);

      return {
        ...state,
        answer: action.payload,
        score:
          action.payload === question.correctOption
            ? state.score + question.points
            : state.score,
      };

    case "nextQuestion":
      return {
        ...state,
        index: state.index + 1,
        answer: null,
      };

    case "finish":
      return {
        ...state,
        status: "finished",
        answer: null,
        index: 0,
        highScore:
          state.score > state.highScore ? state.score : state.highScore,
      };

    case "reset":
      return {
        ...initialState,
        questions: state.questions,
        highScore: state.highScore,
        status: "ready",
      };

    default:
      throw new Error("Action unkonwn");
  }
}

function App() {
  const [{ questions, status, index, answer, score, highScore }, dispatch] =
    useReducer(reducer, initialState);

  const numQuestion = questions.length;
  const maxPossiblePoints = questions.reduce(
    (acc, item) => acc + item.points,
    0
  );

  useEffect(function () {
    dispatch({ type: "dataRecived" });
    // dispatch({ type: "dataFailed" });
  }, []);
  return (
    <div className="App">
      <Header />

      <Main>
        {status === "loading" && <Loading />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <StartScreen numQuestion={numQuestion} dispatch={dispatch} />
        )}
        {status === "active" && (
          <div className="mainQuestions">
            <ProgressBar
              index={index}
              numQuestion={numQuestion}
              answer={answer}
            />
            <Question
              questions={questions[index]}
              dispatch={dispatch}
              answer={answer}
            />
            <NextButton
              dispatch={dispatch}
              numQuestion={numQuestion}
              index={index}
              answer={answer}
            />
          </div>
        )}
        {status === "finished" && (
          <Result
            score={score}
            highScore={highScore}
            dispatch={dispatch}
            maxPossiblePoints={maxPossiblePoints}
          />
        )}
      </Main>
    </div>
  );
}

export default App;
