import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivacyRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=id" })
  id?: string;

  @SpeakeasyMetadata({ data: "json, name=processed" })
  processed?: boolean;

  @SpeakeasyMetadata({ data: "json, name=processingEndDateTime" })
  processingEndDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=processingStartDateTime" })
  processingStartDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=requestDateTime" })
  requestDateTime?: string;

  @SpeakeasyMetadata({ data: "json, name=requestMsg" })
  requestMsg?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectEmail" })
  subjectEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectPhone" })
  subjectPhone?: string;

  @SpeakeasyMetadata({ data: "json, name=type" })
  type?: string;
}
