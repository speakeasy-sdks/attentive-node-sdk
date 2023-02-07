import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class PrivacyRequestAddDeleteEventDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=requestMsg" })
  requestMsg?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectEmail" })
  subjectEmail?: string;

  @SpeakeasyMetadata({ data: "json, name=subjectPhone" })
  subjectPhone?: string;
}
