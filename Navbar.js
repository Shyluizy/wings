

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/products">Product Management</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;