import axios from "axios";
// import { Session } from "./session";

const setHeaders = (params = {}) => {
  let options = {};
  // if (session.getSession()) {
  //   options.headers = {
  //     authorization: "JWT " + localStorage.getItem(session.sessionName)
  //   };
  // }
  if (jsonToQueryString(params) !== "?") {
    options.params = params;
    // history.push({
    //     pathname: history.location.pathname,
    //     search: jsonToQueryString(params)
    // })
  }
  options.headers = {
    "Content-type": "application/json"
  };
  return options;
};

export const jsonToQueryString = json => {
  if (json) {
    return (
      "?" +
      Object.keys(json)
        .map(function(key) {
          return encodeURIComponent(key) + "=" + encodeURIComponent(json[key]);
        })
        .join("&")
    );
  }
  return "";
};

const apiService = meta => {
  // Path is Required
  if (!meta.path) {
    throw new Error(`'path' not specified for async action ${meta.action}`);
  }

  // Final URL
  let url = `${process.env.REACT_APP_ENDPOINT}${meta.path}`;
  console.log(url);
  let request = axios.create();
  switch (meta.method) {
    case "GET":
      request = axios.get(url, setHeaders(meta.params));
      break;
    case "POST":
      request = axios.post(url, meta.body, setHeaders(meta.params));
      break;
    case "PUT":
      request = axios.put(url, meta.body, setHeaders(meta.params));
      break;
    case "DELETE":
      request = axios.delete(url, setHeaders(meta.params));
      break;
    default:
      break;
  }
  return request;
};

export default apiService;
