import config from "../config/config";

namespace Coreforce {
  function buildQuery(
    method: string,
    parameters: { [param: string]: string | number | boolean },
  ): string {
    const encodedParams = [];
    for (const p in parameters)
      if (parameters.hasOwnProperty(p)) {
        encodedParams.push(
          encodeURIComponent(p) + "=" + encodeURIComponent(parameters[p]),
        );
      }
    const urlParamString = encodedParams.join("&");
    return `${config.COREFORCE_API_ENDPOINT}?method=${method}${urlParamString}`;
  }
  export async function getProducts() {
    const response = await fetch("https://api.example.com/products");
    const data = await response.json();
    return data;
  }
}
