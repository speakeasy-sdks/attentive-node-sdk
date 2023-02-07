import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



// NotificationConfigDto
/** 
 * Optional notification properties to override
**/
export class NotificationConfigDto extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=language" })
  language?: string;
}
