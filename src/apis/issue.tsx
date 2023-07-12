import client, { OWNER, REPO } from './clinet';

export async function getIssueList() {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues`);
  return data;
}

export async function getIssue(issue_number: number) {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues/${issue_number}`);
  return data;
}
