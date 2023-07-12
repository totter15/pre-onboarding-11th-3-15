import IssueList from '../pages/IssueList';
import Issue from '../pages/Issue';
import { createBrowserRouter } from 'react-router-dom';
import { getIssue } from '../apis/issue';

const routeConfig = [
  { path: '/', element: <IssueList /> },
  {
    path: '/issue/:issueNumber',
    element: <Issue />,
    loader: async ({ params }: any) => {
      return await getIssue(params.issueNumber * 1);
    },
    errorElement: <div>error</div>,
  },
];

const router = createBrowserRouter(routeConfig);
export default router;
