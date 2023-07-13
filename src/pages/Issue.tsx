import { useLoaderData } from 'react-router-dom';
import { IssueResponseDataType } from '../interfaces/issueType';
import IssueItem from '../components/issueList/IssueItem';
import MarkdownRenderer from '../components/common/MarkdownRenderer';

function Issue() {
  const data = useLoaderData() as IssueResponseDataType;
  const { user, body } = data ?? {};

  return (
    <main>
      <section>
        <img src={user?.avatar_url} alt="avatar" />
        <IssueItem item={data} />
      </section>
      <MarkdownRenderer>{body}</MarkdownRenderer>
    </main>
  );
}

export default Issue;
