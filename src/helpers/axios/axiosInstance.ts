import { authKey } from "@/constants/storageKey";
import { getNewAccessToken } from "@/services/auth.service";
import { IGenericErrorResponse, ResponseSuccessType } from "@/types";
import { getFromLocalStorage, setToLocalStorage } from "@/utils/local-storage";
import axios from "axios";
const instance = axios.create();
instance.defaults.headers.post["Content-Type"] = "application/json";
instance.defaults.headers["Accept"] = "application/json";
instance.defaults.timeout = 6000000;
instance.interceptors.request.use(
  function (config) {
    const accessToken = getFromLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
//@ts-ignore
instance.interceptors.response.use(
  function (response): any {
    const responseObject: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return responseObject;
  },
  async function (error) {
    const config = error?.config;
    if (
      (error?.response?.status === 403 || error?.response?.status === 500) &&
      !config?.sent
    ) {
      config.sent = true;
      const response = await getNewAccessToken();
      const accessToken = response?.data?.accessToken;
      config.headers["Authorization"] = accessToken;
      setToLocalStorage(authKey, accessToken);
      return instance(config);
    } else {
      const responseObject: IGenericErrorResponse = {
        statusCode: error?.response?.data?.statusCode || 500,
        message: error?.response?.data?.messages || "Something went wrong!",
        errorMessages: error?.response?.data?.messages,
      };
      return responseObject;
    }
  }
);
export { instance };
