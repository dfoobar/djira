import { UpdateCustomFieldOption } from '../models/mod.ts';

export interface UpdateCustomFieldOptions extends UpdateCustomFieldOption {
  /**
   * The ID of the custom field. Note: This is the numeric part of the of the field ID. For example, for a field with
   * the ID *customfield_10075* use *10075*.
   */
  fieldId: number;
}
