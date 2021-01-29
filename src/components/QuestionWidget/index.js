/* eslint-disable linebreak-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable linebreak-style */
import React from 'react';
import { Widget } from '../Widget';
import { Button } from '../Button';
import AlternativesForm from '../AlternativesForm';
import BackLinkArrow from '../BackLinkArrow';

function QuestionWidget({
  question,
  questionIndex,
  totalQuestions,
  onSubmit,
  addResult,
}) {
  const [selectedAlternative, setSelectedAlternative] = React.useState();
  const [isQuestionSubmited, setIsQuestionSubmited] = React.useState(false);
  const questionId = `question_${questionIndex}`;
  const isCorrect = selectedAlternative === question.answer;
  const hasAlternativeSelected = selectedAlternative !== undefined;

  return (
    <Widget>
      <Widget.Header>
        <BackLinkArrow href="/" />
        <h3>
          Pergunta
          {` ${questionIndex + 1} `}
          de
          {` ${totalQuestions}`}
        </h3>
      </Widget.Header>
      <img
        alt="descrição"
        style={{
          width: '100%',
          height: '150px',
          objectFit: 'cover',
        }}
        src={question.image}
      />
      <Widget.Content>
        <h2>
          {question.title}
        </h2>
        <p>
          {question.description}
        </p>

        <AlternativesForm
          onSubmit={(evento) => {
            evento.preventDefault();
            setIsQuestionSubmited(true);
            setTimeout(() => {
              onSubmit();
              addResult(isCorrect);
              setIsQuestionSubmited(false);
              setSelectedAlternative(undefined);
            }, 2 * 1000);
          }}
        >
          {question.alternatives.map((alternative, alternativeIndex) => {
            const alternativeId = `alternative_${alternativeIndex}`;
            const alternativeStatus = isCorrect ? 'SUCCESS' : 'ERROR';
            const isSelected = selectedAlternative === alternativeIndex;
            return (
              <Widget.Topic
                as="label"
                key={alternativeId}
                htmlFor={alternativeId}
                data-selected={isSelected}
                data-status={isQuestionSubmited && alternativeStatus}
              >
                <input
                  style={{ display: 'none' }}
                  id={alternativeId}
                  name={questionId}
                  onChange={() => setSelectedAlternative(alternativeIndex)}
                  type="radio"
                />
                {alternative}
              </Widget.Topic>
            );
          })}

          {/* <pre>
              {JSON.stringify(question, null, 4)}
            </pre> */}

          <Button type="submit" disabled={!hasAlternativeSelected}>
            CONFIRMAR
          </Button>

          {isQuestionSubmited && isCorrect }
          {isQuestionSubmited && !isCorrect }
        </AlternativesForm>
      </Widget.Content>
    </Widget>
  );
}

export default QuestionWidget;
