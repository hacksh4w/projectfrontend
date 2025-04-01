const Footer = () => {
    return (
      <footer className="bg-gray-900 text-white py-6 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Company Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">WoodID</h3>
            <p className="text-sm text-gray-400">
              Your reliable partner for wood species identification and analysis.
            </p>
          </div>
          
          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Navigation</h3>
            <ul className="text-sm text-gray-400">
              <li className="mb-1"><a href="#" className="hover:text-gray-200">Home</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-200">About</a></li>
              <li className="mb-1"><a href="#" className="hover:text-gray-200">Upload</a></li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <h3 className="text-lg font-semibold mb-2 text-gray-100">Contact Us</h3>
            <p className="text-sm text-gray-400">
              123 Main Street, City, Country
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Email: <a href="mailto:info@example.com" className="hover:text-gray-200">info@example.com</a>
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Phone: <a href="tel:+1234567890" className="hover:text-gray-200">+1 234 567 890</a>
            </p>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="text-center text-sm text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} WoodID. All rights reserved.
        </div>
      </footer>
    );
  };
  
  export default Footer;
  