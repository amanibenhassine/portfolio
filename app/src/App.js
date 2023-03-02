import './App.css';
import img1 from './images/img-1.png';
import img2 from './images/img-2.jpg';
import img3 from './images/img-3.jpg';
import img4 from './images/img-4.jpg';
import img5 from './images/img-5.jpg';
import img6 from './images/img-6.png';
import react from './images/React.png';
import express from './images/Express.png';
import mongodb from './images/Mongodb.png';
import node from './images/Node.png';

function App() {
  return (
    <>
<div className='navbar'>    
        
     <div className='logo'><h3>Amen<span>!</span></h3></div>
     <div> 
      <ul>
        <li><a href='/'> Home </a></li>
        <li><a href='/section'> About</a></li>
        <li><a href='/'> Contact</a></li>
      </ul>
      </div>

    </div>



    <header>
    <div className='item-text'>
      <h3>Hello! I'm </h3>
      <h4>Web <span>Developer</span></h4><br></br>
      <button className='btn '>Download CV</button>
    </div>
    <div className='item-image'>
      <img src={img1} alt='img1' />
    </div>
    </header>


    <section>
     
      <div className='container'>
        <p>As a full-stack developer, I have a comprehensive understanding of both front-end and back-end development. I am comfortable working with programming languages such as HTML, CSS, JavaScript, and have expertise in popular web development frameworks such as React, Angular. I am able to design and implement complex software systems, and have experience working on a variety of projects, including e-commerce platforms and web applications. In addition to my technical skills, I am an effective communicator and problem solver, able to work collaboratively with designers and project managers to deliver high-quality results on time and on budget. I am committed to ongoing learning and professional development, and am excited to continue growing my skills as a full-stack developer.</p>
        
        
        
        </div>
     
    </section>
    <main>
      <div className='wrapper'>
        
        <div className='items-image'>
         <img src={img2} alt='img2'/>
        </div>
        <div className='text'>
          <h2>scrum</h2>
        </div>
    
    </div>
    <div className='wrapper'>
        <div className='text'>
          <h2>Set up the environment</h2>
        </div>
        <div className='items-image'>
         <img src={img3} alt='img3'/>
        </div>
        </div>

   
    <div className='wrapper'>
        <div className='text'>
          <h2>Test the project</h2>
        </div>
        <div className='items-image'>
         <img src={img5} alt='img5'/>
        </div>
        </div>
    
   
    <div className='wrapper'>
        
        <div className='items-image'>
         <img src={img6} alt='img6'/>
        </div>        
        <div className='text'>
          <h2>Deploy the project</h2>
        </div> 
        </div>

        <div className='wrapper'>
         <div className='text'>
          <h2>Monitor and maintain</h2>
        </div>
        <div className='items-image'>
         <img src={img4} alt='img4'/>
        </div>
    </div>
    </main>
    <section>
      <div className='item-card'>
<div className="card" >
  <div className="card-body">
  <img src={react} alt='img1' />
  </div>
  </div>
  

  <div className="card" >
  <div className="card-body">
  <img src={express} alt='express' />
  </div>
  </div>

  <div className="card" >
  <div className="card-body">
  <img src={node} alt='node' />
   </div>
  </div>

  <div className="card" >
  <div className="card-body">
  <img src={mongodb} alt='mongodb' />  
  </div>
</div>
</div>
    </section>
    
    <footer>
      <div className='form'>
      <label for="name">Name:</label>

        <input type='text'></input><br></br>
        <label for="email">Email:</label>

        <input type='text'></input><br></br>
        <button className='btn btn-danger'>Cantact</button>
      </div>
      <div className='cantact'>
        <h6 className='fa fa-email'>Mail</h6><br></br>
        <h6 className='fa fa-adress'>Phone</h6><br></br>
        <h6 className='fa fa-lindin'>LinkedIn</h6><br></br>

      </div>

    </footer>
    
    </>
  );
}

export default App;
