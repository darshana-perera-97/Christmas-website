import React from "react";
import NavBar from "../Components/NavBar";
import MainBanner from "../Components/MainBanner";
import Wish from "../Layouts/Wish";
import WishYou from "../Layouts/WishYou";
import Calneder from "../Layouts/Calneder";
import Counter from "../Components/Counter";
import Connect from "../Layouts/Connect";
import CopyrightBar from "../Components/CopyrightBar";

export default function Home() {
  return (
    <div>
      <MainBanner />
      <Wish />
      <WishYou />
      <Calneder />
      <Counter />
      <Connect />
      <CopyrightBar />
    </div>
  );
}
