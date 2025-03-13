import React from "react";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal flex flex-col footer-center bg-[#ECF0F3] text-gray-600 mt-16 p-4">
      <hr className="border border-gray-300 w-full" />
      <aside>
        <p className="pb-10 pt-6">
          Copyright © {new Date().getFullYear()} - All right reserved by Sowrov
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
