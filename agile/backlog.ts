import * as Parameters from './parameters/mod.ts';
import { Client } from '../clients/mod.ts';
import { Callback } from '../utils/callback.ts';
import { RequestConfig } from '../utils/requestConfig.ts';

export class Backlog {
  constructor(private client: Client) {}

  /**
   * Move issues to the backlog.
   *
   * This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may
   * be moved at once.
   */
  async moveIssuesToBacklog<T = void>(parameters: Parameters.MoveIssuesToBacklog, callback: Callback<T>): Promise<void>;
  /**
   * Move issues to the backlog.
   *
   * This operation is equivalent to remove future and active sprints from a given set of issues. At most 50 issues may
   * be moved at once.
   */
  async moveIssuesToBacklog<T = void>(parameters: Parameters.MoveIssuesToBacklog, callback?: never): Promise<T>;
  async moveIssuesToBacklog<T = void>(
    parameters: Parameters.MoveIssuesToBacklog,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: '/rest/agile/1.0/backlog/issue',
      method: 'POST',
      data: {
        issues: parameters?.issues,
      },
    };

    return this.client.sendRequest(config, callback);
  }

  /**
   * Move issues to the backlog of a particular board (if they are already on that board).
   *
   * This operation is equivalent to remove future and active sprints from a given set of issues if the board has
   * sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most
   * 50 issues may be moved at once.
   */
  async moveIssuesToBacklogForBoard<T = void>(
    parameters: Parameters.MoveIssuesToBacklogForBoard,
    callback: Callback<T>
  ): Promise<void>;
  /**
   * Move issues to the backlog of a particular board (if they are already on that board).
   *
   * This operation is equivalent to remove future and active sprints from a given set of issues if the board has
   * sprints If the board does not have sprints this will put the issues back into the backlog from the board. At most
   * 50 issues may be moved at once.
   */
  async moveIssuesToBacklogForBoard<T = void>(
    parameters: Parameters.MoveIssuesToBacklogForBoard,
    callback?: never
  ): Promise<T>;
  async moveIssuesToBacklogForBoard<T = void>(
    parameters: Parameters.MoveIssuesToBacklogForBoard,
    callback?: Callback<T>,
  ): Promise<void | T> {
    const config: RequestConfig = {
      url: `/rest/agile/1.0/backlog/${parameters.boardId}/issue`,
      method: 'POST',
      data: {
        issues: parameters.issues,
        rankBeforeIssue: parameters.rankBeforeIssue,
        rankAfterIssue: parameters.rankAfterIssue,
        rankCustomFieldId: parameters.rankCustomFieldId,
      },
    };

    return this.client.sendRequest(config, callback);
  }
}
