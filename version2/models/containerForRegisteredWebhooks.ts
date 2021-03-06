import { RegisteredWebhook } from './registeredWebhook.ts';

/** Container for a list of registered webhooks. Webhook details are returned in the same order as the request. */
export interface ContainerForRegisteredWebhooks {
  /** A list of registered webhooks. */
  webhookRegistrationResult?: RegisteredWebhook[];
}
