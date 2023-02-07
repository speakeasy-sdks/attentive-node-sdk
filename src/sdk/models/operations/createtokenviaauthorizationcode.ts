import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class CreateTokenViaAuthorizationCodeRequestBody extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "form, name=client_id;" })
  clientId?: string;

  @SpeakeasyMetadata({ data: "form, name=client_secret;" })
  clientSecret?: string;

  @SpeakeasyMetadata({ data: "form, name=code;" })
  code?: string;

  @SpeakeasyMetadata({ data: "form, name=grant_type;" })
  grantType?: string;

  @SpeakeasyMetadata({ data: "form, name=redirect_uri;" })
  redirectUri?: string;
}


export class CreateTokenViaAuthorizationCodeRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "request, media_type=application/x-www-form-urlencoded" })
  request?: CreateTokenViaAuthorizationCodeRequestBody;
}


export class CreateTokenViaAuthorizationCodeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  createTokenResponseDto?: shared.CreateTokenResponseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
