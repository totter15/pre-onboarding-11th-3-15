import IssueList from '../pages/IssueList';
import Issue from '../pages/Issue';
import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import { getIssue } from '../apis/issue';
import { IssueResponseDataType } from '../interfaces/issueType';
import App from '../App';
import NotFound from '../pages/NotFount';
import NotFoundIssue from '../pages/NotFoundIssue';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<NotFound />}>
      <Route index element={<IssueList />} />
      <Route path="issue" element={<IssueList />} />
      <Route
        index
        path="issue/:issueNumber"
        element={<Issue />}
        loader={async ({ params }: any): Promise<IssueResponseDataType> => {
          return await getIssue(params.issueNumber * 1);
        }}
        errorElement={<NotFoundIssue />}
      />
    </Route>,
  ),
);

export default router;
