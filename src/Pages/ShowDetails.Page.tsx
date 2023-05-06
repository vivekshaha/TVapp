import { FC, useEffect } from "react";
import CastCard from "../Components/CastCard";
import GenrePill from "../Components/GenrePill";
import withRouter, { WithRouterProps } from "../hocs/withRouter";
import { createSelector } from "reselect";
import { connect } from "react-redux";
import { State } from "../store";
import { Show } from "../Models/show";
import { setShowIdAction, singleShowLoadeAction } from "../actions/Show";
import { singleShowSelector } from "../selectors/show";

type ShowDetailPageProps = {
  show: Show;
  showId: (id: number) => void;
} & WithRouterProps;

const ShowDetailPage: FC<ShowDetailPageProps> = ({ params, showId, show }) => {
  const id = +params.show_id;
  useEffect(() => {
    showId(id);
  }, [id]);

  if (!show) {
    return <div>...LOading...</div>;
  }
  // console.log(show);
  const dat = show;
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
          <p>{show.summary}</p>
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
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545468.jpg"
            name="Henry Cavill"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545472.jpg"
            name="Freya Allan"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/218/545470.jpg"
            name="Anya Chalotra"
          />
          <CastCard
            avatarLink="https://static.tvmaze.com/uploads/images/medium_portrait/232/581040.jpg"
            name="Mimi Ndiweni"
          />
        </div>
      </div>
    </div>
  );
};
function mapStateToProps(state: State, ownShowProps: ShowDetailPageProps) {
  const id = ownShowProps.params.show_id;
  return {
    show: singleShowSelector(state)[+id],
  };
}
const mapDispatchToProps = {
  showId: setShowIdAction,
};
const conn = connect(mapStateToProps, mapDispatchToProps);

export default withRouter(conn(ShowDetailPage));
