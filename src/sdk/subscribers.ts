import { AxiosInstance, AxiosRequestConfig, AxiosResponse, ParamsSerializerOptions } from "axios";
import * as operations from "./models/operations";
import * as utils from "../internal/utils";

export class Subscribers {
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
   * addSubscriptions - Subscribe user
   *
   * Make a call to this endpoint to opt-in a user to a subscription. 
   * 
   * Notes:
   * - A legal disclosure is required when a user is opted-in programmatically.
   * 
   *     - For marketing messages, required [legal language](https://docs.attentivemobile.com/pages/legal-docs/legal-disclosure-language/) must be included.
   * 
   *     - For transactional messages, you must include a [transactional opt-in unit](https://docs.attentivemobile.com/pages/legal-docs/legal-transactional/).
   * 
   * - By default, if a subscription already exists, it will try and record the attempt to create the subscription again. For TEXT subscriptions, this will result in a message being sent to the person indicating that they are already subscribed.
   * 
  **/
  addSubscriptions(
    req: operations.AddSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.AddSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.AddSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscriptions";

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.AddSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.addSubscriptionsResponseDto = httpRes?.data;
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
   * getSubscriptions - Get subscription eligibility for a user
   *
   * Make a call to this endpoint to list all subscription types and channels a user is subscribed to. You can query for a subscriber using either their phone number or email. One of the query parameters is required in order to look up a subscriber. As an example, you can use this endpoint to check if a subscriber is eligible to receive SMS or email campaigns, and then send them a message based on that eligibility.
   * 
  **/
  getSubscriptions(
    req: operations.GetSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.GetSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.GetSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscriptions";
    
    const client: AxiosInstance = this._securityClient!;
    
    const qpSerializer: ParamsSerializerOptions = utils.getQueryParamSerializer(req.queryParams);

    const requestConfig: AxiosRequestConfig = {
      ...config,
      params: req.queryParams,
      paramsSerializer: qpSerializer,
    };
    
    
    const r = client.request({
      url: url,
      method: "get",
      ...requestConfig,
    });
    
    return r.then((httpRes: AxiosResponse) => {
        const contentType: string = httpRes?.headers?.["content-type"] ?? "";

        if (httpRes?.status == null) throw new Error(`status code not found in response: ${httpRes}`);
        const res: operations.GetSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 200:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.getSubscriptionsResponseDto = httpRes?.data;
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
   * unsubscribeSubscriptions - Unsubscribe subscriptions for a user
   *
   * Make a call to this endpoint to unsubscribe a user from a subscription type or channel. If no subscriptions
   * are present in the request, the user is unsubscribed from all subscriptions. If subscriptions are present
   * in the request, the user is unsubscribed from the requested type or channel combination. By default, if a
   * subscription exists, but the user is already unsubscribed, it records the attempt to unsubscribe the
   * subscription again. For TEXT subscriptions, a message is sent to the person indicating that they are
   * unsubscribed.
   * 
   * For the user object, the email data point determines which email subscriptions a user has and the phone data point 
   * determines which text (or sms) subscriptions a user has. Passing in an email does not locate, nor unsubscribe, 
   * a user from any sms subscriptions. Similarly, passing in a phone does not locate, nor unsubscribe, a user from any email subscriptions.
   * 
  **/
  unsubscribeSubscriptions(
    req: operations.UnsubscribeSubscriptionsRequest,
    config?: AxiosRequestConfig
  ): Promise<operations.UnsubscribeSubscriptionsResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.UnsubscribeSubscriptionsRequest(req);
    }
    
    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/subscriptions/unsubscribe";

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
    if (reqBody == null || Object.keys(reqBody).length === 0) throw new Error("request body is required");
    
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
        const res: operations.UnsubscribeSubscriptionsResponse = {statusCode: httpRes.status, contentType: contentType};
        switch (true) {
          case httpRes?.status == 202:
            if (utils.matchContentType(contentType, `application/json`)) {
                res.unsubscribeSubscriptionsResponseDto = httpRes?.data;
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
