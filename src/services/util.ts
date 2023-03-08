import axios, { AxiosError } from "axios";

export async function getData<T>(url: string): Promise<T> {
  try {
    const { data } = await axios.get<T>(url);
    return data;
  } catch (error) {
    const axiosError = error as AxiosError;
    if (axiosError.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      throw {
        message: axiosError.message,
        code: parseInt(axiosError.code ?? "500"),
      };
    }
    throw { message: "Something wrong happened", code: 500 };
  }
}
