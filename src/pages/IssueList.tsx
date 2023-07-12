import { getIssueList } from '../apis/issue';

function IssueList() {
  getList();

  async function getList() {
    const data = await getIssueList();
    console.log(data);
  }
  return <div>listpage</div>;
}

export default IssueList;
