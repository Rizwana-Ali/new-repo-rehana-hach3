
import link from "next/link";
import Image from "next/image";

export default function Shop() {
    return (
        <div>
            {/* Hero Section */}
            <div>
                <Image
                    src="/shop1.png"
                    width={1440}
                    height={360}
                    alt="furniture image"
                    className="w-full h-auto"
                />
                {/* <button>Add To Cart</button> */}
                <Image
                    src="/Group 63.png"
                    width={1340}
                    height={100}
                    alt="furniture image"
                    className="w-full h-auto mt-4"
                />
            </div>

            {/* Product Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-12 px-4 md:px-10">
                {/* First Row */}
                <a href="singleproduct1"><Image
                    src="/Featured Products1.png"
                    width={381}
                    height={480}
                    alt="img1"
                    className="w-full h-auto"

                /></a>
                
                <a href="singleproduct2">
                <Image
                    src="/Featured Products2.png"
                    width={381}
                    height={480}
                    alt="img2"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct3">
                <Image
                    src="/Featured Products (3).png"
                    width={381}
                    height={480}
                    alt="img3"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct4">
                <Image
                    src="/Featured Products (4).png"
                    width={381}
                    height={480}
                    alt="img4"
                    className="w-full h-auto"
                /></a>

                {/* Second Row */}
                <a href="singleproduct1">
                <Image
                    src="/Featured Products1.png"
                    width={381}
                    height={480}
                    alt="img5"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct2">
                <Image
                    src="/Featured Products (12).png"
                    width={381}
                    height={480}
                    alt="img6"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct3">
                <Image
                    src="/Featured Products (3).png"
                    width={381}
                    height={480}
                    alt="img7"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct4">
                <Image
                    src="/Featured Products (4).png"
                    width={381}
                    height={480}
                    alt="img8"
                    className="w-full h-auto"
                /></a>

                {/* Third Row */}
                <a href="singleproduct1">
                <Image
                    src="/Featured Products1.png"
                    width={381}
                    height={480}
                    alt="img9"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct2">
                <Image
                    src="/Featured Products (12).png"
                    width={381}
                    height={480}
                    alt="img10"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct3">
                <Image
                    src="/Featured Products (3).png"
                    width={381}
                    height={480}
                    alt="img11"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct4">
                <Image
                    src="/Featured Products (4).png"
                    width={381}
                    height={480}
                    alt="img12"
                    className="w-full h-auto"
                /></a>

                {/* Fourth Row */}
                <a href="singleproduct1">
                <Image
                    src="/Featured Products1.png"
                    width={381}
                    height={480}
                    alt="img13"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct2">
                <Image
                    src="/Featured Products (12).png"
                    width={381}
                    height={480}
                    alt="img14"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct3">
                <Image
                    src="/Featured Products (3).png"
                    width={381}
                    height={480}
                    alt="img15"
                    className="w-full h-auto"
                /></a>
                <a href="singleproduct4">
                <Image
                    src="/Featured Products (4).png"
                    width={381}
                    height={480}
                    alt="img16"
                    className="w-full h-auto"
                /></a>
            </div>

            <div className="flex gap-10 justify-center items-center text-center  mt-10 ">

             <a href="/singleproduct" className=" w-[40px] h-[40px] bg-[#B88E2F]">1</a>
              <a href="/product-comperison" className="w-[40px] h-[40px] bg-[#F9F1E7]">2</a>
              <a href="/sidebar" className="w-[40px] h-[40px] bg-[#F9F1E7]">3</a>
              
             <div className="w-[40px] h-[40px] bg-[#F9F1E7]">Next</div>
              </div>
           <hr className="mt-10" />
        </div>
    );
}
Shop();































































































































































































































































