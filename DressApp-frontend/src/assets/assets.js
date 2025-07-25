import logo from "../assets/logo_img.png"
import { CiSearch }  from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import { IoBagOutline } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
import { RiArrowDropRightLine } from "react-icons/ri";
import { RiExchangeFundsFill } from "react-icons/ri";
import { TbTruckReturn } from "react-icons/tb";
import { RiCustomerServiceFill } from "react-icons/ri";
import { BsFillStarFill } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FaStripe } from "react-icons/fa";
import { SiRazorpay } from "react-icons/si";
import hero_img from "../assets/hero_img.jpg"
import about_img from "../assets/about_img.jpg"
import contact_img from "../assets/contact_img.jpg"

import p_img1 from "../assets/product_1.jpg";
import p_img2_1 from "../assets/p_img2_1.jpg";
import p_img2_2 from "../assets/p_img2_2.jpg";
import p_img2_3 from "../assets/p_img2_3.jpg";
import p_img2_4 from "../assets/p_img2_4.jpg";
import p_img3 from "../assets/product_19.jpg";
import p_img4 from "../assets/product_11.jpeg";
import p_img5 from "../assets/product_2.jpg";
import p_img6 from "../assets/product_20.jpg";
import p_img7 from "../assets/product_3.jpg";
import p_img8 from "../assets/product_12.jpg";
import p_img9 from "../assets/product_21.jpg";
import p_img10 from "../assets/product_13.jpg";
import p_img11 from "../assets/product_22.jpg";
import p_img12 from "../assets/product_4.jpg";
import p_img13 from "../assets/product_23.jpg";
import p_img14 from "../assets/product_14.jpeg";
import p_img15 from "../assets/product_n5.png";
import p_img16 from "../assets/product_15.jpg";
import p_img17 from "../assets/product_24.jpg";
import p_img18 from "../assets/product_n6.png";
import p_img19 from "../assets/product_25.jpg";
import p_img20 from "../assets/product_n7.png";
import p_img21 from "../assets/product_16.jpg";
import p_img22 from "../assets/product_n8.jpg";
import p_img23 from "../assets/product_17.jpg";
import p_img24 from "../assets/product_26.jpg";
import p_img25 from "../assets/product_9.png";
import p_img26 from "../assets/product_18.jpg";
import p_img27 from "../assets/product_27.jpg";
import p_img28 from "../assets/White-Cotton-Handloom-Men-Pant-p_img28.jpg";
import p_img29 from "../assets/women-cotton-pant-p_img29.jpg";
import p_img30 from "../assets/Dark-Gray-Black-Cotton-Handloom-Stripe-Men-Pant-p_img30.jpg";
import p_img31 from "../assets/women-bottom-wear-p_img31.jpg";
import p_img32 from "../assets/kid-bottom-pant-boy-p_img32.jpg";
import p_img33 from "../assets/kids_bottomwear_by_technosportindia-p_img33jpg.jpg";
import p_img34 from "../assets/AND-GIRL-BOTTOM-FW22AK801BTDNM-WINE--p_img34(3).jpg";
import p_img35 from "../assets/girl-kid-lower-p_img35.jpg";
import p_img36 from "../assets/winter-waer-men-p_img36.jpg";
import p_img37 from "../assets/kid-winter-wear-p_img37.jpg";
import p_img38 from "../assets/women-winter-wear-p_img38.jpg";
import p_img39 from "../assets/women-winter-wear-p_img39.jpg";
import p_img40 from "../assets/men-bottom-wear-pant-p_img40.jpg";
import p_img41 from "../assets/women-winter-wear-p_img41.jpg";
import p_img42 from "../assets/kid-winter-wear-p_img42.jpg";
import p_img43 from "../assets/kid-winter-wear-p_img43.jpg";
import p_img44 from "../assets/men-winter-wear-p_img44.jpg";

export const assets = {
      logo,
      search_icon: CiSearch,
      profile_icon: CgProfile,
      cart_icon: IoBagOutline,
      menu_icon: BiMenuAltRight,
      dropdown_icon: RiArrowDropRightLine,
      hero_img,
      about_img,
      contact_img,
      exchange_icon: RiExchangeFundsFill,
      return_icon: TbTruckReturn,
      customer_Support_icon: RiCustomerServiceFill,
      star_icon: BsFillStarFill,
      bin_icon: RiDeleteBin6Line,
      stripe_logo: FaStripe,
      SiRazorpay


}

export const products = [
    {
        _id: "aaaaa",
        name: "Women Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pillover shirt, close-fitting and with",
        price: 100,
        image : [p_img1],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: false
    },
    {
        _id: "aaaab",
        name: "Men Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and comfortable",
        price: 150,
        image : [p_img2_1,p_img2_2,p_img2_3,p_img2_4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaac",
        name: "Men kid shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 200,
        image : [p_img3],
        category: "kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaad",
        name: "Men Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 250,
        image : [p_img4],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaae",
        name: "Women Round Neck Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 300,
        image : [p_img5],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaaf",
        name: "Men Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 350,
        image : [p_img6],
        category: "kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaag",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 400,
        image : [p_img7],
        category: "women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaah",
        name: "Men shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 450,
        image : [p_img8],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaai",
        name: "Men Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 500,
        image : [p_img9],
        category: "kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaaj",
        name: "Men shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 510,
        image : [p_img10],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaak",
        name: "Men kid Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 520,
        image : [p_img11],
        category: "Kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaal",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 530,
        image : [p_img12],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: false
    },
    {
        _id: "aaaam",
        name: "Men kid Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 540,
        image : [p_img13],
        category: "Kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaan",
        name: "Men Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 550,
        image : [p_img14],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaao",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 560,
        image : [p_img15],
        category: "women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaap",
        name: "Men Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 570,
        image : [p_img16],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaaq",
        name: "Men kid Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 580,
        image : [p_img17],
        category: "Kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaar",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 600,
        image : [p_img18],
        category: "women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaas",
        name: "girl kid Round Neck Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 610,
        image : [p_img19],
        category: "kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaat",
        name: "Women Round Neck Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 620,
        image : [p_img20],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaau",
        name: "Men Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 630,
        image : [p_img21],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaav",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 640,
        image : [p_img22],
        category: "Women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaaw",
        name: "Men Round Neck Pure Cotton shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 650,
        image : [p_img23],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaax",
        name: "kid girl Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 660,
        image : [p_img24],
        category: "Kid",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaay",
        name: "Women Round Neck Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 670,
        image : [p_img25],
        category: "women",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaaz",
        name: "Men Pure Cotton T-shirt",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 680,
        image : [p_img26],
        category: "Men",
        subCategory: "Topwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaaba",
        name: "kid girl Round Neck Cotton Top",
        description: "A lightweight, usually knitted, pillover shirt, close-fitting and with",
        price: 690,
        image : [p_img27],
        category: "kid",
        subCategory: "Topwear",
        sizes: ["S", "M", "L"],
        date: 1716634345448,
        bestseller: true
    },
    {
        _id: "aaabb",
        name: "Men-bottom wear cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 700,
        image : [p_img28],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabc",
        name: "Women-bottom wear cotton jean pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 710,
        image : [p_img29],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabd",
        name: "Men-bottom wear cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 720,
        image : [p_img30],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabe",
        name: "Women-bottom wear jean pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 730,
        image : [p_img31],
        category: "Women",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabf",
        name: "kid-bottom wear cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 740,
        image : [p_img32],
        category: "Kid",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabg",
        name: "kid-bottom wear lower cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 750,
        image : [p_img33],
        category: "Kid",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabh",
        name: "kid-bottom wear cotton-smart pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 760,
        image : [p_img34],
        category: "Kid",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabi",
        name: "kid-bottom wear half-cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 770,
        image : [p_img35],
        category: "Kid",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabj",
        name: "Men-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 780,
        image : [p_img36],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabk",
        name: "kid-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 790,
        image : [p_img37],
        category: "Kid",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabl",
        name: "women-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 800,
        image : [p_img38],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabm",
        name: "Women-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 810,
        image : [p_img39],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabn",
        name: "Men-bottom wear cotton pant",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 820,
        image : [p_img40],
        category: "Men",
        subCategory: "Bottomwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabo",
        name: "Women-winter wear cotton clouth dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 830,
        image : [p_img41],
        category: "Women",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabp",
        name: "kid-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 840,
        image : [p_img42],
        category: "Kid",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabq",
        name: "kid-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 850,
        image : [p_img43],
        category: "Kid",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    {
        _id: "aaabr",
        name: "Men-winter wear cotton dress",
        description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
        price: 860,
        image : [p_img44],
        category: "Men",
        subCategory: "Winterwear",
        sizes: ["M", "L", "XL"],
        date: 1716621345448,
        bestseller: true
    },
    // {
    //     _id: "aaabs",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img45],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabt",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img46],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabu",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img47],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabv",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img48],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabw",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img49],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabx",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img50],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaaby",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img51],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
    // {
    //     _id: "aaabz",
    //     name: "Women Round Neck Pure Cotton T-shirt",
    //     description: "A lightweight, usually knitted, pullover shirt, close-fitting and with",
    //     price: 220,
    //     image : [p_img52],
    //     category: "Men",
    //     subCategory: "Topwear",
    //     sizes: ["M", "L", "XL"],
    //     date: 1716621345448,
    //     bestseller: true
    // },
]
