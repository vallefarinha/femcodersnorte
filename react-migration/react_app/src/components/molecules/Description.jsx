function Description() {
  return (
    <section id="description">
        
      <div className="description-container">
        <div className="description-container-row">
          <div className="description-container-section-left">
            <img
              src="../src/assets/img/description-1-app.png"
              className="description-container-content-img"
            />
          </div>

          <div className="description-container-section-right">
            <h2 className="display-5 fw-bold">
              Organize Your Time And Start Getting Results
            </h2>
            <p className="fs-6 fw-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              tempore numquam laboriosam harum cumque odit hic, vel praesentium
              totam pariatur?
            </p>
            <ul className="list-group-style p-4">
              <li className="fs-6 fw-semibold">An item</li>
              <li className="fs-6 fw-semibold">A second item</li>
              <li className="fs-6 fw-semibold">A third item</li>
              <li className="fs-6 fw-semibold">A fourth item</li>
              <li className="fs-6 fw-semibold">And a fifth one</li>
            </ul>
            <div className="description-buttons-container">
              <a href="https://factoriaf5.org/">
                <button
                  className="btn btn-danger rounded-pill fw-bold fs-5 bg-gradient"
                  type="button"
                >
                  LIGHTBOX
                </button>
              </a>
            </div>
          </div>
        </div>

        <div>
          <div className="description-container-row bg-blue">
            <div className="description-container-section-left description-container-section-left-bottom">
              <div className="description-container-buttons-top">
                <a href="https://factoriaf5.org/">
                  <button
                    className="btn-description fs-5 fw-bold bg-gradient"
                    type="button"
                  >
                    <i
                      className="fa-regular fa-clock p-2"
                      style={{ color: "#747475" }}
                    ></i>
                    Schedule
                  </button>
                </a>
                <a href="https://factoriaf5.org/">
                  <button
                    className="btn-description fs-5 fw-bold bg-gradient"
                    type="button"
                  >
                    <i
                      className="fa-solid fa-list p-2"
                      style={{ color: "#747475" }}
                    ></i>
                    Tracking
                  </button>
                </a>
                <a href="https://factoriaf5.org/">
                  <button
                    className="btn-description fs-5 fw-bold bg-gradient"
                    type="button"
                  >
                    <i
                      className="fa-solid fa-calendar-days p-2"
                      style={{ color: "#747475" }}
                    ></i>
                    Organize
                  </button>
                </a>
              </div>

              <div className="description-container-text">
                <p className="fs-6 fw-semibold">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  tempore numquam laboriosam harum cumque odit hic, vel
                  praesentium totam pariatur?
                </p>
                <ul className="list-group-style">
                  <li className="fs-6 fw-semibold">
                    <i
                      className="fa-regular fa-square-check"
                      style={{ color: "#18c389" }}
                    ></i>
                    An item
                  </li>
                  <li className="fs-6 fw-semibold">
                    <i
                      className="fa-regular fa-square-check"
                      style={{ color: "#18c389" }}
                    ></i>
                    A second item
                  </li>
                  <li className="fs-6 fw-semibold">
                    <i
                      className="fa-regular fa-square-check"
                      style={{ color: "#18c389" }}
                    ></i>
                    A third item
                  </li>
                  <li className="fs-6 fw-semibold">
                    <i
                      className="fa-regular fa-square-check"
                      style={{ color: "#18c389" }}
                    ></i>
                    A fourth item
                  </li>
                  <li className="fs-6 fw-semibold">
                    <i
                      className="fa-regular fa-square-check"
                      style={{ color: "#18c389" }}
                    ></i>
                    And a fifth one
                  </li>
                </ul>
                <div className="description-buttons-container">
                  <a href="https://factoriaf5.org/">
                    <button
                      className="btn btn-danger rounded-pill description-container-buttons-bottom  m-2 fw-bold fs-5 bg-gradient"
                      type="button"
                    >
                      TERMS
                    </button>
                  </a>
                  <a href="https://factoriaf5.org/">
                    <button
                      className="btn btn-outline-dark rounded-pill description-container-buttons-bottom fw-bold fs-5 bg-gradient"
                      type="button"
                    >
                      PRIVACY
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="description-container-section-right">
              <img
                src="../src/assets/img/description-2-app.png"
                className="description-container-content-img"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Description;
