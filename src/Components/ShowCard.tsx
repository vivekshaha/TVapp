import { Link } from "react-router-dom";
import { Show } from "../Models/show";
import { FC } from "react";
type ShowCarProps = {
  show: Show;
};

const ShowCard: FC<ShowCarProps> = ({ show }) => {
  return (
    <div className="max-w-xs p-2 m-1 rounded-md shadow-md">
      <img
        src={show.image?.medium}
        alt=""
        className="object-cover object-center w-full rounded-t-md h-72"
      />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">{show.name}</h2>
          <p>{show.summary}</p>
        </div>
        <Link
          to="/show/1"
          className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md"
        >
          View Details
        </Link>
      </div>
    </div>
  );
};

export default ShowCard;
