import './css/Header.css'


function Header() {
    return (
        <div className="epic-game-page">
        <div className="content">
          <h1>Epic Games : An American Video Game And Software Developer <br/>And Publisher Based In Cary, North Carolina.</h1>
          <img
            src="Banner.jpg"    
            alt="Epic Game"
            className="game-image"
          />
          <p>Create, play, and battle with friends for free in Fortnite. Be the last player standing in Battle Royale and Zero Build, experience a concert or live event, or discover over a million creator made games, including racing, parkour, zombie survival, and more. Each Fortnite island has an individual age rating so you can find the one that's right for you and your friends. Find it all in Fortnite ... Drop In.</p>
          <button className="visit-website-button">
          <span className="button-text">Visit Website</span>
          </button>
          <button className="rotate-button">
            <img src="close.png" alt="Button Image" />
        </button>
        </div>
      </div>
    )
  }
  
  export default Header