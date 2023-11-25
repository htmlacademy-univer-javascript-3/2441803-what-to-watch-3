import {Film} from '../../mocks/films.ts';
import FilmCard from '../film-card/film-card.tsx';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
}

function FilmList(props: FilmListProps) {
  const results = useState(0);
  const setActiveFilm = results[1];
  const handleActiveFim = (id: number) => {
    setActiveFilm(id);
  };

  const filmList = props.films.map((film) =>
    (
      <FilmCard key={film.id} id={film.id} name={film.name} srcImage={film.previewImage} altImage={film.altImage}
        onActive={handleActiveFim}
      />
    )
  );
  return (
    <div className="catalog__films-list">
      {filmList}
    </div>
  );
}

export default FilmList;
