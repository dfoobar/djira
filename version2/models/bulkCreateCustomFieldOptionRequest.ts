import { CustomFieldOptionValue } from './customFieldOptionValue.ts';

/** Details of options to create for a custom field. */
export interface BulkCreateCustomFieldOptionRequest {
  /** Details of options to create. */
  options?: CustomFieldOptionValue[];
}
