import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CatalogUploadRequest extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=validateOnly" })
  validateOnly?: boolean;
}
