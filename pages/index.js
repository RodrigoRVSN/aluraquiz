import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import { Button } from '../src/components/Button';
import Input from '../src/components/Input';
import Footer from '../src/components/Footer';
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

export default function Home() {
  const router = useRouter();
  const [name, setName] = React.useState('');
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz One Piece</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Quiz One Piece" key="title" />
        <meta property="og:image" content={db.bg} />
        <meta property="og:image:type" content="image/jpg" />
      </Head>
      <QuizContainer>
        <QuizLogo />
        <Widget>
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Embarque nesse quiz para testar seus conhecimentos sobre One Piece! :D </p>
            <form onSubmit={function (evento) {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                type="text"
                placeholder="Digite seu nome aqui!"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={function (evento) {
                  setName(evento.target.value);
                }}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Jogar como {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
            <h1>Quiz de outros piratas</h1>
            <p>Dê uma olhada nos quizes que os outras pessoas da imersão fizeram:</p>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RodrigoRVSN" />
    </QuizBackground>
  );
}
