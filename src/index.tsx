import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/app.tsx';
import {films} from './mocks/films.ts';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const FutureFilm = {
  name: 'The Grand Budapest Hostel',
  genre: 'Drama',
  year: '2014'
} as const;

root.render(
  <React.StrictMode>
    <App
      name={FutureFilm.name}
      genre={FutureFilm.genre}
      year={FutureFilm.year}
      films={films}
    />
  </React.StrictMode>
);
