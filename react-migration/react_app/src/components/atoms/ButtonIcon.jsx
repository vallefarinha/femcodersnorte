import Button from "react-bootstrap/Button";

const ButtonIcon = () => {
  return (
    <>
    <a href="https://factoriaf5.org/">
      <Button
        className="btn rounded-pill btn-download-filled bg-danger text-white fw-bold bg-gradient"
        type="button"
      >
        <i
          className="fa-brands fa-apple"
          style={{ color: "#ffffff" }}
        ></i>
        DOWNLOAD
      </Button>
    </a>
    <a href="https://factoriaf5.org/">
      <Button
        className="btn rounded-pill btn-download-filled bg-danger text-white fw-bold bg-gradient"
        type="button"
      >
        <i
          className="fa-brands fa-google-play"
          style={{ color: "#ffffff" }}
        ></i>
        DOWNLOAD
      </Button>
    </a>
    </>
  );
};

export default ButtonIcon;
