import { Avatar } from './avatar.ts';

/** Details about system and custom avatars. */
export interface Avatars {
  /** System avatars list. */
  system?: Avatar[];
  /** Custom avatars list. */
  custom?: Avatar[];
}
