import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { getList } from '../store/issueSlice';
import { IssueListType } from '../interfaces/issueType';

function useIssue() {
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

  return { issueList, isLoading, getIssueList };
}

export default useIssue;
