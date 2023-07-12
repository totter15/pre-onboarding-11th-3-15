import { Endpoints } from '@octokit/types';

export type IssueListResponseDataType = Endpoints['GET /repos/{owner}/{repo}/issues']['response']['data'];
export type IssueResponseDataType = Endpoints['GET /repos/{owner}/{repo}/issues/{issue_number}']['response']['data'];

export type IssueItemType = IssueListResponseDataType[0];
export interface AdsType {
  type: string;
  img: string;
  url: string;
  id: number;
}

export type IssueListType = (AdsType | IssueItemType)[];
