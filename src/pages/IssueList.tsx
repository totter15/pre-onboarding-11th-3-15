import { useCallback } from 'react';
import IssueItem from '../components/issueList/IssueItem';
import AdsItem from '../components/issueList/AdsItem';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './IssueList.style';
import useIntersect from '../hooks/useIntersect';
import useIssue from '../hooks/useIssue';

function IssueList() {
  const { issueList, isLoading, getIssueList } = useIssue();

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        !isLoading && getIssueList();
      }
    },
    [isLoading, getIssueList],
  );

  const ref = useIntersect(callback);

  return (
    <S.Container>
      <S.List>
        {issueList.map((item: any, i) => (
          <li>{item?.number ? <IssueItem item={item} key={item.id} /> : <AdsItem item={item} key={item.id + i} />}</li>
        ))}
      </S.List>
      <S.Loading>{isLoading && <LoadingOutlined spin style={{ fontSize: '3rem' }} />}</S.Loading>
      <div ref={ref} />
    </S.Container>
  );
}

export default IssueList;
