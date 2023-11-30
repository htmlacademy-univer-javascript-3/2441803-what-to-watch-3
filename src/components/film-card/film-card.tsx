import {useNavigate} from 'react-router-dom';
import {Film} from '../../mocks/films.ts';
import VideoPlayer from '../video-player/video-player.tsx';

type FilmProps = {
  film: Film;
}

function FilmCard(props: FilmProps) {
  const navigate = useNavigate();
  const {film} = props;
  return (
    <article
      className="small-film-card catalog__films-card"
      onClick={() => navigate(`film/${film.id}`)}
    >
      <VideoPlayer src='https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4'
        posterSrc={film.previewImage}
      />
      <h3 className="small-film-card__title">
        <a className="small-film-card__link" href="film-page.html">{film.name}</a>
      </h3>
    </article>
  );
}

export default FilmCard;
