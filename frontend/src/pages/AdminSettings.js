import { Container, Navbar } from "react-bootstrap";

import TableUser from "../components/TableUser";
import TableGallery from "../components/TableGallery";
import TableArtwork from "../components/TableArtwork";
import TableTags from "../components/TableTags";
import TableExhibitions from "../components/TableExhibitions";

const AdminSettings = ({ users, galleries, artworks, tags, exhibitions }) => {
  return (
    <div className="bg-secondary">
      <Navbar bg="dark" expand="lg" className="">
        <Container fluid>
          <Navbar.Brand href="/1/admin" className="text-white">
            Art
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Container>
        <h1>USERS</h1>

        <TableUser users={users} />
      </Container>
      <br />
      <Container>
        <h1>GALLERIES</h1>

        <TableGallery galleries={galleries} />
      </Container>
      <br />
      <Container>
        <h1>ARTWORKS</h1>

        <TableArtwork artworks={artworks} tags={tags} />
      </Container>
      <Container>
        <h1>Exhibitions</h1>

        <TableExhibitions exhibitions={exhibitions} />
      </Container>
      <br />
      <Container>
        <h1>Tags</h1>

        <TableTags tags={tags} />
      </Container>
    </div>
  );
};
export default AdminSettings;
