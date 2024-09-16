import React from 'react'
import './Sidebar.css'
import Home from '../../Assets/home.png'
import Game_icon from '../../Assets/game_icon.png'
import AutoMobiles from '../../Assets/automobiles.png'
import Sports from '../../Assets/sports.png'
import Entertainment from '../../Assets/entertainment.png'
import Tech from '../../Assets/tech.png'
import Music from '../../Assets/music.png'
import Blogs from '../../Assets/blogs.png'
import news from '../../Assets/news.png'
import Jack from '../../Assets/jack.png'
import Simon from '../../Assets/simon.png'
import Tom from '../../Assets/tom.png'
import Megan from '../../Assets/megan.png'
import Cameron from '../../Assets/cameron.png'

const Sidebar = ({sidebar,category,setCategory}) => {
  return (
    <div className={`sidebar ${sidebar?"":"small-sidebar"}`}>
      < div className='shortcut-links'>
          <div className={`side-link ${category===0?"active":""}`} onClick={()=>setCategory(0)} >
             <img src={Home} alt=""/><p>Home</p>
          </div>
          <div className={`side-link ${category===20?"active":""}`} onClick={()=>setCategory(20)} >
             <img src={Game_icon} alt=""/><p>Gaming</p>
          </div>
          <div className={`side-link ${category===2?"active":""}`} onClick={()=>setCategory(2)} >
             <img src={AutoMobiles} alt=""/><p>AutoMobiles</p>
          </div>
          <div className={`side-link ${category===17?"active":""}`} onClick={()=>setCategory(17)} >
             <img src={Sports} alt=""/><p>Sports</p>
          </div>
          <div className={`side-link ${category===24?"active":""}`} onClick={()=>setCategory(24)} >
             <img src={Entertainment} alt=""/><p>Entertainment</p>
          </div>
          <div className={`side-link ${category===28?"active":""}`} onClick={()=>setCategory(28)} >
             <img src={Tech} alt=""/><p>Tech</p>
          </div>
          <div className={`side-link ${category===10?"active":""}`} onClick={()=>setCategory(10)} >
             <img src={Music} alt=""/><p>Music</p>
          </div>
          <div className={`side-link ${category===22?"active":""}`} onClick={()=>setCategory(22)} >
             <img src={Blogs} alt=""/><p>Blogs</p>
          </div>
          <div className={`side-link ${category===25?"active":""}`} onClick={()=>setCategory(25)} >
             <img src={news} alt=""/><p>News</p>
          </div>
          <hr/>
      </div>
       <div className='subscribed-list'>
        <h3>Subscribed</h3>
        <div className= 'side-link'>
             <img src={Jack} alt=""/> <p>PewDiePie</p>
        </div>
        <div className= 'side-link'>
             <img src={Simon} alt=""/> <p>MrBeast</p>
        </div>
        <div className= 'side-link'>
             <img src={Tom} alt=""/> <p>Justin Bieber</p>
        </div>
        <div className= 'side-link'>
             <img src={Megan} alt=""/> <p>5-MinuteCrafts</p>
        </div>
        <div className= 'side-link'>
             <img src={Cameron} alt=""/> <p>Nas Daily</p>
        </div>

       </div>
    </div>
  )
}

export default Sidebar
