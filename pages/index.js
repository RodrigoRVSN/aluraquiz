import styled from 'styled-components'
import db from '../db.json';
import Widget from '../src/components/Widget'
import Footer from '../src/components/Footer'
import GitHubCorner from '../src/components/GitHubCorner'
import QuizBackground from '../src/components/QuizBackground'
import QuizLogo from '../src/components/QuizLogo'

import Head from 'next/head'
import Link from 'next/link'


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

export default function Home() {
  return (
    <QuizBackground backgroundImage={db.bg}>
      <Head>
        <title>Quiz One Piece</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:title" content="Quiz One Piece" key="title" />
        <meta property="og:image" content={db.bg}/>
        <meta property="og:image:type" content="image/jpg"/>
      </Head>
      <QuizContainer>
        <QuizLogo/>
        <Widget>
            <Widget.Header>
              <h1>One Piece</h1>
            </Widget.Header>
          <Widget.Content>
            <p>Embarque nesse quiz para testar seus conhecimentos sobre One Piece! :D</p>
            <Link href="/quiz">
              <a style={StartGame}>JOGAR</a>
            </Link>
          </Widget.Content>
        </Widget>
        <Widget>
          <Widget.Content>
              <h1>Quiz de outros piratas</h1>
              <p>Dê uma olhada nos quizes que os outras pessoas da imersão fizeram:</p>
          </Widget.Content>

        </Widget>
        <Footer/>
      </QuizContainer>
      <GitHubCorner projectUrl="https:github.com.br/rodrigorvsn"/>
    </QuizBackground>
  );
}
