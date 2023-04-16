import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const TheGrandBudapestHotel = {
  title: 'The Grand Budapest Hotel',
  genre: 'Drama',
  year: 2014
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <App
      title = {TheGrandBudapestHotel.title}
      genre = {TheGrandBudapestHotel.genre}
      year = {TheGrandBudapestHotel.year}
    />
  </React.StrictMode>,
);
