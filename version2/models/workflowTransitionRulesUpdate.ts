import { WorkflowTransitionRules } from './workflowTransitionRules.ts';

/** Details about a workflow configuration update request. */
export interface WorkflowTransitionRulesUpdate {
  /** The list of workflows with transition rules to update. */
  workflows: WorkflowTransitionRules[];
}
