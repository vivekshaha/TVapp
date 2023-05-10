import { useEffect, useState, FC } from "react";
import SearchBar from "../Components/SearchBar";
import { showCasts, showSearch } from "../API/api";
import { Show } from "../Models/show";
import ShowCard from "../Components/ShowCard";
import { connect, ConnectedProps } from "react-redux";
import { setqueryAction, showLoadedAction } from "../actions/Show";
import {
  QuerySelctor,
  loadingSelector,
  showlistSelector,
} from "../selectors/show";
import { State } from "../store";
export const IMG =
  "data:image/jpeg;base64,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";

type ShowListPageProps = {
  // shows: Show[];
  // // showLoaded: (show: Show[]) => void;
  // query: string;
  // setquery: (query: string) => void;
} & ReduxProps;

const ShowListPage: FC<ShowListPageProps> = ({
  shows,
  query,
  setquery,
  loading,
}) => {
  // const shows = useSelector(showlistSelector);
  // showCasts(343).then((dat) => console.log(dat));

  // console.log(loading);
  return (
    <div className="mt-2">
      <SearchBar
        value={query}
        onChange={(event) => setquery(event.target.value)}
      />
      <div className="flex flex-wrap justify-center">
        {!loading &&
          shows &&
          shows.map((show) => {
            return <ShowCard key={show.id} show={show} />;
          })}
      </div>
    </div>
  );
};

const mapPropsToState = {
  // showLoaded: showLoadedAction,
  setquery: setqueryAction,
};

const mapStateToProps = (state: State) => {
  return {
    shows: showlistSelector(state),
    query: QuerySelctor(state),
    loading: loadingSelector(state),
  };
};
const connector = connect(mapStateToProps, mapPropsToState);
type ReduxProps = ConnectedProps<typeof connector>;
export default connector(ShowListPage);
