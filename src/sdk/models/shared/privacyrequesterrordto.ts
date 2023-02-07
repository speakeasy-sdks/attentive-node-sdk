import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivacyRequestErrorDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=error" })
  error?: string;
}
