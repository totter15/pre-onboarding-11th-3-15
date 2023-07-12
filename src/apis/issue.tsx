import client, { OWNER, REPO } from './clinet';
import { IssueListResponseDataType, IssueResponseDataType } from '../interfaces/issueType';

export const PER_PAGE = 12;

export async function getIssueList(page: number = 1): Promise<IssueListResponseDataType> {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues?sort=comments&per_page=${PER_PAGE}&page=${page}`);
  return data;
}

export async function getIssue(issue_number: number): Promise<IssueResponseDataType> {
  const { data } = await client.get(`repos/${OWNER}/${REPO}/issues/${issue_number}`);
  return data;
}
