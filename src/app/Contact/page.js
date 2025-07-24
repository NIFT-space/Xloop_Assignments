import { FaFacebookF, FaTwitter, FaLinkedinIn, FaEnvelope, FaPhone } from 'react-icons/fa';

export default function Contactus(){
    return(
        <>
   <h1 className="bg-red-300 text-center p-5 text-2xl font-bold mb-4"><b>Contact Us</b></h1>
        

    <div className="p-8 max-w-2xl mx-auto bg-white rounded shadow-md mt-6">

      <div className="space-y-4 text-gray-700">
        <div className="flex items-center space-x-3">
          <FaEnvelope className="text-blue-600" />
          <span>Email: contact@jaffali.com</span>
        </div>

        <div className="flex items-center space-x-3">
          <FaPhone className="text-green-600" />
          <span>Phone: +92 300 1234567</span>
        </div>

        <div className="flex items-center space-x-3">
          <span>Address: Office #123, Clifton, Karachi, Pakistan</span>
        </div>
      </div>

      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Follow Us</h2>
        <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" className="text-blue-600 hover:text-blue-800">
            <FaFacebookF size={24} />
          </a>
          <a href="https://twitter.com" target="_blank" className="text-blue-400 hover:text-blue-600">
            <FaTwitter size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" className="text-blue-700 hover:text-blue-900">
            <FaLinkedinIn size={24} />
          </a>
        </div>
      </div>
    </div>

        </>
    );
}