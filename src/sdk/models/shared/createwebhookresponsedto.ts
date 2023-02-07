import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CreateWebhookResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=disabledAt" })
  disabledAt?: string;

  @SpeakeasyMetadata({ data: "json, name=events" })
  events?: string[];

  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;

  @SpeakeasyMetadata({ data: "json, name=url" })
  url?: string;
}
