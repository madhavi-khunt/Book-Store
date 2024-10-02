// import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from "./assets/pages/Home";
import DeleteBooks from "./assets/pages/DeleteBooks";
import CreateBooks from "./assets/pages/CreateBooks";
import EditBooks from "./assets/pages/ShowBooks";
import ShowBooks from "./assets/pages/ShowBooks";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/books/create" element={<CreateBooks></CreateBooks>}></Route>
      <Route path="/books/details/:id" element={<ShowBooks />}></Route>
      <Route path="/books/edit/:id" element={<EditBooks></EditBooks>}></Route>
      <Route
        path="/books/delete/:id"
        element={<DeleteBooks></DeleteBooks>}
      ></Route>
    </Routes>
  );
}

export default App;
