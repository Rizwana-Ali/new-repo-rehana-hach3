import Image from "next/image"
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";






// export default function Cart(){
//     return( 
//         <div>
//         <div>
//             <Image src={"/Group 78 (6).png"}
//              width={1440}
//               height={360} 
//               alt="cart image"/>
//                 <div  className="flex mt-10 justify-around">
//               <div className="flex gap-20 justify-center items-center text-2xl p-5 w-[900px] h-[55px] ml-20 bg-[#F9F1E7]">
//                 <h4>Product</h4>
//                 <h4>Price</h4>
//                 <h4>Quantity</h4>
//                 <h4>Subtotal</h4>

 
//                 </div>

                


//                 <div className="bg-[#F9F1E7] w-[280px] h-[280px] justify-items-center pt-5  ">
//                     <h1>Cart Totals</h1>
                    
//                     <p className="py-6">Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9F9F9F]">Rs. 250,000.00</span> </p>
//                     <p>Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B88E2F]"> Rs. 250,000.00</span> </p>
                    
                    
//   <div className="border border-gray-400 rounded-md p-2 px-8 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300">
    
//     <a href="/check-out">Check out</a>
   
//   </div>

 
// </div>
//     </div>
//     <div className="flex gap-10 ml-44">
//      <Image src={"/Group 146.png"} 
//     width={108}
//      height={105} 
//      alt="cart image"/>

//      <h1>Asgaard sofa</h1>
//      <h1>Rs. 250,000.00</h1>
//      <h1>1</h1>
//      <h1>Rs. 250,000.00</h1>
//       <div><Image src={"/ant-design_delete-filled.png"} width={28} height={28} alt="trash"/></div> 
//   </div>

//         </div>
//         <div className="flex bg-[#F6F1E7] w-[1340px] h-[100px] mt-20 gap-20 ">
//             <span><SlTrophy className="w-[50px] h-[50px] pt-3" /></span>
//             <div>
//             <h2>High Quality</h2>
//             <p>Crafted from top materials</p>
//             </div>

//             <span><SiTicktick  className="w-[50px] h-[50px] pt-3" /></span>
//             <div>
//             <h2>Warenty Protection </h2>
//             <p>Over 2 years</p>
//             </div>

//             <span>
//             <Image
//                 src="/shipping.png" 
//                 alt="Blog 2"
//                 width={60}
//                 height={60}
//               className="pt-3"
//               /></span>
//             <div>
//             <h2>Free Shipping</h2>
//             <p>Order Over 150 $</p>
//             </div>

//             <span>
//             <Image
//                 src="/customer-support.png" 
//                 alt="Blog 3"
//                 width={60}
//                 height={60}
//                 className="pt-3"
//               /></span>
//             <div>
//             <h2>24/7 Support</h2>
//             <p>Dedicated support</p>
//             </div>

//         </div>

        
//         </div>
//     )}
//   Cart();




export default function Cart() {
  return (
      <div>
          <div>
              <Image
                  src={"/Group 78 (6).png"}
                  width={1200}
                  height={360}
                  alt="cart image"
                  className="w-full h-auto"
              />
              <div className="flex flex-col md:flex-row mt-10 justify-around gap-5">
                  <div className="flex flex-col md:flex-row gap-5 md:gap-20 justify-center items-center text-xl md:text-2xl p-2 w-full md:w-[900px] h-auto bg-[#F9F1E7]">
                      <h4>Product</h4>
                      <h4>Price</h4>
                      <h4>Quantity</h4>
                      <h4>Subtotal</h4>
                  </div>

                  <div className="bg-[#F9F1E7] w-full md:w-[280px] h-auto p-5 md:pt-5 text-center">
                      <h1 className="text-lg md:text-xl font-bold">Cart Totals</h1>
                      <p className="py-4">
                          Subtotal
                          <span className="text-[#9F9F9F]"> Rs. 250,000.00</span>
                      </p>
                      <p className="py-4">
                          Total
                          <span className="text-[#B88E2F]"> Rs. 250,000.00</span>
                      </p>
                      <div className="border border-gray-400 rounded-md p-2 px-8 mt-5 shadow-sm hover:shadow-md transition-shadow duration-300">
                          <a href="/check-out" className="text-sm md:text-base">
                              Check out
                          </a>
                      </div>
                  </div>
              </div>

              <div className="flex flex-col md:flex-row gap-5 md:gap-10 mt-10 ml-60 md:ml-44">
                  <div>
                      <Image
                          src={"/Group 146.png"}
                          width={108}
                          height={105}
                          alt="cart image"
                          className="w-[80px] md:w-[108px]"
                      />
                  </div>
                  <h1 className="text-sm md:text-base">Asgaard sofa</h1>
                  <h1 className="text-sm md:text-base">Rs. 250,000.00</h1>
                  <h1 className="text-sm md:text-base">1</h1>
                  <h1 className="text-sm md:text-base">Rs. 250,000.00</h1>
                  <div>
                      <Image
                          src={"/ant-design_delete-filled.png"}
                          width={28}
                          height={28}
                          alt="trash"
                          className="w-[20px] md:w-[28px]"
                      />
                  </div>
              </div>
          </div>

          <div className="flex flex-col ml-2  md:flex-row bg-[#F6F1E7] w-full md:w-[1340px] h-auto mt-20 gap-10 md:gap-20 p-5 md:p-0">
              <div className="flex items-center gap-3">
                  <SlTrophy className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]" />
                  <div>
                      <h2 className="text-sm md:text-base font-bold">High Quality</h2>
                      <p className="text-xs md:text-sm">Crafted from top materials</p>
                  </div>
              </div>

              <div className="flex items-center gap-3">
                  <SiTicktick className="w-[40px] md:w-[50px] h-[40px] md:h-[50px]" />
                  <div>
                      <h2 className="text-sm md:text-base font-bold">
                          Warranty Protection
                      </h2>
                      <p className="text-xs md:text-sm">Over 2 years</p>
                  </div>
              </div>

              <div className="flex items-center gap-3">
                  <Image
                      src="/shipping.png"
                      alt="shipping"
                      width={40}
                      height={40}
                      className="w-[40px] md:w-[60px]"
                  />
                  <div>
                      <h2 className="text-sm md:text-base font-bold">Free Shipping</h2>
                      <p className="text-xs md:text-sm">Order Over 150 $</p>
                  </div>
              </div>

              <div className="flex items-center gap-3">
                  <Image
                      src="/customer-support.png"
                      alt="customer support"
                      width={40}
                      height={40}
                      className="w-[40px] md:w-[60px]"
                  />
                  <div>
                      <h2 className="text-sm md:text-base font-bold">24/7 Support</h2>
                      <p className="text-xs md:text-sm">Dedicated support</p>
                  </div>
              </div>
          </div>
      </div>
  );
}
