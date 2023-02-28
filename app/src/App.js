import './App.css';

function App() {
  return (
    <>
<div className='navbar'>    
        
     <div><h1>Amen<span>!</span></h1></div>
     <div> 
      <ul>
        <li><a href='/'> Home </a></li>
        <li><a href='/'> About</a></li>
        <li><a href='/'> Contact</a></li>
      </ul>
      </div>

    </div>



    <header>
    <div className='item-text'>
      <h2>THE bEST</h2> 
      <button className='btn btn-info'>Cantact</button>
    </div>
    <div className='item-image'>
      <img src='#'></img>
    </div>
    </header>
    <section>
    <div className='title'><h2>My Projects</h2> </div>
      <div className='container'>
        <div className='card'>
          <div className='card-img'>
            <img src='/'></img>
          </div>
          <h3>Project ReactJs</h3>
        </div>
    
      <div className='card'>
          <div className='card-img'>
            <img src='/'></img>
          </div>
          <h3>Project ReactJs</h3>
        </div>
    
      <div className='card'>
          <div className='card-img'>
            <img src='/'></img>
          </div>
          <h3>Project ReactJs</h3>
        </div>
     
      </div>
    </section>
    
    <footer>


    </footer>
    
    </>
  );
}

export default App;
