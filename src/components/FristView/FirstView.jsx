
import './FirstView.css'

function FirstView() {

  return (
    <div className="fv-container">
     
    <div className="fv-text">
      <div className="fv-img-wrapper">
        <img className="fv-text-img" src="./Portfolio.svg" alt="portfolio" />
        <img className='star-img' src="./star.svg" alt="star" />
      </div>
    </div>
    <div className="info">
    <h1 className="info-title"><span className="info-name">ジィンウィンリー</span>と申します。</h1>
    <h3 className="info-text">日本電子専門学校　Webデザイン科　２年</h3>
      
      <a  href="" className="info-btn">ポートフォリオ PDF</a>
    </div>
    
  </div>
  
  )
}

export default FirstView
