import { create } from "apisauce";

const apiClient = create({
  baseURL: "https://swapi.dev/api/",
});

export default apiClient;
