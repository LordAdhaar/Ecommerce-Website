import './App.css';
import { Link } from 'react-router-dom';

export default function App(props) {
  return (
    <div className="App">
      <div className="AppContent">
        <div className="heading">
          <h3>Your waifu is waiting for you !</h3>
        </div>
        <div className="content">
          <p>uWu! Senpai, you are finally here. Buy my body pillows and skirt Senpai! Show me how much you care about me. I have been waiting for you for a long long time.</p>
        </div>
        <div className="CTA">
          <Link to="/Products">
            <button>Buy my skirt &nbsp; ≧◡≦</button>
          </Link>
        </div>
      </div>
      
    </div>
  );
}

