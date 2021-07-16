import Axios from "axios";
const base_url = "https://jsonplaceholder.typicode.com";

let axiosConfig = {
  headers: {
    "Content-Type": "application/json;charset=UTF-8",
    "Access-Control-Allow-Origin": "*",
  },
};

export const get_posts = async () => {
  const url = `${base_url}/posts`;

  return Axios.get(url, axiosConfig)
    .then((response) => response.data.body)
    .catch((err) => {
      console.log("[get_posts] =>", { url, err });
      throw new Error(err);
    });
};
