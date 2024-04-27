function Navbar() {
  return (
    <header className="bg-gray-900 py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-xl font-bold">Bookist</div>
        <nav className="flex items-center space-x-4">
          <a href="#" className="text-gray-400 hover:text-white">
            Services
          </a>
          <a href="#" className="text-gray-400 hover:text-white">
            Clients
          </a>
          <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
            Sign Up
          </button>
          <button className="px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-100">
            Sign In
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
