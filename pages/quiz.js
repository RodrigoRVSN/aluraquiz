/* eslint-disable react/prop-types */
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import QuizBackground from '../src/components/QuizBackground';
import { QuizContainer } from '../src/components/QuizContainer';
import QuestionWidget from '../src/components/QuestionWidget';
import LoadingWidget from '../src/components/LoadingWidget';

function ResultWidget({ results }) {
  const user = useRouter();
  const { name } = user.query;
  return (
    <Widget>
      <Widget.Header>
        SEUS RESULTADOS
      </Widget.Header>

      <Widget.Content>
        <p>
          Você acertou
          {' '}
          {results.filter((x) => x).length}
          {' '}
          de
          {`${db.questions.length} ${name}!`}
        </p>
        <ul>
          {results.map((result, index) => (
            <li>
              {index + 1}
              º
              {' '}
              {result === true ? ' ✅' : ' ❌'}
            </li>
          ))}
        </ul>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage() {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const totalQuestions = db.questions.length;
  const [currentQuestion, SetCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = db.questions[questionIndex];

  function addResult(result) {
    setResults([
      ...results,
      result,
    ]);
  }

  React.useEffect(() => {
    setTimeout(() => {
      setScreenState(screenStates.QUIZ);
    }, 1 * 1000);
  }, []);

  function handleSubmitQuiz() {
    const nextQuestion = questionIndex + 1;
    if (nextQuestion < totalQuestions) {
      SetCurrentQuestion(questionIndex + 1);
    } else {
      setScreenState(screenStates.RESULT);
    }
  }

  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Quiz One Piece</title>
      </Head>
      <QuizContainer>
        {screenState === screenStates.QUIZ && (
          <QuestionWidget
            question={question}
            questionIndex={questionIndex}
            totalQuestions={totalQuestions}
            onSubmit={handleSubmitQuiz}
            addResult={addResult}
          />
        )}
        {screenState === screenStates.LOADING && <LoadingWidget />}
        {screenState === screenStates.RESULT && <ResultWidget results={results} />}
      </QuizContainer>
    </QuizBackground>
  );
}
