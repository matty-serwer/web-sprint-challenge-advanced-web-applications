import React, { useState, useEffect } from "react";
import axios from "axios";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import axiosWithAuth from "./../utils/axiosWithAuth";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColorListData = () => {
    axiosWithAuth().get('/colors')
      .then((req => {
        setColorList(req.data);
      }))
      .catch(err => {
        console.log(err);
      })
  }


  useEffect(() => {
    getColorListData();
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
