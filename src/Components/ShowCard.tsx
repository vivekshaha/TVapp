import { Link } from "react-router-dom";
import { Cast, Show } from "../Models/show";
import { FC } from "react";
import { IMG } from "../Pages/ShowsList.Page";
import AvatarGroups from "./GroupAvatars";
type ShowCarProps = {
  show: Show;
  cast: Cast[];
};

const ShowCard: FC<ShowCarProps> = ({ show, cast }) => {
  return (
    <div className="max-w-xs p-2 m-1 rounded-md shadow-md">
      <img
        src={show.image?.medium || IMG}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          {/* <p
            dangerouslySetInnerHTML={{ __html: show.summary || "NOT SUMMARY" }}
          ></p> */}
        </div>
        <Link
          to={"/show/" + show.id}
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-slate-500 hover:bg-slate-700"
        >
          View Details
        </Link>
        <AvatarGroups item={cast} />
      </div>
    </div>
  );
};

export default ShowCard;
