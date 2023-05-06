import axios from "axios";
import { BASE_URL } from ".";
import { Cast, Show } from "../Models/show";

export function showSearch(keyword: string) {
  return axios
    .get<{ Show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
    .then((response) => {
      const showarr = response.data.map((item: any) => {
        return item.show;
      });
      return showarr;
    });
}
export function showSingleSearch(id: number) {
  return axios
    .get<{ Show: Show }>("https://api.tvmaze.com/shows/" + id)
    .then((response) => {
      return response.data;
    });
}
export function showCasts(id: number) {
  return axios
    .get<{ cast: Cast }[]>("https://api.tvmaze.com/shows/" + id + "/cast")
    .then((response) => {
      return response.data.map((item: any) => {
        return item.person;
      });
    });
}
