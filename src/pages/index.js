import localFont from "next/font/local";
import BannerCard from "@/components/BannerCard/BannerCard";
import Category from "@/components/category/Category";
import OurProduct from "@/components/ourProduct/OurProduct";
import bannerImage from '../../public/headphone.png';
import productImage1 from '../../public/productImage1.jpg';
import productImage2 from '../../public/productImage2.jpg';
import productImage3 from '../../public/productImage3.jpg';
import productImage4 from '../../public/productImage4.jpg';
import watchImg from '../../public/watchImg.png';
import HighlightProductCard from "@/components/ProductCard/HighlightProductCard";



// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
const categoryData = [
  {
    id:1,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://t3.ftcdn.net/jpg/03/56/90/08/360_F_356900831_EWiOPqcfmIWoTHoXskCt93tA9X3LujHy.jpg',
    small:true
  },
  {
    id:2,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw569b4a62/images/Swatch/collections/2024/plp/d_1920x750_mens_watches.jpg',
    small:true
  },
  {
    id:3,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://media.gettyimages.com/id/641427096/photo/portrait-of-young-woman-in-the-city.jpg?s=612x612&w=gi&k=20&c=Z2mtWUquDtKFC9CPj0dKifpbp-IgkILbVZoZDBbWVao='
  },
]
const categoryData2 = [
  {
    id:1,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://sketchmypic.com/static/images/original.jpg',
    small:true
  },
  {
    id:2,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://media.istockphoto.com/id/1443305526/photo/young-smiling-man-in-headphones-typing-on-laptop-keyboard.jpg?s=1024x1024&w=is&k=20&c=wcaAuEUMIScsLWVfI8bnuFx5zMSA7XzUs8Hcl07YFbo=',
    small:true
  },
  {
    id:3,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://t3.ftcdn.net/jpg/06/29/67/66/360_F_629676676_OiPvDqePlrmhDwMjrnbTAl9NRsCL66bB.jpg'
  },
]
const productData = [
  {
    id:1,
    productName:'Rocky Mountain',
    price:'$20',
    ProductImage:productImage1
  },
  {
    id:2,
    productName:'Boat Headphone',
    price:'$30',
    ProductImage:productImage2
  },
  {
    id:3,
    productName:'Rocky Mountain',
    price:'$20',
    ProductImage:productImage3
  },
  {
    id:4,
    productName:'Boat Headphone',
    price:'$25',
    ProductImage:productImage1
  },
  {
    id:5,
    productName:'Rocky Mountain',
    price:'$20',
    ProductImage:productImage4
  },
  {
    id:6,
    productName:'Boat Headphone',
    price:'$30',
    ProductImage:productImage3
  },
  {
    id:7,
    productName:'Rocky Mountain',
    price:'$20',
    ProductImage:productImage2
  },
  {
    id:8,
    productName:'Boat Headphone',
    price:'$25',
    ProductImage:productImage1
  },
]
const HighlightProductCard1 = {
  subText:'30% off',
  titleText:'FINE SMILE',
  subText2:'10 Jan to 20 Jan',
  image:bannerImage,
  subTextBlod:'Air Solo Bass',
  titleText2:'Winter Sale',
  subText3:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  buttonText:'show now',
  primary:`#f42c37`
 }
const HighlightProductCard2 = {
  subText:'30% off',
  titleText:'Happy Hours',
  subText2:'10 Jan to 20 Jan',
  image:watchImg,
  subTextBlod:'Smart solo',
  titleText2:'Winter Sale',
  subText3:'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eaque reiciendis',
  buttonText:'show now',
  primary:`#2dcc6f`
 }

export default function Home() {
  return (
    < div className="container">
    <div className="my-[50px]"></div>
    <BannerCard bannerImage={bannerImage}/>
    <div className="my-[100px]"></div>
    <Category staticContent={categoryData}/>
    <div className="my-[50px]"></div>
    <Category staticContent={categoryData2} containerClass/>
    <div className="my-[100px]"></div>
    <HighlightProductCard staticContent= {HighlightProductCard1}/>
    <div className="my-[100px]"></div>
    <OurProduct staticContent={productData}/>
    <div className="my-[100px]"></div>
    <HighlightProductCard staticContent= {HighlightProductCard2}/>
    <div className="my-[100px]"></div>
    </div>
  
  );
}
