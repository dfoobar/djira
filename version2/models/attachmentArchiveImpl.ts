import { AttachmentArchiveEntry } from './attachmentArchiveEntry.ts';

export interface AttachmentArchiveImpl {
  /** The list of the items included in the archive. */
  entries?: AttachmentArchiveEntry[];
  /** The number of items in the archive. */
  totalEntryCount?: number;
}
