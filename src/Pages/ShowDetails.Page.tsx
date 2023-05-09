import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { connect, useDispatch } from "react-redux";
import { State } from "../store";
import { Cast, Show } from "../Models/show";
import { ShowCastAction, setShowIdAction } from "../actions/Show";
import { showCastSelector, singleShowSelector } from "../selectors/show";
import { showCasts } from "../API/api";
// type ownProps = {} & WithRouterProps;
type ShowDetailPageProps = {
  show: Show;
  showId: (id: number) => void;
  cast: Cast[];
} & WithRouterProps;

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
  }, [id]);
  useEffect(() => {
    showCasts(id).then((casts) => {
      dispatch(ShowCastAction(casts));
    });
  }, [id]);
  if (!show) {
    return <div>...LOading...</div>;
  }
  // console.log(show);
  // const dat = show;
  // console.log(params.show_id);

  return (
    <div className="mt-2">
      <h2 className="text-4xl font-semibold tracking-wide">{show.name}</h2>
      <div className="flex p-2 my-2 space-x-3 bg-gray-300 rounded-sm">
        <div></div>
        {show.generes && show.generes.length == 0 ? (
          show.generes.map((name) => {
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
          src={show.image?.medium}
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
          {cast && cast.length !== 0 ? (
            cast.map((c) => (
              <CastCard key={c.id} avatarLink={c.image.medium} name={c.name} />
            ))
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state: State, ownShowProps: ShowDetailPageProps) {
  const id = ownShowProps.params.show_id;
  return {
    show: singleShowSelector(state)[+id],
    cast: showCastSelector(state),
  };
}
const mapDispatchToProps = {
  showId: setShowIdAction,
};
const conn = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(conn(ShowDetailPage));
