import { NavLink, Link } from 'react-router-dom';

import steamIcon from '../img/steamIcon.png'
import youtubeIcon from '../img/youtubeIcon.png'
import discordIcon from '../img/discordIcon.png'
import lineart2 from '../img/lineart2.png'

function Socials() {
  return (
    <div className='line-2'>

          <div className= 'hor-line-left'>
            <img className= 'second-line-img-flip' src={lineart2} alt="lineart2"/>
          </div>


          <NavLink to='/steam' className="social">
            <img className= '' src={steamIcon} alt="steamIcon"/>
          </NavLink>
          <NavLink to='/youtube' className="social">
            <img className= '' src={youtubeIcon} alt="youtubeIcon"/>
          </NavLink>
          <NavLink to='/discord' className="social">
            <img className= '' src={discordIcon} alt="discordIcon"/>
          </NavLink>
    
          <div className= 'hor-line-right'>
            <img className= 'second-line-img' src={lineart2} alt="lineart2"/>
          </div>


      </div>
  );
}

export default Socials;
