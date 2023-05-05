import legacy from '../img/legacy-logo.png'
import aboutus_splash from '../img/about_us_image.png'
import lineart1 from '../img/lineart1.png'
import steamIcon from '../img/steamIcon.png'
import youtubeIcon from '../img/youtubeIcon.png'
import discordIcon from '../img/discordIcon.png'
import lineart2 from '../img/lineart2.png'
import bg_dark_2 from '../img/bg_dark_2.png'

import harrison from '../img/linkedInProfilePic.jpg'
import bas from '../img/bas-profile.jpg'

import emailIcon from '../img/emailIcon.png'
import linkedInIcon from '../img/linkedInIcon.png'


function Contact() {

  // Who are we?
  // Links
  //  steam
  //  email (How to contact)
  //  Discord (How to contact)
  //  youtube
  //  twitter
  return (
    <span className="home-content">
      <div className='splash-img'>
        <img className='hidden-bg' src={aboutus_splash} alt="splash-legacy" />

        <div className='splash-title'>
          <h1>Meet The Team</h1>
        </div>
      </div>

      <div className='body3'>
        <div className='line-main'>
          <div className= 'hor-line'>
            <img className= 'main-line-img' src={lineart1} alt="lineart1"/>
          </div>
        </div>

        <div className= 'aboutus-body'>
          <h3> Our Story </h3>

          <div className= 'team-desc'>
            <p2> Welcome to Happy Viking Studios! We are a 2-person game development
            team based in the vibrant city of Los Angeles.
            With a passion for creating unique and engaging games,
            we have been in the game development industry for over 4 years and have
            worked on multiple projects.
            </p2>
            <p2>Our journey began with a shared love for video games and a desire to
            create something truly special. With our combined skills and expertise,
            we have successfully developed and released several games that have
            captivated audiences around the world.
            </p2>
            <p2>As a small indie studio, we take great pride in our ability to deliver
            high-quality games that are both entertaining and innovative. We believe
            that every game should be an immersive experience that takes players
            on a journey they will never forget.
            </p2>
          </div>

          <div className= 'pic-parent-4'>
            <div className= 'profile-outline'>
              <img className= 'profile-img' src={harrison} alt="voronoi2"/>
              <h2> Harrison </h2>
              <p1> Co-Founder and Frontend developer </p1>
              <div className= 'profile-desc'>
                <p3> Hi there! I’m Harrison, and I am a computer science
                major at Santa Clara University with an emphasis in complexity
                and algorithms. I am proficient in several programming languages
                including C/C++, C#, Python, Ruby, Java, Scala, HTML, JavaScript,
                and CSS. I have also developed projects using Unity Engine, React,
                and Rails. I am familiar with Git & Github, AJAX, and Steamworks SDK.
                </p3>
              </div>
            </div>

            <div className= 'profile-outline'>
              <img className= 'profile-img' src={bas} alt="llyod"/>
              <h2> Bas </h2>
              <p1> Co-Founder and Backend developer </p1>
            </div>



          </div>


        </div>

        <div className='line-2'>

            <div className= 'hor-line-left'>
              <img className= 'second-line-img-flip' src={lineart2} alt="lineart2"/>
            </div>



            <img className= 'steam-img' src={steamIcon} alt="steamIcon"/>
            <img className= 'youtube-img' src={youtubeIcon} alt="youtubeIcon"/>
            <img className= 'discord-img' src={discordIcon} alt="discordIcon"/>

            <div className= 'hor-line-right'>
              <img className= 'second-line-img' src={lineart2} alt="lineart2"/>
            </div>


        </div>

      </div>


      <div className='body2'>
      </div>







    </span>
  );
}

export default Contact;
