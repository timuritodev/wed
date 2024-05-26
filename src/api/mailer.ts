import { IMailer } from "../types/Mailer.types";
import { API_BASE_URL } from "../utils/constants";

const checkRes = (res: Response) => {
  if (res.ok) {
    return res;
  } else {
    return Promise.reject(res);
  }
};

export const fetchData = (url: string, method: string, data: IMailer) => {
  return fetch(url, {
    method,
    headers: {
      "Content-Type": "application/json",
    },
    ...(!!data && { body: JSON.stringify(data) }),
  }).then((res) => checkRes(res));
};

export const fetchSendEmail = (data: IMailer): Promise<Response> => {
  return fetchData(`${API_BASE_URL}/send-email`, "POST", data);
};

// import axios, { AxiosResponse } from "axios";
// import { API_BASE_URL } from "../utils/constants";

// export const getAssetBySerial = async (
//   email: string,
//   text: string
// ): Promise<Response> => {
//   try {
//     const response: AxiosResponse<Response> = await axios.get(
//       `${API_BASE_URL}/`
//     );
//     return response.data;
//   } catch (error) {
//     throw new Error("Ошибка при выполнении запроса");
//   }
// };
