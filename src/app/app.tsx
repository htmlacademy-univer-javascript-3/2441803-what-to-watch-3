import {BrowserRouter, Route, Routes} from 'react-router-dom';
import WelcomeScreen from '../pages/welcome-screen/welcome-screen.tsx';
import {AppRoutes} from './routes.ts';
import SignIn from '../pages/sign-in/sign-in.tsx';
import AddReview from '../pages/add-review/add-review.tsx';
import MoviePage from '../pages/movie-page/movie-page.tsx';
import Player from '../pages/player/player.tsx';
import NotFound from '../pages/not-found/not-found.tsx';
import PrivateRoute from '../components/private-route/private-route.tsx';
import {AuthorizationStatus} from '../components/private-route/AuthorizationStatus.ts';
import MyList from '../pages/my-list/my-list.tsx';
import {Film} from '../mocks/films.ts';

type AppScreenProps = {
  name: string;
  year: string;
  genre: string;
  films: Film[];
}

function App(props: AppScreenProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoutes.Main}
          element={<WelcomeScreen name={props.name} genre={props.genre} year={props.year} films={props.films}/>}
        />
        <Route
          path={AppRoutes.SignIN}
          element={<SignIn/>}
        />
        <Route
          path={AppRoutes.AddReview}
          element={<AddReview films={props.films}/>}
        />
        <Route
          path={AppRoutes.Film}
          element={<MoviePage films={props.films}/>}
        />
        <Route
          path={AppRoutes.MyList}
          element={
            <PrivateRoute
              authStatus={AuthorizationStatus.Unknown}
            >
              <MyList films={props.films}/>
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoutes.Player}
          element={<Player/>}
        />
        <Route
          path='*'
          element={<NotFound/>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
