
import { FC } from 'react';
import { Link } from 'react-router-dom';

const Header: FC = () => {
  return (
    <header className="flex items-center justify-between w-full py-6 px-4 md:px-8">
      <div className="flex items-center">
        <Link to="/" className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-gradient-primary flex items-center justify-center">
            <span className="text-white font-bold text-xl">M</span>
          </div>
          <h1 className="ml-3 text-xl font-bold">Moodtunes</h1>
        </Link>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <Link to="/how-it-works" className="text-muted-foreground hover:text-primary transition-colors">
              How it works
            </Link>
          </li>
          <li>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
