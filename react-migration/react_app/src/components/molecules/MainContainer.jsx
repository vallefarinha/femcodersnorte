import { Container } from "react-bootstrap";
import ButtonIcon from "../atoms/ButtonIcon";

function MainContainer() {
  return (
    <Container className="main-container">
      <h1 className="display-1">Mobile App Landing Page</h1>
      <p className="fs-4">
        This is a template for a simple marketing or informational website. It
        includes a large callout called a jumbotron and three supporting pieces
        of content. Use it as a starting point to create something more unique.
      </p>
      <div className="buttons-container">
        <ButtonIcon></ButtonIcon>
      </div>
    </Container>
  );
}

export default MainContainer;
