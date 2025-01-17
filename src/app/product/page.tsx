import Image from "next/image"
import { FaStar } from "react-icons/fa6";
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
let star = [<FaStar />,<FaStar />,<FaStar />,<FaStar />,<FaStar />]

export default function Product(){
    return(
        <div>
            {
                product.map((data)=>{
                    return(
                        <div>
                            <div className="w-[230px] h-[230px] bg-[#f0eeed] rounded-[20px]">
                                <Image src={data.image_url} alt={data.title} className="w-full h-full rounded-[20px]" width={100} height={100}></Image>
                                </div>
                                <div>
                              <p className="text-lg mt-2 font-bold">{data.title} </p>
                               <p className="flex text-yellow-400">{star}</p> 
                               <p>{data.price} <span className="text-gray-400 font-bold line-through">{data.old_price}</span></p>   
                                    </div>
                            </div>
                    )
                })
                
            }
        </div>
        
    )
}