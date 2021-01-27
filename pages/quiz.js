/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';

export const QuizContainer = styled.div`
  width: 100%;
  max-width: 350px;
  padding-top: 45px;
  margin: auto 10%;
  @media screen and (max-width: 500px){
    margin: auto;
    padding: 15px;
  }
`;

const StartGame = {
  textDecoration: 'none',
  color: 'orange',
};

export default function Quiz() {
  const router = useRouter();
  return (
    <QuizBackground backgroundImage={db.bg2}>
      <Head>
        <title>Quiz One Piece</title>
        <meta property="og:title" content="Quiz One piece" key="title" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>

          <Widget.Content>
            <p>
              Aguarde um pouquinho
              {' '}
              {router.query.name}
              {', '}
              o quiz não está pronto ainda :D
            </p>
            <Link href=".">
              <a style={StartGame}>ÍNICIO</a>
            </Link>
          </Widget.Content>

        </Widget>
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RodrigoRVSN" />
    </QuizBackground>
  );
}
