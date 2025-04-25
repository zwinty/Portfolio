
import './FirstView.css'

function FirstView() {

  return (
    <div className="fv-container">
      <div className="nav-container">
        <div className="nav-items">
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Project</a></li>
            <li><a href="">Contact</a></li>

          </ul>
        </div>
      </div>
    <div className="fv-text">
      <div className="fv-img-wrapper">
        <img className="fv-text-img" src="./Portfolio.svg" alt="portfolio" />
        <img className='star-img' src="./star.svg" alt="star" />

      </div>
    </div>
    <div className="info"></div>
  </div>
  
  )
}

export default FirstView
