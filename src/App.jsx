import React, { useEffect, useState } from 'react';
import Navbar from "./Comoponents/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Comoponents/Home';
import Saved from './Comoponents/Saved';

const App = () => {
  const [images, setImages] = useState([])
  const [search, setSearch] = useState("peacock")
  const [Loader, setLoader] = useState(true)
  const [saved, setsaved] = useState([])


  const API_KEY = "uYqW2o5zxEk7RAnvtSVDUQ28QMe1qyiJcr5qk1zSnUNaHHhJkF4ATiup";

  useEffect(() => {
    const fetchImage = async () => {
      const res = await axios.get(
        `https://api.pexels.com/v1/search?query=${search}&per_page=80`,
        {
          headers: {
            Authorization: API_KEY,
          },
        }
      );
      // console.log("response from api = ", res.data.photos);
      setImages(res.data.photos)
      setLoader(false)
      console.log(images);

    }

    const data = JSON.parse(localStorage.getItem("Images"))
    fetchImage();
  }, [search]);


  //check local storage data 
  useEffect(() => {
    if (saved.length != 0) {
      const json = JSON.stringify(saved)
      localStorage.setItem("images", json)
    }
  }, [saved])


  console.log("image is saved", saved);

  return (
    <Router>
      <Navbar setsearch={setSearch} />
      <Routes>
        <Route path='/' element={<Home images={images}
          loader={Loader}
          saved={saved}
          setsaved={setsaved} />} />
        <Route path='/saved' element={<Saved saved={saved} loader={Loader} />} />
      </Routes>
    </Router>
  );
}


export default App;
