import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <ul className="flex space-x-4">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/tasks">Tasks</Link></li>
        <li><Link to="/api">API Data</Link></li>
      </ul>
    </nav>
  );
}
