import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// CustomIdentifierDto
/** 
 * Namespaced custom identifier and value
**/
export class CustomIdentifierDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name?: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value?: string;
}
