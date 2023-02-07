import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import { CustomIdentifierDto1 } from "./customidentifierdto1";



export class IdentifyRequestDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=clientUserId" })
  clientUserId?: string;

  @SpeakeasyMetadata({ data: "json, name=customIdentifiers", elemType: CustomIdentifierDto1 })
  customIdentifiers?: CustomIdentifierDto1[];

  @SpeakeasyMetadata({ data: "json, name=email" })
  email?: string;

  @SpeakeasyMetadata({ data: "json, name=klaviyoId" })
  klaviyoId?: string;

  @SpeakeasyMetadata({ data: "json, name=phone" })
  phone?: string;

  @SpeakeasyMetadata({ data: "json, name=shopifyId" })
  shopifyId?: string;
}
