import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class GetMeResponseDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=applicationName" })
  applicationName?: string;

  @SpeakeasyMetadata({ data: "json, name=attentiveDomainName" })
  attentiveDomainName?: string;

  @SpeakeasyMetadata({ data: "json, name=companyId" })
  companyId?: string;

  @SpeakeasyMetadata({ data: "json, name=companyName" })
  companyName?: string;

  @SpeakeasyMetadata({ data: "json, name=contactEmail" })
  contactEmail?: string;
}
