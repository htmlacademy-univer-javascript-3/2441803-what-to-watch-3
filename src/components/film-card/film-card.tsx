type FilmProps = {
  name: string,
  srcImage: string,
  altImage: string
}

function FilmCard(props: FilmProps) {
  return (
    <article className="small-film-card catalog__films-card">
      <div className="small-film-card__image">
        <img src={props.srcImage} alt={props.altImage} width="280" height="175"/>
      </div>
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{props.name}</a>
      </h3>
    </article>
  )
}

export default FilmCard
