import { Link } from 'react-router-dom';
import { IssueItemType } from '../../interfaces/issueType';
import * as S from './IssueItem.style';

interface IssueItemProps {
  item: IssueItemType;
}

function IssueItem({ item }: IssueItemProps) {
  const { number, title, user, created_at, comments } = item ?? {};
  const date = new Date(created_at);

  return (
    <S.ItemBox>
      <Link to={`/issue/${number}`}>
        <S.TitleBox>
          <span>#{number}</span>
          <h2>{title}</h2>
        </S.TitleBox>
        <S.SubBox>
          <span>작성자 : {user?.login}</span>
          <span>작성일 : {date.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </S.SubBox>

        <S.CommentBox>코멘트 : {comments}</S.CommentBox>
      </Link>
    </S.ItemBox>
  );
}

export default IssueItem;
