import { Link, useParams } from "react-router-dom";

const NotFound = () => {
  const { userId, galleryId, adminId } = useParams();
  let url = "";

  if (adminId) {
    url = `/${adminId}/admin`;
  }
  if (userId) {
    url = `/${userId}/user`;
  }
  if (galleryId) {
    url = `/${galleryId}/gallery`;
  }
  return (
    <div className="not-found-back d-flex justify-content-center align-items-center">
      <div className="shadow text-center">
        <h1 style={{ color: "black" }}>OOOPS! PAGE NOT FOUND</h1>
        <Link to={url + "/"} className="btn btn-warning">
          RETURN TO HOMEPAGE
        </Link>
      </div>
    </div>
  );
};
export default NotFound;
