import legacy from '../img/legacy-logo.png'
import legacySplash from '../img/legacy-splash.png'

function Home() {
  return (
    <span className="home-content">
      <div className='splash-img'>
        <img className='hidden-bg' src={legacySplash} alt="splash-legacy" />
        
        <div className='splash-title'>
          <h2>A MODEST</h2>
          <h1>LEGACY</h1>
        </div>
      </div>
      
      

      
    </span>
  );
}

export default Home;

/*

<div className="info-blurb">
  <section className="blurb">
    <p>Legacy is now out in early access on steam! You can join our
    discord to stay up to date on the latest
    updates!</p>
  </section>
  <iframe
    src="https://store.steampowered.com/widget/1858090/"
    width="600" height="190">
  </iframe>
</div>
<iframe
  width="1024" height="576"
  src="https://www.youtube.com/embed/xTy1GrrcGRQ">
</iframe>

<br /><br />
Welcome to Legacy, a medieval, real time
strategy game. Here you will use city
building and combat tactics to conquer your
enemies in hopes to be the last kingdom
standing. Good luck!</p>

<img src={legacy} alt="banner" />
*/
