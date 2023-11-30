import {Film} from '../../mocks/films.ts';
import FilmCard from '../film-card/film-card.tsx';

type FilmListProps = {
  films: Film[];
}

function FilmList(props: FilmListProps) {
  const filmList = props.films.map((film) =>
    (
      <FilmCard key={film.id} film={film}/>
    )
  );
  return (
    <div className="catalog__films-list">
      {filmList}
    </div>
  );
}

export default FilmList;
