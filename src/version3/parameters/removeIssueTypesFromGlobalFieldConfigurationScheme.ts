import { IssueTypeIdsToRemove } from '../models/index.ts';

export interface RemoveIssueTypesFromGlobalFieldConfigurationScheme extends IssueTypeIdsToRemove {
  /** The ID of the field configuration scheme. */
  id: number;
}