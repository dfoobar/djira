import { CustomFieldOptionCreate } from './customFieldOptionCreate.ts';

/** Details of the options to create for a custom field. */
export interface BulkCustomFieldOptionCreateRequest {
  /** Details of options to create. */
  options?: CustomFieldOptionCreate[];
}
