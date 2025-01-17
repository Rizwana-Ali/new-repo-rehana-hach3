import Card from "./components/card";
import Products from "./components/products";
import ShowMore from "./components/showmore";
import Furniture from "./components/furniture";
import Image from 'next/image';


export default function Home(){
  return(
      <div>
          <div className="bg-[#F5F5F5]">
  {/* Right side */}
  <Image
    src="/frontimage.png"
    width={1330}
    height={802}
    alt="hero image"
    className="w-full h-auto max-w-[1440px] max-h-[500px] mx-auto"
  />

  <div>
    <Image
      src="/Group 114.png"
      width={500}
      height={343}
      alt="graph"
      className=" mt-5 w-[90%] max-w-[500px] h-auto absolute right-5 sm:right-10 md:right-20 lg:right-32 xl:right-40 top-10 sm:top-14 md:top-20"
    />
  </div>
</div>
          <Card/>
          <Products/>
          {/* <div>
            <a 
           href="/shop">
          <button className="bg-[#B88E2F] flex justify-center font-bold px-10 py-2 mt-4 text-white  ">
                    Show More
                </button></a>
                </div> */}
              <div>
             <a href="/shop">
           <button className="border border-[#B88E2F]  p-2 w-[10%] ml-32 mt-10 ">
            <span className="pl-3 text-[#B88E2F]  ">Show More</span></button></a>
            </div>

          <ShowMore/>
          
          <Furniture/>
          
        
      </div>
  )
}
Home();
