import { SpeakeasyMetadata, SpeakeasyBase } from "../../../internal/utils";
import * as shared from "../shared";



export class GetMeResponse extends SpeakeasyBase {
  @SpeakeasyMetadata()
  contentType: string;

  @SpeakeasyMetadata()
  getMeResponseDto?: shared.GetMeResponseDto;

  @SpeakeasyMetadata()
  statusCode: number;
}
