import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebhookRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
