import client, { OWNER, REPO } from './clinet';
import { Endpoints } from '@octokit/types';

export type IssueListResponseData = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];
export type IssueResponseData = Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data'];

const PER_PAGE = 10;

export async function getIssueList(page: number = 1): Promise<IssueListResponseData> {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues?sort=comments&per_page=${PER_PAGE}&page=${page}`);
  return data;
}

export async function getIssue(issue_number: number): Promise<IssueResponseData> {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues/${issue_number}`);
  return data;
}
