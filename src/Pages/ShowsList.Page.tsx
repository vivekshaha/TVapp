import { useEffect, useState, FC } from "react";
import SearchBar from "../Components/SearchBar";
import { showCasts, showSearch } from "../API/api";
import { Show } from "../Models/show";
import ShowCard from "../Components/ShowCard";
import { connect } from "react-redux";
import { setqueryAction, showLoadedAction } from "../actions/Show";
import { showQuerySelctor, showlistSelector } from "../selectors/show";
import { State } from "../store";

type ShowListPageProps = {
  shows: Show[];
  // showLoaded: (show: Show[]) => void;
  query: string;
  setquery: (query: string) => void;
};

const ShowListPage: FC<ShowListPageProps> = ({ shows, query, setquery }) => {
  // const shows = useSelector(showlistSelector);
  // showCasts(343).then((dat) => console.log(dat));
  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(event) => setquery(event.target.value)}
      />
      {shows.length !== 0 ? (
        <div className="flex flex-wrap justify-center">
          {shows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <h1 className="text-4xl font-semibold tracking-wide">
            Type Your Show to Know their Detail
          </h1>
        </div>
      )}
    </div>
  );
};

const mapPropsToState = {
  // showLoaded: showLoadedAction,
  setquery: setqueryAction,
};

const mapStateToProps = (state: State) => {
  return { shows: showlistSelector(state), query: showQuerySelctor(state) };
};
const choc = connect(mapStateToProps, mapPropsToState);

export default choc(ShowListPage);
