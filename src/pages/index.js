import localFont from "next/font/local";
import BannerCard from "@/components/BannerCard/BannerCard";
import Category from "@/components/category/Category";
import bannerImage from '../../public/headphone.png'

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
    imageUrl:'https://sketchmypic.com/static/images/original.jpg',
    small:true
  },
  {
    id:2,
    title:'Product Name',
    description:'Use the backdrop-blur-* utilities to control an element’s backdrop blur.',
    imageUrl:'https://www.shutterstock.com/image-photo/young-happy-cool-woman-she-260nw-2357714761.jpg',
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

export default function Home() {
  return (
    < div className="container">
    <BannerCard data={bannerImage}/>
    <div className="my-[50px]"></div>
    <Category staticContent={categoryData}/>
    <div className="my-[50px]"></div>
    <Category staticContent={categoryData2} containerClass/>
    <div className="my-[50px]"></div>
    </div>
  
  );
}
