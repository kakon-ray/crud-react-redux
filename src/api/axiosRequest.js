import axios from "axios";

export async function axiosRequest(url, mathods, headers, params) {
  return params
    ? axios({
        url: url,
        mathods: mathods,
        headers: headers,
        data: params,
        timeout: 1000,
      })
    : axios({
        url: url,
        mathods: mathods,
        headers: headers,
        data: params,
        timeout: 1000,
      });
}

const GetApiDetails = () => {
  const headers = {
    "content-type": "application/json",
  };
  return axiosRequest("http://localhost:3000/details", "GET", headers, {});
};

export default GetApiDetails;
