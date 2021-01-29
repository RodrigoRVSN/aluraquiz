import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import db from '../db.json';
import { Widget } from '../src/components/Widget';
import { Button } from '../src/components/Button';
import Input from '../src/components/Input';
import Footer from '../src/components/Footer';
import Link from '../src/components/Link';
import GitHubCorner from '../src/components/GitHubCorner';
import QuizBackground from '../src/components/QuizBackground';
import QuizLogo from '../src/components/QuizLogo';
import { QuizContainer } from '../src/components/QuizContainer';

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
        <Widget
          as={motion.section}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            show: { opacity: 1, y: '0' },
            hidden: { opacity: 0, y: '100%' },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Header>
            <h1>One Piece</h1>
          </Widget.Header>
          <Widget.Content>
            <p>Embarque nesse quiz para testar seus conhecimentos sobre One Piece! :D </p>
            <form onSubmit={(evento) => {
              evento.preventDefault();
              router.push(`/quiz?name=${name}`);
            }}
            >
              <Input
                name="nomeDoUsuario"
                type="text"
                placeholder="Digite seu nome aqui!"
                // eslint-disable-next-line react/jsx-no-bind
                onChange={(evento) => setName(evento.target.value)}
                value={name}
              />
              <Button type="submit" disabled={name.length === 0}>
                {/* eslint-disable-next-line react/jsx-one-expression-per-line */}
                Jogar como {name}
              </Button>
            </form>
          </Widget.Content>
        </Widget>
        <Widget
          as={motion.section}
          transiction={{ delay: 0.5, duration: 0.5 }}
          variants={{
            show: { opacity: 1 },
            hidden: { opacity: 0 },
          }}
          initial="hidden"
          animate="show"
        >
          <Widget.Content>
            <h1>Quiz de outros piratas</h1>
            <ul>
              {db.external.map((linkExterno) => {
                const [project, user] = linkExterno
                  .replace(/\//g, '')
                  .replace('https:', '')
                  .replace('.vercel.app', '')
                  .split('.');

                return (
                  <li key={linkExterno}>
                    <Widget.Topic
                      as={Link}
                      href={`/quiz/${project}___${user}`}
                    >
                      {`${user} / ${project}`}
                    </Widget.Topic>
                  </li>
                );
              })}
            </ul>
          </Widget.Content>

        </Widget>
        <Footer />
      </QuizContainer>
      <GitHubCorner projectUrl="https://github.com/RodrigoRVSN" />
    </QuizBackground>
  );
}
