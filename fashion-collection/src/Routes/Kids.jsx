import "../Style/Women.css"
import TenPercentOff from "../Components/TenPercentOff";
import StraightDiv from "./Common Components/StraightDiv";
import OppositeDiv from "./Common Components/OppositeDiv";
import Crawsale from "./Common Components/Crawsale";
import Category from "./Common Components/Category";
import Brand from "./Common Components/Brand";
import FQ_About from "./Common Components/FQ_About";

function Kids() {
  
  // Brand1------------------------------------------
  const brand1 =[
      {
        img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043648/data/1854da13b97d9f9f2ee33e04602b1ad0/1x1_three-columns/480/data.jpeg",
        name:"BABY",
        brand:"Changing bags and all that goes in them"
      },
      {
        img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043640/data/22d5f8bbd60b17a2ddef26af592c9a3e/1x1_three-columns/480/data.jpeg",
        name:"KIDS",
        brand:"Transeasonal layers, sets and sneakers"
      },
      {
        img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043768/data/55f23536573b21f0ab1e473bd417696f/1x1_three-columns/480/data.jpeg",
        name:"TEENS",
        brand:"From snow boots to tracksuits"
      },
  ]
  // Brand1------------------------------------------
  const brand2 =[
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043632/data/408cce5d413a5f76d7b494b62b9099fa/1x1_two-columns/624/data.jpeg",
      name:"THE SNEAKER EDIT",
      brand:"Hype styles including Off-White’s Out of Office sneakers"
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043654/data/4d1dd317a138e838f0cc51a0e24fc7c2/1x1_two-columns/624/data.jpeg",
      name:"ALL THE ACCESSORIES",
      brand:"Fluffy hats, logo bags and more for the new season"
    },
  ]
  // Trending Gifts---------------------------------
  const trending = [
      {
        img:"https://cdn-images.farfetch-contents.com/19/20/69/39/19206939_42132621_600.jpg",
        brand:"Moncler Enfant",
        name:"Ribbed-knit pompom beanie",
        price:"$ 269",
      },
      {
        img:"https://cdn-images.farfetch-contents.com/17/91/92/21/17919221_41558238_600.jpg",
        brand:"Kenzo Kids",
        name:"Sleep Well babygrow set",
        price:"$ 273",
      },
      {
        img:"https://cdn-images.farfetch-contents.com/17/91/15/32/17911532_42281091_600.jpg",
        brand:"Chloé Kids",
        name:"faux-shearling collared coat",
        price:"$ 520",
      },
      {
        img:"https://cdn-images.farfetch-contents.com/19/09/69/30/19096930_42156134_600.jpg",
        brand:"Balmain Kids",
        name:"logo-intarsia beanie hat",
        price:"$ 205",
      },
  ]
  // F&Q About--------------------------------------
  const fq_about=[
    {
      icon:"person-outline",
      name:"HOW TO SHOP",
      title:"Your guide to shopping and placing orders",
    },
    {
      icon:"help-circle-outline",
      name:"HOW TO SHOP",
      title:"Your questions answered",
    },
    {
      icon:"chatbox-outline",
      name:"NEED HELP ?",
      title:"Contact our global Customer Service team",
    }
  ]


  // Return Statement-------------------------------
    return (
      <div id="WomenDiv">
        <div id="WomenChildDiv">
          <StraightDiv 
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4017588/data/fa961ebd5069236c16161c665f5a5ede/1x1_messaging-side/936/data.jpeg"
            heading="22% OFF YOUR NEW WARDROBE"
            para="For a limited time only, you can shop the world's most iconic brands with 22% off. Offer available on selected full-price items"
            button="Shop Now"
          />
          <OppositeDiv
            heading="Dress for the occasion"
            para="Party dresses, mini-me suits and coordinating accessories by Balmain, Versace and more"
            button="Shop Now"
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043736/data/754b1e35814e5bfeb9d4fc05af703173/1x1_messaging-side/936/data.jpeg"
          />
          <Brand
            topHead="Shop gifts by brand"
            props={brand1}
          />
          <Brand
            props={brand2}
          />
          <Crawsale 
            topHead="Trending now: our most-wanted gifts"
            props={trending}
          />
          <FQ_About
            props={fq_about}
          />

        </div>
          <TenPercentOff />
      </div>
    );
  }
  
  export default Kids;
  