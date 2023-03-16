import { Route, Routes } from "react-router-dom";
import {
  getGalleries,
  getArtworks,
  getUsers,
  getTags,
  getExhibitions,
} from "./api";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import HomeGalleriesAndArtworks from "./pages/HomeGalleriesAndArtworks";
import ArtworkPage from "./pages/ArtworkPage";
import GalleryList from "./components/GalleryList";
import ArtworksList from "./components/ArtworksList";
import AdminSettings from "./pages/AdminSettings";
import UserProfile from "./pages/UserProfile";
import GalleryProfile from "./pages/GalleryProfile";
import ExhibitPage from "./pages/ExhibitPage";
import ExhibitionList from "./components/ExhibitionList";
import NotFound from "./pages/NotFound";

//APP
const App = () => {
  //USESTATE
  const [galleries, setGalleries] = useState([]);
  const [artworks, setArtworks] = useState([]);
  const [users, setUsers] = useState([]);
  const [tags, setTags] = useState([]);
  const [exhibitions, setExhibitions] = useState([]);

  //FUNZIONI
  const callGalleries = async () => {
    const response = await getGalleries();
    setGalleries(response);
  };
  const callArtworks = async () => {
    const response = await getArtworks();

    setArtworks(response);
  };
  const callUsers = async () => {
    const response = await getUsers();
    setUsers(response);
  };
  const callTags = async () => {
    const response = await getTags();
    setTags(response);
  };
  const callExhibitions = async () => {
    const response = await getExhibitions();
    setExhibitions(response);
  };
  useEffect(() => {
    callGalleries();
    callArtworks();
    callUsers();
    callTags();
    callExhibitions();
  }, []);

  return (
    <Routes>
      {/* root generale */}
      <Route
        path="/"
        element={<HomePage users={users} galleries={galleries} />}
      >
        <Route
          path=""
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/search/:search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/galleries"
          element={<GalleryList galleries={galleries} />}
        />
        <Route
          path="/artworks"
          element={<ArtworksList artworks={artworks} />}
        />
        <Route
          path="/exhibitions"
          element={<ExhibitionList exhibitions={exhibitions} />}
        />
        <Route path="/gallery/:idGallery" element={<GalleryPage />} />
        <Route path="/artwork/:artworkId" element={<ArtworkPage />} />
        <Route path="/exhibit/:exhibitId" element={<ExhibitPage />} />
      </Route>
      {/* root user logged */}
      <Route
        path="/:userId/user"
        element={<HomePage users={users} galleries={galleries} />}
      >
        <Route
          path="/:userId/user"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:userId/user/search/:search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:userId/user/search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:userId/user/galleries"
          element={<GalleryList galleries={galleries} />}
        />
        <Route
          path="/:userId/user/artworks"
          element={<ArtworksList artworks={artworks} />}
        />
        <Route
          path="/:userId/user/exhibitions"
          element={<ExhibitionList exhibitions={exhibitions} />}
        />
        <Route
          path="/:userId/user/gallery/:idGallery"
          element={<GalleryPage />}
        />
        <Route
          path="/:userId/user/artwork/:artworkId"
          element={<ArtworkPage />}
        />
        <Route
          path="/:userId/user/exhibit/:exhibitId"
          element={<ExhibitPage />}
        />
      </Route>
      <Route path="/:userId/user/*" element={<NotFound />} />
      {/* root gallery logged */}
      <Route
        path="/:galleryId/gallery"
        element={<HomePage users={users} galleries={galleries} />}
      >
        <Route
          path="/:galleryId/gallery"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:galleryId/gallery/search/:search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:galleryId/gallery/search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:galleryId/gallery/galleries"
          element={<GalleryList galleries={galleries} />}
        />
        <Route
          path="/:galleryId/gallery/artworks"
          element={<ArtworksList artworks={artworks} />}
        />
        <Route
          path="/:galleryId/gallery/exhibitions"
          element={<ExhibitionList exhibitions={exhibitions} />}
        />
        <Route
          path="/:galleryId/gallery/gallery/:idGallery"
          element={<GalleryPage />}
        />
        <Route
          path="/:galleryId/gallery/artwork/:artworkId"
          element={<ArtworkPage />}
        />
        <Route
          path="/:galleryId/gallery/exhibit/:exhibitId"
          element={<ExhibitPage />}
        />
      </Route>
      <Route path="/:galleryId/gallery/*" element={<NotFound />} />
      {/* root admin logged */}
      <Route
        path="/:adminId/admin"
        element={<HomePage users={users} galleries={galleries} />}
      >
        <Route
          path="/:adminId/admin"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:adminId/admin/search/:search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:adminId/admin/search"
          element={
            <HomeGalleriesAndArtworks
              galleries={galleries}
              artworks={artworks}
              exhibitions={exhibitions}
            />
          }
        />
        <Route
          path="/:adminId/admin/galleries"
          element={<GalleryList galleries={galleries} />}
        />
        <Route
          path="/:adminId/admin/artworks"
          element={<ArtworksList artworks={artworks} />}
        />
        <Route
          path="/:adminId/admin/exhibitions"
          element={<ExhibitionList exhibitions={exhibitions} />}
        />
        <Route
          path="/:adminId/admin/gallery/:idGallery"
          element={<GalleryPage />}
        />
        <Route
          path="/:adminId/admin/artwork/:artworkId"
          element={<ArtworkPage />}
        />
        <Route
          path="/:adminId/admin/exhibit/:exhibitId"
          element={<ExhibitPage />}
        />
      </Route>
      <Route path="/:adminId/admin/*" element={<NotFound />} />
      {/* root user profile */}
      <Route path="/:userId/user/profile" element={<UserProfile />} />
      {/* root gallery profile */}
      <Route
        path="/:galleryId/gallery/profile"
        element={
          <GalleryProfile
            tags={tags}
            artworks={artworks}
            exhibitions={exhibitions}
          />
        }
      />
      {/* root admin settings */}
      <Route
        path="/admin/:adminId/settings"
        element={
          <AdminSettings
            users={users}
            galleries={galleries}
            artworks={artworks}
            tags={tags}
            exhibitions={exhibitions}
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
