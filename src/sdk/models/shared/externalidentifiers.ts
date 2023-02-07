import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class ExternalIdentifiersCustomIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}


// ExternalIdentifiers
/** 
 * Please review the [Identity API notes](https://docs.attentivemobile.com/openapi/reference/tag/Identity/) before sending externalIdentifiers.
**/
export class ExternalIdentifiers extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientUserId" })
  clientUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=customIdentifiers", elemType: ExternalIdentifiersCustomIdentifiers })
  customIdentifiers?: ExternalIdentifiersCustomIdentifiers[];
}
