import IssueList from '../pages/IssueList';
import Issue from '../pages/Issue';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { IssueResponseData, getIssue } from '../apis/issue';
import App from '../App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<div>error</div>}>
      <Route index element={<IssueList />} />
      <Route path="issue" element={<IssueList />} />
      <Route
        index
        path="issue/:issueNumber"
        element={<Issue />}
        loader={async ({ params }: any): Promise<IssueResponseData> => {
          return await getIssue(params.issueNumber * 1);
        }}
        errorElement={<div>issue error</div>}
      />
    </Route>,
  ),
);

export default router;
