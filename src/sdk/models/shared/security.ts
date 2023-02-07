import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class SchemeOAuthFlow extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, name=Authorization" })
  authorization: string;
}


export class Security extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: SchemeOAuthFlow;
}
