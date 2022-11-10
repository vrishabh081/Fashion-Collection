import "../Style/Women.css"
import TenPercentOff from "../Components/TenPercentOff";
import StraightDiv from "./Common Components/StraightDiv";
import OppositeDiv from "./Common Components/OppositeDiv";
import Crawsale from "./Common Components/Crawsale";
import Category from "./Common Components/Category";
import Brand from "./Common Components/Brand";
import FQ_About from "./Common Components/FQ_About";

function Men() {
  // Crawsale item----------------------------------
  const crawsale = [
    {
      img:"https://cdn-images.farfetch-contents.com/19/27/83/98/19278398_42357243_600.jpg",
      seasion:"New Season",
      brand:"VTMNTS",
      name:"Barcode-print drawstring-fastening hoodie",
      price:"$ 1104",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/01/45/56/19014556_41510652_600.jpg",
      seasion:"New Season",
      brand:"Philipp Plein",
      name:"The $kull quartz 47mm",
      price:"$ 685",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/27/19/35/19271935_42320708_600.jpg",
      seasion:"New Season",
      brand:"Prada",
      name:"Tapered wool trousers",
      price:"$ 2207",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/13/76/97/19137697_42269836_600.jpg",
      seasion:"New Season",
      brand:"Jil Sander",
      name:"Logo-plaque leather boots",
      price:"$ 3813",
    }
  ]

  // Category---------------------------------------
  const category = [
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994250/data/d3e4fad9935619d4ec115e26efee9777/3x4_three-columns/480/data.jpeg",
      name:"CLASSIC GIFTS",
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3982722/data/79e434c40461462c303e26b85707e95f/3x4_three-columns/480/data.jpeg",
      name:"WATCHES & JEWELRY",
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3994310/data/a4643e0d498e0be675bff5e935602428/3x4_three-columns/480/data.jpeg",
      name:"SMALL LEATHER GOODS",
    }
  ]

  // Trending Gifts---------------------------------
  const trending = [
    {
      img:"https://cdn-images.farfetch-contents.com/18/34/30/11/18343011_42222448_600.jpg",
      brand:"Visvim",
      name:"Logo-patch wool beanie hit",
      price:"$ 330",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/19/18/58/17/19185817_42152229_600.jpg",
      brand:"Mastermind Japan",
      name:"Skull-motif tote bag",
      price:"$ 1483",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/17/99/37/26/17993726_38415070_600.jpg",
      brand:"AMI Paris",
      name:"Ami de Coeur roll-neck jumper",
      price:"$ 570",
    },
    {
      img:"https://cdn-images.farfetch-contents.com/18/61/17/80/18611780_41705359_600.jpg",
      brand:"Dolce & Gabbana",
      name:"NS1 low-top sneakers",
      price:"$ 925",
    },
  ]

  // Brand------------------------------------------
  const brand =[
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4045222/data/f170262be2a9fd86e41352dd183999d7/3x4_three-columns/480/data.jpeg",
      name:"MARNI",
      brand:"From standout tracksuits to cult mules"
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4021314/data/b408abd8fb7df99cc4c71860676bad4b/3x4_three-columns/480/data.jpeg",
      name:"BURBERRY",
      brand:"Iconic outerwear to love forever"
    },
    {
      img:"https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4045244/data/2311d20e46955aced501907eed70d936/3x4_three-columns/480/data.jpeg",
      name:"VERSACE",
      brand:"We’ve got fresh prints"
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
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4017102/data/b271794d1e368cacbb73b7fdd1fb3251/1x1_messaging-side/936/data.jpeg"
            heading="22% OFF YOUR NEW WARDROBE"
            para="For a limited time only, you can shop the world's most iconic brands with 22% off. Offer available on selected full-price items"
            button="Shop Now"
          />
          <OppositeDiv
            heading="Dancefloor ready: the hottest party shoes"
            para="Trending sneakers, modern cowboy boots and chunky loafers - unbox this season's best styles"
            button="Shop Now"
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/4021286/data/09dd53d817985fd9a785d00daf840413/1x1_messaging-side/936/data.jpeg"
          />
          <Crawsale 
            topHead="New in: handpicked daily from the world's best brands and boutiques"
            props={crawsale}
          />
          <OppositeDiv
            heading="THE TRIPLE STITCH SNEAKERS"
            para="Trending sneakers, modern cowboy boots and chunky loafers - unbox this season's best styles"
            button="Shop Now"
            image="https://cdn-static.farfetch-contents.com/cms-cm10/caas/v1/media/3954094/data/38be8fc7e035a1d343e9472e3b4f5836/3x4_messaging-side/936/data.jpeg"
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
  
  export default Men;
  