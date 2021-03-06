import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ArtistList } from './page/ArtistList';
import { ArtistSongList } from './page/ArtistSongList';
import { Song } from './page/Song';
import { Header } from './components/Header';

export const RouteList = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<ArtistList />} />
        <Route path="artist">
          <Route path=":idAlbum" element={<ArtistSongList />} />
        </Route>
        <Route path="randomsong" element={<Song />} />
      </Routes>
    </BrowserRouter>
  );
};
