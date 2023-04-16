import { Films } from '../../types/films';
import { FilmRating } from '../../const';

type OverviewProp ={
  film: Films;
}
function FilmTabOverview({film}: OverviewProp): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{film?.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{FilmRating(film?.rating)}</span>
          <span className="film-rating__count">{film?.scoresCount} ratings</span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{film?.description}</p>

        <p className="film-card__director"><strong>Director: {film?.director}</strong></p>

        <p className="film-card__starring"><strong>Starring: {film?.starring.join(', ')} and other</strong></p>
      </div>
    </>
  );
}

export default FilmTabOverview;
