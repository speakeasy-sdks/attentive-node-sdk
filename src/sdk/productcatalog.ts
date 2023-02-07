import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class ProductCatalog {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(defaultClient: AxiosInstance, securityClient: AxiosInstance, serverURL: string, language: string, sdkVersion: string, genVersion: string) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }
  
  /**
   * getUploads - View Recent Catalog Uploads
   *
   * Make a call to this endpoint to list recent catalog uploads with their statuses to gain visibility into the ingestion workflow in order of creation. See the POST of this endpoint for details.
   * 
  **/
  getUploads(
    req: operations.GetUploadsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetUploadsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetUploadsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product-catalog/uploads";
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetUploadsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogUploadResponses = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * lookupUpload - Lookup Product Catalog Ingestion
  **/
  lookupUpload(
    req: operations.LookupUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.LookupUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.LookupUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/product-catalog/uploads/{uploadId}", req.pathParams);
    
    const client: AxiosInstance = this._securityClient!;
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.LookupUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

  
  /**
   * postUpload - Upload Product Catalog
   *
   * Make a call to this endpoint to start sending Attentive your full or partial product catalog.
   * The process starts with a POST to this endpoint, where you will receive a pre-signed AWS S3 URL. You can
   * use any language's http request libraries for uploading a file via HTTP. Here's how to do it with `curl` as an example
   * 
   * 
   * ```
   * curl --upload-file ${fileNameLocally} ${presignedURL}
   * ```
   * 
   * 
   * and here's an example in Python
   * ```python
   * import requests
   * with open(filepath, 'rb') as f:
   *     r = requests.put(upload_url, data=f)
   * ```
   * 
   * [Here are examples from AWS](https://docs.aws.amazon.com/AmazonS3/latest/userguide/PresignedUrlUploadObject.html) on how to send the file over in popular programming languages. Note that you aren't interested in
   * the portion of these examples where they are generating the pre-signed URL, but simply the http call to upload the file to the URL.
   * 
   * Once your full or partial product catalog begins to upload, the status is updated to
   * `validating` while it's processing and the file is checked for errors. After the upload is
   * validated, the status is updated to `validated` or skips directly to `completed`. When the
   * catalog is saved, the status is updated to `SAVED`. In cases where there are errors saving
   * the data, Attentive Engineering is notified and will contact you.
   * 
   * 
   * To ensure there are no validation errors in the file, you can set `validateOnly` parameter
   * to `true` to avoid saving any data. We highly recommend this during your development to get a
   * faster feedback loop on any validation errors as you generate files.
   * 
   * 
   * If there are no errors returned in the upload response, your product catalog uploaded
   * successfully.
   * 
  **/
  postUpload(
    req: operations.PostUploadRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.PostUploadResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.PostUploadRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/product-catalog/uploads";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(req);
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }
    
    const client: AxiosInstance = this._securityClient!;
    
    const headers = {...reqBodyHeaders, ...config?.headers};
    
    const r = client.request({
      url: url,
      method: "post",
      headers: headers,
      data: reqBody, 
      ...config,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.PostUploadResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.catalogUploadResponse = httpRes?.data;
            }
            break;
          case httpRes?.status == 400:
            break;
          case httpRes?.status == 401:
            break;
          case httpRes?.status == 403:
            break;
          case httpRes?.status == 404:
            break;
          case httpRes?.status == 429:
            break;
          case httpRes?.status == 500:
            break;
        }

        return res;
      })
  }

}
