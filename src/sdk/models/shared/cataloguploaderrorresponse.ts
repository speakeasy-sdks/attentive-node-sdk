import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";



export class CatalogUploadErrorResponse extends SpeakeasyBase {
  @SpeakeasyMetadata({ data: "json, name=errorMessage" })
  errorMessage?: string;

  @SpeakeasyMetadata({ data: "json, name=errorType" })
  errorType?: string;

  @SpeakeasyMetadata({ data: "json, name=lineNum" })
  lineNum?: number;
}
