import Features from "./components/features/Feature";
import HomePage from "./components/homepage/HomePage";

import Navbar from "./components/navbar/Navbar";
import Pricing from "./components/pricing/Pricing";

export default function Home() {
  return (
    <div className=" relative flex flex-col w-[75%] ">
      <Navbar />
      <HomePage />
      <Features />
      <Pricing />
    </div>
  );
}
