function cardsContainer() {
  return (
    <div className="container-cards">

    <div className="container-cards-row">

      <div className="container-card">
        <div className="container-card-header">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa-solid fa-star fa-2x" style={{ color: '#ffaa11' }}></i>
          ))}
        </div>
        <div className="container-card-text">
          <p className="fs-4 fst-italic"> Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <h5 className="container-card-name fw-bold fs-3">Light card title</h5>
        </div>
      </div>
      <div className="container-card">
        <div className="container-card-header">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa-solid fa-star fa-2x" style={{ color: '#ffaa11' }}></i>
          ))}
        </div>
        <div className="container-card-text">
          <p className="fs-4 fst-italic"> Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <h5 className="container-card-name fw-bold fs-3">Light card title</h5>
        </div>
      </div>
      <div className="container-card">
        <div className="container-card-header">
          {[...Array(5)].map((_, index) => (
            <i key={index} className="fa-solid fa-star fa-2x" style={{ color: '#ffaa11' }}></i>
          ))}
        </div>
        <div className="container-card-text">
          <p className="fs-4 fst-italic"> Some quick example text to build on the card title and make up the bulk of the cards content.</p>
          <h5 className="container-card-name fw-bold fs-3">Light card title</h5>
        </div>
      </div>
  
    </div>
  </div>
  )
}

export default cardsContainer