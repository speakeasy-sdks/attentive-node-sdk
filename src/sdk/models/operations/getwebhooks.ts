import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetWebhooksSecurity extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "security, scheme=true;type=oauth2" })
  oAuthFlow: shared.SchemeOAuthFlow;
}


export class GetWebhooksRequest extends SpeakeasyBase {
  @SpeakeasyMetadata()
  security: GetWebhooksSecurity;
}


export class GetWebhooksResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getWebhooksResponseDto?: shared.GetWebhooksResponseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
