import React from "react";

export default function CopyrightBar() {
  return (
    <footer className="bg-dark text-light py-2">
      <div className="container text-center copyrightBar">
        <p className="mb-0 py-1">
          &copy; {new Date().getFullYear()} D&D Creatings. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
