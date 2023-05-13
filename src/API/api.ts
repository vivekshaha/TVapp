import axios from "axios";
import { BASE_URL } from ".";
import { Cast, Show } from "../Models/show";

// // export function showSearch(keyword: string) {
// //   return axios
// //     .get<{ Show: Show }[]>("https://api.tvmaze.com/search/shows?q=" + keyword)
// //     .then((response) => {
// //       const showarr = response.data.map((item: any) => {
// //         return item.show;
// //       });
// //       return showarr;
// //     });
// }
export async function showCastsearch(keyword: string) {
  const showresponse = await axios.get<{ Show: Show }[]>(
    "https://api.tvmaze.com/search/shows?q=" + keyword
  );
  const shows: Show[] = showresponse.data.map((item: any) => item.show);
  // console.log(shows);
  let showCastArr: { show: Show; cast: Cast[] }[];
  showCastArr = [];
  for (let i = 0; i < shows.length; i++) {
    const cast = await showCasts(shows[i].id);
    const show = shows[i];
    const data = { show, cast };
    // console.log("showsawt data", data);
    // console.log("this code is  running");
    showCastArr.push(data);
    // console.log("this code is not running");
  }
  // console.log("this is showcase arrr", showCastArr);
  const data = showCastArr;
  return data;
}
export async function showSingleSearch(id: number) {
  const response = await axios.get<{ Show: Show }>(
    "https://api.tvmaze.com/shows/" + id
  );
  const cast = await showCasts(id);
  return { show: response.data, cast };
}

export async function showCasts(id: number) {
  const r = await axios.get<{ cast: Cast }[]>(
    "https://api.tvmaze.com/shows/" + id + "/cast"
  );

  const castarr: Cast[] = r.data.map((item: any) => item.person);
  // console.log("cast data", castarr);
  return castarr;
}
