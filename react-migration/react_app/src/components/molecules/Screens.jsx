import ButtonIcon from "../atoms/ButtonIcon"

function Screens() {
  return (
    <section id="screens">
      <div className="container-screens" id="article-details">
        <div className="container-circles-bottom">
          <div className="container-left-white-circle">
            <div className="container-white-circle-left-bottom">
              <img src="../src/assets/figures/decorative-yellow-circle.svg" className="yellow-circle"/>
            </div>
          </div>
          <div className="container-img-phone">
            <img src="../src/assets/img/download-iphone.png" alt="Logo" className="hithere"/>
          </div>
          <div>
            <img className="green-diamond" src="../src/assets/figures/decorative-green-diamond.svg" alt="green diamond" width="20" height="20"/>
          </div>
          <div className="container-white-circle-right-bottom">
            <div className="container-blue-circle">
              <img src="../src/assets/figures/decorative-blue-circle.svg" className="blue-circle-bottom"/>
            </div>
          </div>
        </div>
        <p className="container-paragraph fs-4">In Bootstrap 3, a jumbotron was introduced as a large, padded
          box for highlighting special content or information. Now, jumbotrons does not supported by Bootstrap 5
          version. We can achieve the same result with an element, special helper classNamees, and a color className.
        </p>
        <div className="buttons-container">
        <ButtonIcon></ButtonIcon>
      </div>
      </div>
    </section>
  )
}

export default Screens