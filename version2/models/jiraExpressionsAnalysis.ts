import { JiraExpressionAnalysis } from './jiraExpressionAnalysis.ts';

/** Details about the analysed Jira expression. */
export interface JiraExpressionsAnalysis {
  /** The results of Jira expressions analysis. */
  results: JiraExpressionAnalysis[];
}
