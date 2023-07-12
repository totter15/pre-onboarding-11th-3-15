import IssueList from '../pages/IssueList';
import Issue from '../pages/Issue';
import { createBrowserRouter } from 'react-router-dom';

const routeConfig = [
  { path: '/', element: <IssueList /> },
  {
    path: '/issue',
    element: <Issue />,
  },
];

const router = createBrowserRouter(routeConfig);
export default router;
