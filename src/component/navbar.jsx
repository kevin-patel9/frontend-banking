import { Container, Nav, Navbar } from "react-bootstrap";

export const NavbarItem = () => {
  return (
    <>
      <Navbar style={{ backgroundColor: "inherit" }}>
        <Container>
          <Navbar.Brand
            style={{
              fontWeight: "800",
              fontSize: "1.6rem",
              color: "rgb(200, 18, 224)",
            }}
            className="ms-3 mt-2"
            href="/"
          >
            Class Bank
          </Navbar.Brand>
          {/* <Navbar.Toggle style={{ backgroundColor: "rgb(200, 18, 224)"}} /> */}
          <Navbar.Collapse className="justify-content-end">
            <Nav className="ms-4 mt-2" style={{ fontWeight: "700" }}>
              <Nav.Link className="nav-link" style={{ color: "rgb(200, 18, 224)" }} href="/">
                Home
              </Nav.Link>
              <Nav.Link className="nav-link" style={{ color: "rgb(200, 18, 224)" }} href="/customer">
                Customer's
              </Nav.Link>
              <Nav.Link
                className="nav-link"
                style={{ color: "rgb(200, 18, 224)" }}
                href="/transaction-history"
              >
                Transfer History
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
