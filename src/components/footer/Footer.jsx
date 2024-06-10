const Footer = () => {
  return (
    <footer className="bg-peach text-black ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-6 p-6">
        <div>
          <h3 className="font-semibold mb-2">Menu</h3>
          <ul>
            <li>Article</li>
            <li>Videos</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Contact Us</h3>
          <p>Email: blog@mail.com</p>
          <p>Phone: +1 234 567</p>
          <div className="flex space-x-4 mt-4">
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-800">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-6 text-gray-700 bg-lightPeach p-4">
        <p>&copy; Copyright by Andri Anggoro</p>
      </div>
    </footer>
  );
};

export default Footer;
