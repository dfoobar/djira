import { FieldReferenceData } from './fieldReferenceData.ts';
import { FunctionReferenceData } from './functionReferenceData.ts';

/** Lists of JQL reference data. */
export interface JQLReferenceData {
  /** List of fields usable in JQL queries. */
  visibleFieldNames?: FieldReferenceData[];
  /** List of functions usable in JQL queries. */
  visibleFunctionNames?: FunctionReferenceData[];
  /** List of JQL query reserved words. */
  jqlReservedWords?: string[];
}
