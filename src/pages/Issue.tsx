import { useLoaderData } from 'react-router-dom';

function Issue() {
  const data = useLoaderData();
  console.log(data);

  return <div>issue</div>;
}

export default Issue;
