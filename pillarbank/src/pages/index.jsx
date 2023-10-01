'use client'
import React, {useEffect} from "react";
import MyCarousel from "../components/Carousell/Carousell";

export default function HomePage() {
    useEffect(() =>{
        sessionStorage.clear()
    },[])
  return (
    <>
      <MyCarousel />
    </>
  );
}