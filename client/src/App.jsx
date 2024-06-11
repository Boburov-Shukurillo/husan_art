import React, { useEffect, useState } from "react";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import Detail from "./pages/Detail";
import Creations from "./pages/Creations";
import Contact from "./pages/Contact";
import BackendPage from "./pages/BackendPage";
import AdminPanel from "./pages/AdminPanel";
import CrudForm from "./pages/CrudForm";
import axios from "axios";

const App = () => {


  const [search, setSearch] = useState('')
  const route = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout setSearch={setSearch} search={search} />}>
        <Route index element={<Home search={search} />} />
        <Route path='/back' element={<BackendPage search={search} />} />
        <Route path="/*" element={<PageNotFound />} />
        <Route path="/art/:id" element={<Detail search={search} />} />
        <Route path="/creations" element={<Creations search={search} />} />
        <Route path="/contact" element={<Contact search={search} />} />
        <Route path="/adminPanel" element={<AdminPanel />} />
        <Route path="/newPage" element={<CrudForm />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={route} />
  );
};

export default App;
