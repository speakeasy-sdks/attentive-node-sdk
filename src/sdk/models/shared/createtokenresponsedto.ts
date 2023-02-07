import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateTokenResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=access_token" })
  accessToken?: string;

  @SpeakeasyMetadata({ data: "json, name=expires_in" })
  expiresIn?: number;

  @SpeakeasyMetadata({ data: "json, name=id_token" })
  idToken?: string;

  @SpeakeasyMetadata({ data: "json, name=token_type" })
  tokenType?: string;
}
