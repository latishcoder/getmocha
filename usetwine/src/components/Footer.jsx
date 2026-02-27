import React from "react";

export default function Footer() {
  return (
    <footer className="relative z-20 bg-[#e9e6df] pt-16 md:pt-24 lg:pt-32 pb-10 md:pb-16">

      <div className="max-w-7xl mx-auto px-5 md:px-6">

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 md:gap-12">

          {/* Logo */}
          <div className="col-span-2 sm:col-span-3 md:col-span-1">
            <img
              className="h-6 md:h-8"
              src="https://static.getmocha.com/logos/mocha_logo_black-full.png"
              alt="Mocha"
            />
          </div>

          {/* Mocha */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-6">Mocha</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <li>Manifesto</li>
              <li>Pricing</li>
              <li>Docs</li>
              <li>Blog</li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-6">Follow us</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <li>Discord</li>
              <li>X (Twitter)</li>
              <li>YouTube</li>
              <li>Instagram</li>
              <li>LinkedIn</li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-6">Resources</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <li>Affiliate Program</li>
              <li>Careers</li>
              <li>Launch Announcement</li>
              <li>Brand Kit</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 md:mb-6">Legal</h4>
            <ul className="space-y-2 md:space-y-3 text-gray-600 text-sm md:text-base">
              <li>Privacy</li>
              <li>Platform Rules</li>
              <li>Terms</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-300 mt-10 md:mt-16 pt-4 md:pt-6 text-gray-500 text-xs md:text-sm text-center md:text-left">
          © Axilla, Inc 2025
        </div>

      </div>

    </footer>
  );
}