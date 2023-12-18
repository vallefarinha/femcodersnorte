import Button from 'react-bootstrap/Button';

const ButtonNav = () => {
    return (
      <Button
        as="a"
        href="https://factoriaf5.org/"
        type="button"
        variant="outline-danger"
        className="rounded-pill btn-download fw-bold"
      >
        DOWNLOAD
      </Button>
    );
}

export default ButtonNav;
