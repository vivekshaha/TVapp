import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { ConnectedProps, connect, useDispatch } from "react-redux";
import { State } from "../store";
import { Cast, Show } from "../Models/show";
import { ShowCastAction, setShowIdAction } from "../actions/Show";
import { showCastSelector, ShowSelector } from "../selectors/show";
import { showCasts } from "../API/api";
import { IMG } from "./ShowsList.Page";
import { Link } from "react-router-dom";
type ownProps = {} & WithRouterProps;
type ShowDetailPageProps = ReduxProps & ownProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({
  params,
  showId,
  show,
  cast,
}) => {
  // console.log("cast", cast);
  const id = +params.show_id;
  const dispatch = useDispatch();

  useEffect(() => {
    showId(id);
    showCasts(id).then((casts) => {
      dispatch(ShowCastAction(casts));
    });
  }, [id]);
  if (!show) {
    return <div>...Loading...</div>;
  }
  // const dat = show;
  // console.log();

  return (
    <div className="mt-2">
      <Link to="/" className="bg-red-300">
        Back
      </Link>
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex p-2 my-2 space-x-3 bg-gray-300 rounded-sm">
        <div></div>
        {show.genres && show.genres.length != 0 ? (
          show.genres.map((name) => {
            return (
              <>
                <GenrePill name={name} key={name} />
              </>
            );
          })
        ) : (
          <div>NA</div>
        )}
      </div>
      <div className="flex mt-2">
        <img
          src={show.image?.medium || IMG}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72"
        />
        <div className="ml-2">
          <p
            dangerouslySetInnerHTML={{ __html: show.summary || "NOT SUMMARY" }}
          ></p>
          <p className="px-2 py-1 mt-2 text-lg font-bold border border-gray-700 rounded-md max-w-max">
            Rating:{" "}
            <span className="text-gray-700">
              {show.rating.average ? show.rating.average : <span>NA</span>}/10
            </span>
          </p>
        </div>
      </div>

      <div className="mt-2">
        <h4 className="text-2xl font-semibold tracking-wide">Cast</h4>
        <div className="flex flex-wrap">
          {cast &&
            cast.map((c) => (
              <CastCard key={c.id} avatarLink={c.image?.medium} name={c.name} />
            ))}
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state: State, ownShowProps: ownProps) {
  const id = ownShowProps.params.show_id;
  return {
    show: ShowSelector(state)[+id],
    cast: showCastSelector(state),
  };
}
const mapDispatchToProps = {
  showId: setShowIdAction,
};
const connector = connect(mapStateToProps, mapDispatchToProps);
type ReduxProps = ConnectedProps<typeof connector>;
export default withRouter(connector(ShowDetailPage));
