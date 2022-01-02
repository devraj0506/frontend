import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [toggle,setToggle] = useState(false);

  const toggleClick=()=>{
    setToggle(!toggle);
    console.log(toggle);
  }


  const clickAnywhere=()=>{
    if(toggle==true){
      setToggle(false);
    }
  }
  

  return (
    <div className="App" onClick={clickAnywhere}>
      
      <div>
  <header className={toggle?'navlist':'hide'}>
    <div className="user">
      <img src="yuvrajphoto.jpg" alt="" />
      <h3 className="name">Yuvraj Singh</h3>
      <p className="post">Computer Science student</p>
    </div>
    <nav className="navbar">
      <ul>
        <li><a href="#home">home</a></li>
        <li><a href="#about">about</a></li>
        <li><a href="#skill">Skill</a></li>
        <li><a href="#education">experience</a></li>
        <li><a href="#portfolio">certificate</a></li>
        <li><a href="#contact">contact</a></li>
      </ul>
    </nav>
  </header>
  

  {/* header section ends */}
  <div id="menu" className="fas fa-bars" />
  {/* home section starts  */}
  <div className="body-cont">
    


  <div className="burger" onClick={toggleClick}>
    <div className="line" ></div>
    <div className="line" ></div>
    <div className="line" ></div>
  </div>




    <section className="home" id="home">
      <h3>HI THERE !</h3>
      <h1>I'M <span>Yuvraj Singh</span></h1>
      <p> I am fresher and have no work experience in any company. My strength is that I can adapt quickly to any environment.
        My short-term goal is to get placed in a reputed company like yours, which will allow me to enhance my skills and Knowledge. My long term goal would be to reach a higher position in your company. 
      </p>
      <a href="#about"><button className="btn">about me <i className="fas fa-user" /></button></a>
    </section>
    {/* home section ends */}
    {/* about section starts  */}
    <section className="about" id="about">
      <h1 className="heading" > <span>about</span> me </h1>
      <div className="row">
        <div className="info">
          <h3> <span> name : </span> Yuvraj Singh </h3>
          <h3> <span> Currently education : </span> B.tech in computer science and engineering </h3>
          <h3> <span> post : </span> Computer Science student </h3>
          <h3> <span> language : </span> hindi/English </h3>
          <a href="Yuvraj's Resume (3).pdf"><button className="btn"> download Resume <i className="fas fa-download" /> </button></a>
        </div>
        <section className="skill" id="skill">
          <h1 className="heading"> <span>Skills</span> </h1>
          <div className="counter">
            <div className="box">
              <span>★★★★</span>
              <h3>Web Development (front end)</h3>
            </div>
            <div className="box">
              <span>★★★★</span>
              <h3>PYTHON</h3>
            </div>
            <div className="box">
              <span>★★★★</span>
              <h3>SQLs</h3>
            </div>
            <div className="box">
              <span>★★★★</span>
              <h3>UI/UX designing</h3>
            </div>
            <div className="box">
              <span>★★★</span>
              <h3>C++</h3>
            </div>
            <div className="box">
              <span>★★★</span>
              <h3>Data Structures and Algorithms</h3>
            </div>
            <div className="box">
              <span>★★★</span>
              <h3>PHPs</h3>
            </div>
            <div className="box">
              <span>★★</span>
              <h3>Android development(basic)</h3>
            </div>
          </div>
        </section>
      </div>
    </section>
    {/* about section ends */}
    {/* education section starts  */}
    <section className="education" id="education">
      <h1 className="heading"> my <span>experience</span> </h1>
      <div className="box-container">
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>09/2021-present</span>
          <h3>Student coordinator</h3>
          <p>I am glad to share that i am a student coordinator of III-Cell of my college, University Engineering College Bikaner.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>05/2021-present</span>
          <h3>Campus Ambassador</h3>
          <p>I am also a representative of my college as a campus ambassador of Techfest, IIT Bombay.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>10/2021-present</span>
          <h3>Campus Ambassador</h3>
          <p>I am also a representative of my college as a campus ambassador of Ecell,IIT Guwahati.
            In this i am joining various tech and skills related clubs and webinar and playing intersenting games.
          </p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>10/2020-present</span>
          <h3>Class Representative</h3>
          <p>I am a class representative of my branch Computer Science and Engineering of University Engineering College Bikaner.</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>06/2021-present</span>
          <h3>front end development</h3>
          <p>I am also a frontend developer working on a startup starting core</p>
        </div>
        <div className="box">
          <i className="fas fa-graduation-cap" />
          <span>11/2020-present</span>
          <h3>Quora content writer</h3>
          <p>I write questions and answers on Quora platform and I am very grateful to share that, till now i have achieved more than 3.7 Million views on my contents</p>
        </div>
      </div>
    </section>
    {/* education section ends */}
    {/* portfolio section starts  */}
    <section className="portfolio" id="portfolio">
      <h1 className="heading"> my <span>Certificate</span> </h1>
      <div className="box-container">
        <div className="box">
          <img src="yuvrajcs.jpg" alt="" />
        </div>
        <div className="box">
          <img src="yuvrajnit.jpg" alt="" />
        </div>
        <div className="box">
          <img src="yuvrajml.jpg" alt="" />
        </div>
        <div className="box">
          <img src="yuvrajaccent.jpg" alt="" />
        </div>
        <div className="box">
          <img src="yuvrajbombay.jpg" alt="" />
        </div>
        <div className="box">
          <img src="yuvrajecb.jpg" alt="" />
        </div>
      </div>
    </section>
    {/* portfolio section ends */}
    {/* contact section starts  */}
    <section className="contact" id="contact">
      <h1 className="heading"> <span>contact</span> me </h1>
      <div className="row">
        <div className="content">
          <h3 className="title">contact info</h3>
          <div className="info">
            <h3> <i className="fas fa-envelope" /> parmaryuvrajsingh18@gmail.com </h3>
            <h3> <i className="fas fa-phone" /> +91 xxxxxxxx </h3>
            <h3> <a href="Https://Www.Linkedin.Com/In/Yuvraj-Singh-168826204/" style={{color: 'white'}}><i className="fas fa-envelope" /> LinkedIn</a> </h3>
            <h3> <i className="fas fa-map-marker-alt" /> Dholpur, india - 400104. </h3>
          </div>
        </div>
        <form >
          <input type="text" placeholder="name" className="box" />
          <input type="email" placeholder="email" className="box" />
          <textarea cols={30} rows={10} className="box message" placeholder="message" defaultValue={""} />
          <button type="submit" className="btn"> send <i className="fas fa-paper-plane" /> </button>
        </form>
      </div>
    </section>
  </div>
  {/* contact section ends */}
  {/* scroll top button  */}
  <a href="#home" className="top">
    <img src="images/scroll-top-img.png" alt="" />
  </a>
</div>


    </div>
  );
}

export default App;
