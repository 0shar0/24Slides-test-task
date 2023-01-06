import { QuestionOrAnswer } from '~/models';

export const QnaRender = ({ question, answer }: QuestionOrAnswer) => {
  return (
    <>
      <h3 className="font-bold text-lg">{question}</h3>
      <p className="mb-2">{answer}</p>
    </>
  );
};
