import * as Models from './models/index.ts';
import * as Parameters from './parameters/index.ts';
import { Client } from '../clients/index.ts';
import { Callback } from '../callback.ts';
import { RequestConfig } from '../requestConfig.ts';

export class WorkflowStatuses {
  constructor(private client: Client) {}

  /**
   * Returns a list of all statuses associated with workflows.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
   */
  async getStatuses<T = Models.StatusDetails[]>(callback: Callback<T>): Promise<void>;
  /**
   * Returns a list of all statuses associated with workflows.
   *
   * This operation can be accessed anonymously.
   *
   * **[Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required:** None.
   */
  async getStatuses<T = Models.StatusDetails[]>(callback?: never): Promise<T>;
  async getStatuses<T = Models.StatusDetails[]>(callback?: Callback<T>): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/api/2/status',
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Returns a status. The status must be associated with a workflow to be returned.
   *
   * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the
   * status by its ID may be preferable.
   *
   * This operation can be accessed anonymously.
   *
   * [Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required: None.
   */
  async getStatus<T = Models.StatusDetails>(parameters: Parameters.GetStatus, callback: Callback<T>): Promise<void>;
  /**
   * Returns a status. The status must be associated with a workflow to be returned.
   *
   * If a name is used on more than one status, only the status found first is returned. Therefore, identifying the
   * status by its ID may be preferable.
   *
   * This operation can be accessed anonymously.
   *
   * [Permissions](https://developer.atlassian.com/cloud/jira/platform/rest/v2/intro/#permissions) required: None.
   */
  async getStatus<T = Models.StatusDetails>(parameters: Parameters.GetStatus, callback?: never): Promise<T>;
  async getStatus<T = Models.StatusDetails>(
    parameters: Parameters.GetStatus,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/rest/api/2/status/${parameters.idOrName}`,
      method: 'GET',
    };

    return this.client.sendRequest(config, callback);
  }
}