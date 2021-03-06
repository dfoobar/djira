import { RenamedOption } from './renamedOption.ts';

/** Details of the options to update for a custom field. */
export interface UpdateCustomFieldOption {
  /** Details of the options to update. */
  options?: RenamedOption[];
}
