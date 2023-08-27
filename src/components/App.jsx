import React from "react";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import "./App.css";
import Home from "./Home/Home"
import About from "./About/About";
import MyWork from "./MyWork/MyWork";
import Skill from "./Skill/Skill";
import Contact from "./Contact/Contact";
import Layout from "./Layout"


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<Layout />}>
            <Route index element = {<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/skill" element={<Skill />}/>
            <Route path="/mywork" element={<MyWork />}/>
            <Route path="/contact" element={<Contact />}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}