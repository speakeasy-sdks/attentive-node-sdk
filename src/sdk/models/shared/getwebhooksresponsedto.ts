import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { GetWebhookResponseDto } from "./getwebhookresponsedto";



export class GetWebhooksResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=webhooks", elemType: GetWebhookResponseDto })
  webhooks?: GetWebhookResponseDto[];
}
