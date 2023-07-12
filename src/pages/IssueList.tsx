import { useEffect, useRef, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getList } from '../store/issueSlice';
import IssueItem from '../components/issueList/IssueItem';
import { IssueListType } from '../interfaces/issueType';
import AdsItem from '../components/issueList/AdsItem';
import { LoadingOutlined } from '@ant-design/icons';
import * as S from './IssueList.style';

function IssueList() {
  const ref = useRef<HTMLDivElement>(null);

  const dispatch = useDispatch<any>();
  const issueList: IssueListType = useSelector((state: RootState) => {
    return state.issue.list;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.issue.loading;
  });
  const index = useSelector((state: RootState) => {
    return state.issue.index;
  });

  function getIssueList() {
    dispatch(getList(index));
  }

  const callback = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting) {
        !isLoading && getIssueList();
      }
    },
    [index, isLoading],
  );

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(callback);
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [callback]);

  return (
    <S.Container>
      <S.List>
        {issueList.map((item: any, i) =>
          item?.number ? <IssueItem item={item} key={item.id} /> : <AdsItem item={item} key={item.id + i} />,
        )}
      </S.List>
      <S.Loading>{isLoading && <LoadingOutlined spin style={{ fontSize: '3rem' }} />}</S.Loading>
      <div ref={ref} />
    </S.Container>
  );
}

export default IssueList;
