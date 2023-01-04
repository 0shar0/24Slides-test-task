import { CenteredLayout } from '~/components';
import { QnA } from '~/models';
import { QnaRender } from './components/qna-render';

export const Refactor2 = () => {
  return (
    <CenteredLayout className="gap-2">
      <div className="text-3xl mb-2">See the code</div>
      {QnA.map((item, index) => (
        <QnaRender key={index} {...item} />
      ))}
    </CenteredLayout>
  );
};
