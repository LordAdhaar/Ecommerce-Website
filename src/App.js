import './App.css';
import { Link } from 'react-router-dom';

export default function App(props) {
  return (
    <div className="App">
      <div className="AppContent">
        <div className="heading">
          <h3>Get your anime fix with our merch !</h3>
        </div>
        <div className="content">
          <p>Are you a fan of anime and looking for the perfect way to express your love for your favourite characters ? Look no further than our Anime Merchandise Store !</p>
        </div>
        <div className="CTA">
          <Link to="/Products">
            <button>Shop Now &nbsp; ≧◡≦</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}
