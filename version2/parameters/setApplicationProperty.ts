import { SimpleApplicationProperty } from '../models/mod.ts';

export interface SetApplicationProperty extends SimpleApplicationProperty {
  /** The key of the application property to update. */
  id: string;

  body?: {
    /** The ID of the application property. */
    id?: string;

    /** The new value. */
    value?: string;
  };
}
