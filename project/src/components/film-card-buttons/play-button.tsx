import { Link } from 'react-router-dom';

type PlayButtonProp = {
  id: number;
}

function PlayButton({id}: PlayButtonProp): JSX.Element {

  return (
    <Link to={`/player/${id}`} className="btn btn--play film-card__button" type="button">
      <svg viewBox="0 0 19 19" width="19" height="19">
        <use xlinkHref="#play-s"></use>
      </svg>
      <span>Play</span>
    </Link>
  );
}

export default PlayButton;
