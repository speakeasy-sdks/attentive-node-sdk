import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomIdentifierDto } from "./customidentifierdto";



// NewExternalIdentifierDto
/** 
 * External Identifiers for a user
**/
export class NewExternalIdentifierDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientUserId" })
  clientUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=customIdentifiers", elemType: CustomIdentifierDto })
  customIdentifiers?: CustomIdentifierDto[];

  @SpeakeasyMetadata({ data: "json, name=klaviyoId" })
  klaviyoId?: string;

  @SpeakeasyMetadata({ data: "json, name=shopifyId" })
  shopifyId?: string;
}
