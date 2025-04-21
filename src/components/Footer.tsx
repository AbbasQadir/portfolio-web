// components/Footer.tsx
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center">
          <p className="text-white text-sm">
            © {currentYear} Abbas Qadir. All rights reserved.
            
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;