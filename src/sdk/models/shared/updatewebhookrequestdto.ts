import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class UpdateWebhookRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabled" })
  disabled?: boolean;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
