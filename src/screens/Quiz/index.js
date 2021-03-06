/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../../../db.json';
import { Widget } from '../../components/Widget';
import QuizBackground from '../../components/QuizBackground';
import { QuizContainer } from '../../components/QuizContainer';
import QuestionWidget from '../../components/QuestionWidget';
import LoadingWidget from '../../components/LoadingWidget';

const ReturnButton = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.contrastText};
  border: 2px solid black;
  height: 45px;
  width: 100%;
  cursor: pointer;
  border-radius: 10px;
  &:hover{
    opacity: 0.5;
  }

`;

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
          {` ${db.questions.length} ${name}! `}
        </p>
        <p>
          Você fez
          {' '}
          {results.filter((x) => x).length}
          00 pontos
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
        <ReturnButton type="button" onClick={() => user.push('/')}>
          VOLTAR AO INÍCIO
        </ReturnButton>
      </Widget.Content>
    </Widget>
  );
}

const screenStates = {
  QUIZ: 'QUIZ',
  LOADING: 'LOADING',
  RESULT: 'RESULT',
};

export default function QuizPage({ externalQuestions, externalBg }) {
  const [screenState, setScreenState] = React.useState(screenStates.LOADING);
  const [results, setResults] = React.useState([]);
  const [currentQuestion, SetCurrentQuestion] = React.useState(0);
  const questionIndex = currentQuestion;
  const question = externalQuestions[questionIndex];
  const totalQuestions = externalQuestions.length;
  const bg = externalBg;

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
    <QuizBackground backgroundImage={bg}>
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
