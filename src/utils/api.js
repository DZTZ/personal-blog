import axios from "@/utils/axios";
const api = {
  cs: "/api/list",
  cs2: "/api/data"
};

export function cs(parameter) {
  return axios.formRequest.get(api.cs, parameter);
}
export function cs2(parameter) {
  return axios.formRequest.post(api.cs2, parameter);
}
