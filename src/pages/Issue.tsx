import { useLoaderData } from 'react-router-dom';
import { IssueResponseDataType } from '../interfaces/issueType';
import IssueItem from '../components/issueList/IssueItem';
import MarkdownRenderer from '../components/common/MarkdownRenderer';
import * as S from './Issue.style';

function Issue() {
  const data = useLoaderData() as IssueResponseDataType;
  const { user, body } = data ?? {};

  return (
    <S.IssuePage>
      <S.ProfileBox>
        <S.Profile src={user?.avatar_url} alt="avatar" />
        <IssueItem item={data} />
      </S.ProfileBox>
      <MarkdownRenderer>{body}</MarkdownRenderer>
    </S.IssuePage>
  );
}

export default Issue;
