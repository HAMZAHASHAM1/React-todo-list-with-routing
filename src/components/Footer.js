import React from "react";

export const Footer = () => {
  let styleFooter = {
    position: "relative",
    top: "70vh",
    width: "100%",
    border: "solid-red",
  };
  return (
    <>
      <footer className="bg-dark text-light py-3" style={styleFooter}>
        <p className="text-center">Copyrights &copy; todoslist.com</p>
      </footer>
    </>
  );
};
