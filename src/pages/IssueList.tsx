import { useEffect, useState } from 'react';
import { IssueListResponseData, getIssueList } from '../apis/issue';
import IssueItem from '../components/issueList/IssueItem';

function IssueList() {
  const [list, setList] = useState<IssueListResponseData | []>([]);

  useEffect(() => {
    getList();
  }, []);

  async function getList() {
    const data = await getIssueList();
    setList(data);
    console.log(data);
  }

  return (
    <main>
      <ul>
        {list.map((item) => (
          <IssueItem item={item} />
        ))}
      </ul>
    </main>
  );
}

export default IssueList;
