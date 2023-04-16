function AddToFavoriteButton(): JSX.Element {

  //TODO: thunk action. дописать запрос
  // const addToFavoriteHandler = () => {
  // }
  return (
    <button className="btn btn--list film-card__button" type="button">
      <svg viewBox="0 0 19 20" width="19" height="20">
        <use xlinkHref="#add"></use>
      </svg>
      <span>My list</span>
      <span className="film-card__count">111</span>
    </button>
  );
}

export default AddToFavoriteButton;
