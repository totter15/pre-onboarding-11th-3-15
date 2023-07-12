import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getList } from '../store/issueSlice';
import IssueItem from '../components/issueList/IssueItem';
import { IssueListType } from '../interfaces/issueType';

function IssueList() {
  const [index, setIndex] = useState(1);
  const dispatch = useDispatch<any>();
  const issueList: IssueListType = useSelector((state: RootState) => {
    return state.issue.list;
  });
  const isLoading = useSelector((state: RootState) => {
    return state.issue.loading;
  });

  console.log(issueList);

  useEffect(() => {
    dispatch(getList(index));
  }, [dispatch, index]);

  console.log({ isLoading });

  return (
    <main>
      <ul>
        {issueList.map((item: any) =>
          item?.number ? <IssueItem item={item} key={item.id} /> : <div key={item.id}>ads</div>,
        )}
      </ul>
      <button onClick={() => setIndex((prev) => prev + 1)}>get</button>
    </main>
  );
}

export default IssueList;
