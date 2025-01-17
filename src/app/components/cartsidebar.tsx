
import Image from "next/image"

import React from 'react';

// const CartSidebar = () => {
//   return (
//     <div className="fixed top-0 right-0 w-96 h- bg-white shadow-lg overflow-y-auto">
//       <div className="p-6 border-b">
//         <h2 className="text-2xl font-bold">Shopping Cart</h2>
//       </div>

//       {/* Cart Items */}
//       <div className="p-6">
//         <div className="flex items-center justify-between mb-4">
//           <div>
//           <Image src={"/Group 146.png"} width={108} height={105} alt="sidebar image" />
          
//           </div>
//           <div>
//           <p className="font-medium">Asgaard Sofa</p>
//           <p className="text-gray-600 text-sm">1 x <span className="text-[#B88E2F]"> Rs. 250,000.00</span></p>
          
//           </div>
//         </div>

//         <div className="flex items-center justify-between mb-4">
//           <div>
//             <Image src={"/Group 146 (1).png"} width={108} height={105} alt="sidebar image" />
//           </div> 
//           <div>
//           <p className="font-medium">Casaliving Wood</p>
//           <p className="text-gray-600 text-sm">1 x <span className="text-[#B88E2F]">Rs. 270,000.00</span></p>
          
          
//           </div>
//         </div>
//       </div>

//       {/* Subtotal */}

//         <div className="flex justify-between mb-4">
//           <span className="font-medium ml-8">Subtotal</span>
//           <span className="font-bold mr-8 text-[#B88E2F]">Rs. 520,000.00</span>
//         </div>
//       <div className="p-6 border-t">

//         <div className="flex gap-6">
//          <div className="border border-gray-400 rounded-full p-1 px-6 ">
//          <a href="/cart">Cart</a></div>
         
//          <div className="border border-gray-400 rounded-full p-2  ">
//          <a href="/check-out">Check out</a> </div>
         
//          <div className="border border-gray-400 rounded-full p-2  ">
//           <a href="/product-comperison">Comperison</a></div>

// </div>
//    </div>
//   </div>
    
  
//   );
// };

// export default CartSidebar;









const CartSidebar = () => {
  return (
    <div className="fixed top-0 right-0 w-full sm:w-96 h-screen bg-white shadow-lg overflow-y-auto transition-transform transform translate-x-0 sm:translate-x-0">
      {/* Header */}
      <div className="p-4 sm:p-6 border-b">
        <h2 className="text-xl sm:text-2xl font-bold">Shopping Cart</h2>
      </div>

      {/* Cart Items */}
      <div className="p-4 sm:p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="w-24">
            <Image
              src="/Group 146.png"
              width={108}
              height={105}
              alt="sidebar image"
              className="w-full h-auto"
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="font-medium text-sm sm:text-base">Asgaard Sofa</p>
            <p className="text-gray-600 text-xs sm:text-sm">
              1 x <span className="text-[#B88E2F]">Rs. 250,000.00</span>
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="w-24">
            <Image
              src="/Group 146 (1).png"
              width={108}
              height={105}
              alt="sidebar image"
              className="w-full h-auto"
            />
          </div>
          <div className="ml-4 flex-1">
            <p className="font-medium text-sm sm:text-base">Casaliving Wood</p>
            <p className="text-gray-600 text-xs sm:text-sm">
              1 x <span className="text-[#B88E2F]">Rs. 270,000.00</span>
            </p>
          </div>
        </div>
      </div>

      {/* Subtotal */}
      <div className="p-4 sm:p-6 border-t border-b">
        <div className="flex justify-between">
          <span className="font-medium text-sm sm:text-base">Subtotal</span>
          <span className="font-bold text-[#B88E2F] text-sm sm:text-base">
            Rs. 520,000.00
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="p-4 sm:p-6">
        <div className="flex flex-wrap gap-4">
          <div className="border border-gray-400 rounded-full p-2 px-4">
            <a href="/cart" className="text-sm sm:text-base">
              Cart
            </a>
          </div>
          <div className="border border-gray-400 rounded-full p-2 px-4">
            <a href="/check-out" className="text-sm sm:text-base">
              Check out
            </a>
          </div>
          <div className="border border-gray-400 rounded-full p-2 px-4">
            <a href="/product-comparison" className="text-sm sm:text-base">
              Comparison
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartSidebar;
