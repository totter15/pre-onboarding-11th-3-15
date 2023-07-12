import { useLoaderData } from 'react-router-dom';
import { IssueResponseData } from '../apis/issue';

function Issue() {
  const data = useLoaderData() as IssueResponseData;
  const { number, title, user, created_at, body } = data ?? {};
  console.log(data);

  return (
    <div>
      <section></section>
      <span>{number}</span>
      <span>{title}</span>
      <span>{user?.login}</span>
      <span>{created_at}</span>
      <span>{body}</span>
    </div>
  );
}

export default Issue;
