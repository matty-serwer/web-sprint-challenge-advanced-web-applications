import React, { useState, useEffect } from "react";
import Bubbles from "./Bubbles";
import ColorList from "./ColorList";
import BubbleForm from "./BubbleForm";

import axiosWithAuth from "./../utils/axiosWithAuth";
import { fetchColorList } from "./../api/fetchColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property
  const getColorListData = () => {
    fetchColorList()
      .then((req => {
        setColorList(req.data);
      }))
      .catch(err => {
        console.log(err);
      })
  }

  const postColor = (color) => {
    axiosWithAuth()
    .post('/colors', color)
    .then(req => {
      setColorList(req.data)
    })
    .catch(err => {
      console.log(err);
    })
  }

  useEffect(() => {
    getColorListData();
  }, [])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} getList={getColorListData}/>
      <Bubbles colors={colorList} />
      <BubbleForm postColor={postColor} />
    </>
  );
};

export default BubblePage;
