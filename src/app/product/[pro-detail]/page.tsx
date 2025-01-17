"use client"
import Image from "next/image"
import { useParams } from "next/navigation"
interface Iproducts{
    title: string,
    price: string,
    id: number,
    old_price?: string,
    image_url: string,
}

let product:Iproducts[]=[
    {
        title: "Stylish Cafe Chair" ,
        price: "2.500.000",
        id: 1,
        image_url: "/Featured Products1.png", 
        old_price: "3.500.000", 
    },
    {
        title: "Stylish Cafe Chair" ,
        price: "2.500.000",
        id: 2,
        image_url: "/Featured Products (12).png", 
        old_price: "3.500.000", 
    },
    {
        title: "Luxury Big Sofa" ,
        price: "7.000.000",
        id: 3,
        image_url: "/Featured Products (3).png", 
        old_price: "14.000.000", 
    },
    {
        title: "Outdoor bar table and stool" ,
        price: "500.000",
        id: 4,
        image_url: "/Featured Products (4).png", 
         
    }
]

export default function Prodetail(props: {prodetail:string}){
    const params = useParams()
    return(
        <div>
            <h1>pro-detail</h1>
        </div>
    )
}
Prodetail