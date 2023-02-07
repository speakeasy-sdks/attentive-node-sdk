import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CustomIdentifierDto1 extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=name" })
  name: string;

  @SpeakeasyMetadata({ data: "json, name=value" })
  value: string;
}
