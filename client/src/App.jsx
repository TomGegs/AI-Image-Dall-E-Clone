import React from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo } from "./assets";
import { logoText } from "./assets";
import { Home, CreatePost } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 py-5 border-b border-b-[#e6ebf4]">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="float-left w-max rounded-full hover:animate-spin"
          />
          <img src={logoText} alt="logoText" className="flex w-25 z-0" />
        </Link>
        <Link
          to="/create-post"
          className="font-inter font-medium bg-[#0DBCDB] text-white px-6 py-2 rounded-md hover:bg-[#0B8A9F]">
          Create
        </Link>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
