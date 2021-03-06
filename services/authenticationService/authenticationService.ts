import { Config } from '../../utils/config.ts';
import {
  createBasicAuthenticationToken,
  createJWTAuthentication,
  createOAuth2AuthenticationToken,
  createOAuthAuthenticationToken,
} from './authentications/mod.ts';

export namespace AuthenticationService {
  export async function getAuthenticationToken(
    authentication: Config.Authentication | undefined,
    /*requestData?: {
      baseURL: string;
      url: string;
      method: string;
    },*/
  ): Promise<string | undefined> {
    if (!authentication) {
      return undefined;
    }

    if (authentication.basic) {
      return createBasicAuthenticationToken(authentication.basic);
    }

    if (authentication.oauth) {
      throw new Error("Not implemented yet.");
      //return createOAuthAuthenticationToken(authentication.oauth, requestData!);
    }

    if (authentication.oauth2) {
      return createOAuth2AuthenticationToken(authentication.oauth2);
    }

    if (authentication.jwt) {
      throw new Error("Not implemented yet.");
      //return createJWTAuthentication(authentication.jwt, requestData!);
    }

    return undefined;
  }
}
