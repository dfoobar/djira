import { WorkflowTransitionRulesUpdateErrorDetails } from './workflowTransitionRulesUpdateErrorDetails.ts';

/** Details of any errors encountered while updating workflow transition rules. */
export interface WorkflowTransitionRulesUpdateErrors {
  /** A list of workflows. */
  updateResults: WorkflowTransitionRulesUpdateErrorDetails[];
}
