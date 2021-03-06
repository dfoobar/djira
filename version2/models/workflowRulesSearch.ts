/** Details of the workflow and its transition rules. */
export interface WorkflowRulesSearch {
  /** The workflow ID. */
  workflowEntityId: string;
  /** The list of workflow rule IDs. */
  ruleIds: string[];
  /**
   * Use expand to include additional information in the response. This parameter accepts `transition` which, for each
   * rule, returns information about the transition the rule is assigned to.
   */
  expand?: string;
}
