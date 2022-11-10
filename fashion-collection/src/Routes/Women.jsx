import "../Style/Women.css"
import TenPercentOff from "../Components/TenPercentOff";
import StraightDiv from "./Common Components/StraightDiv";
import OppositeDiv from "./Common Components/OppositeDiv";
import Crawsale from "./Common Components/Crawsale";
import Category from "./Common Components/Category";
import Brand from "./Common Components/Brand";
import FQ_About from "./Common Components/FQ_About";

function Women() {
  // Crawsale item----------------------------------
  const crawsale = [
    {
      img:"https://cdn-images.farfetch-contents.com/19/10/05/61/19100561_42312996_600.jpg",
      seasion:"New Season",
      brand:"Gucci",
      name:"GG-jacquard knitted vest",
      price:"$ 920",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/09/66/14/19096614_42303148_600.jpg",
      seasion:"New Season",
      brand:"Gucci",
      name:"GG logo-plaque shoulder bag",
      price:"$ 2100",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/18/74/40/63/18744063_42276872_600.jpg",
      seasion:"New Season",
      brand:"Valentino Garavani",
      name:"Tan-Go 165mm platform pumps",
      price:"$ 2207",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/27/74/50/19277450_42390050_600.jpg",
      seasion:"Mugler",
      brand:"x Wolford semi-sheer panelled",
      name:"minidress",
      price:"$ 881",
    }
  ]

  // Category---------------------------------------
  const category = [
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3991024/data/7f859c5eaab84fa9bb83cb08dfedb11b/3x4_three-columns/480/data.jpeg",
      name:"HIGH-GLAMOUR GIFTS",
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983242/data/0b59538b9f90211cb3edae4dc2552fac/3x4_three-columns/480/data.jpeg",
      name:"100 ICONIC BAGS",
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3983292/data/3d0599e29225d4f3e25b07dbbf2068ac/3x4_three-columns/480/data.jpeg",
      name:"FINE JEWELRY & WATCHES",
    }
  ]

  // Trending Gifts---------------------------------
  const trending = [
    {
      img:"https://cdn-images.farfetch-contents.com/18/58/26/18/18582618_40851734_600.jpg",
      brand:"Prada",
      name:"small brushed tote bag",
      price:"$ 4490",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/13/15/01/28/13150128_30475816_600.jpg",
      brand:"Manolo Blahnik",
      name:"blue Hangisi 70 silk satin leather pumps",
      price:"$ 2328",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/14/57/76/98/14577698_29297010_600.jpg",
      brand:"Anissa Kermiche",
      name:"Love Handles vase (33cm)",
      price:"$ 646",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/17/60/96/70/17609670_37668600_600.jpg",
      brand:"Saint Laurent",
      name:"logo-plaque quilted AirPods case",
      price:"$ 645",
    },
  ]

  // Brand------------------------------------------
  const brand =[
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044252/data/75fd01a82411e80fb15bf39c2a2731ef/3x4_three-columns/480/data.jpeg",
      name:"PRADA",
      brand:"This way for editor-approved staples"
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044236/data/069e896d63bd97edb90022ef805a09d6/3x4_three-columns/480/data.jpeg",
      name:"AREA",
      brand:"The modern party dress code"
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4044256/data/dc522e252961decd6ebe97f315f3cddc/3x4_three-columns/480/data.jpeg",
      name:"ACNE STUDIOS",
      brand:"Strong outerwear and statement accessories"
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
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4016468/data/b0fbcd99aac1f3ef2f6552360e3f93cc/1x1_messaging-side/576/data.jpeg"
            heading="22% OFF YOUR NEW WARDROBE"
            para="For a limited time only, you can shop the world's most iconic brands with 22% off. Offer available on selected full-price items"
            button="Shop Now"
          />
          <OppositeDiv
            heading="Dancefloor ready: the hottest party shoes"
            para="Statement boots, power platforms and trending mules — unbox this season’s best styles"
            button="Shop Now"
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4043494/data/58e1561d985820f6ff52f3b45e321414/1x1_messaging-side/637/data.jpeg"
          />
          <Crawsale 
            topHead="New in: handpicked daily from the world's best brands and boutiques"
            props={crawsale}
          />
          <OppositeDiv
            image="https://cdn-images.farfetch-contents.com/18/33/04/38/18330438_40766274_480.jpg"
            heading="The Art Of Gifting"
            para="For a limited time only, you can shop the world's most iconic brands with 22% off. Offer available on selected full-price items"
            button="Shop Now"
          />
          <Category 
            topHead="Shop gifts by category"
            props={category}
          />
          <Crawsale 
            topHead="Discover: trending gifts"
            props={trending}
          />
          <Brand
            topHead="Shop gifts by brand"
            props={brand}
          />
          <FQ_About
            props={fq_about}
          />

        </div>
          <TenPercentOff />
      </div>
    );
  }
  
  export default Women;
  