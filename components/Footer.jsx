export default function Footer() {
  return (
    <footer className="bg-yellow-400 py-16 px-6">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-green-700 rounded-lg flex items-center justify-center">
                <i className="fas fa-leaf text-white text-xl"></i>
              </div>
              <span className="text-gray-900 text-2xl font-bold">valerian</span>
            </div>

            <p className="text-gray-800 mb-6">There are many variations of passages...</p>

            <div className="flex gap-3">
              {["facebook-f", "twitter", "instagram", "linkedin-in"].map((icon, i) => (
                <a key={i} className="w-10 h-10 bg-green-700 rounded-full flex items-center justify-center hover:bg-green-800 transition">
                  <i className={`fab fa-${icon} text-white`}></i>
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-6">Explore</h3>
            <ul className="space-y-3">
              {["About Us","Our Services","Our Projects","Latest News","Contact Us"].map((item,i)=>(
                <li key={i}><a className="text-gray-800 hover:text-green-700">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Privacy Policy","Terms & Conditions","Support","FAQ","Careers"].map((item,i)=>(
                <li key={i}><a className="text-gray-800 hover:text-green-700">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-xl text-gray-900 mb-6">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <i className="fas fa-map-marker-alt text-green-700 mt-1"></i>
                <span>123 Street, City</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-phone text-green-700 mt-1"></i>
                <span>+1 234 567 8900</span>
              </li>
              <li className="flex items-start gap-3">
                <i className="fas fa-envelope text-green-700 mt-1"></i>
                <span>info@valerian.com</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-8 border-t border-gray-700/20 flex justify-between items-center">
          <p className="text-gray-800 text-sm">
            © 2024 valerian. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a className="text-gray-800 hover:text-green-700 text-sm">Privacy Policy</a>
            <a className="text-gray-800 hover:text-green-700 text-sm">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
