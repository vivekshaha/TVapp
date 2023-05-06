import axios from "axios";
import { BASE_URL } from ".";
import { Show } from "../Models/show";

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
