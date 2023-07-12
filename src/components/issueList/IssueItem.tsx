import { IssueListResponseData } from '../../apis/issue';

interface IssueItemProps {
  item: IssueListResponseData[0];
}

function IssueItem({ item }: IssueItemProps) {
  console.log(item);

  const { number, title, user, created_at, comments } = item ?? {};

  return (
    <li>
      <span>{number}</span>
      <span>{title}</span>
      <span>{user?.login}</span>
      <span>{created_at}</span>
      <span>{comments}</span>
    </li>
  );
}

export default IssueItem;
