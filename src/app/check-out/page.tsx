
import Image from "next/image"
import { SlTrophy } from "react-icons/sl";
import { SiTicktick } from "react-icons/si";



// export default function Checkout() {
//     return(
//         <div>
//        <div>
//         <Image src={"/Group 78 (7).png"} 
//         width={1440}
//          height={360}
//           alt="image"/>
//        </div>


//     <div className=" p-10 min-h-screen flex ">
//       <div className="max-w-2xl mx-auto bg-white shadow-md rounded-lg p-8">
//         <h1 className="text-2xl font-bold ml-20 mb-6">Billing Details</h1>

//         <form>
//           {/* First Name and Last Name */}
//           <div className="flex flex-wrap mb-4 ">
//             <div className="   w-full md:w-1/2 px-3 mb-4 md:mb-0">
//               <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First Name</label>
//               <input type="text" id="first-name" name="first-name" className="mt-1 block w-full border border-gray-300 rounded-md py-4 shadow-sm" />
//             </div>
//             <div className=" w-full md:w-1/2 px-3">
//               <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last Name</label>
//               <input type="text" id="last-name" name="last-name" className="mt-1 block w-full border border-gray-300 rounded-md py-4  shadow-sm " />
//             </div>
//           </div>

//           {/* Company Name */}
//           <div className=" mb-4 px-3">
//             <label htmlFor="company-name" className="block text-sm font-medium text-gray-700">Company Name (optional)</label>
//             <input type="text" id="company-name" name="company-name" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm " />
//           </div>

//           {/* Country/Region */}
//           <div className="mb-4  px-4">
//             <label htmlFor="country" className="block text-sm font-medium text-gray-700">Country/Region</label>
            
//             <select id="country" name="country"  className="mt-1 block w-full border border-gray-300 rounded-md py-3  shadow-sm">
//               <option value="">Sri Lanka</option>
//               <option value="us">United States</option>
//               <option value="ca">Canada</option>
//               <option value="uk">United Kingdom</option>
//             </select>
//           </div>

//           {/* Street Address */}
//           <div className="mb-4 px-4">
//             <label htmlFor="street-address" className="block text-sm font-medium text-gray-700">Street Address</label>
//             <input type="text" id="street-address" name="street-address" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm " />
//           </div>

//           {/* Town/City */}
//           <div className="mb-4  px-4">
//             <label htmlFor="city" className="block text-sm font-medium text-gray-700">Town/City</label>
//             <input type="text" id="city" name="city" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm" />
//           </div>

//           {/* Province */}
//           <div className="mb-4 px-4">
//             <label htmlFor="province" className="block text-sm font-medium text-gray-700">Province</label>
//             <input type="text" id="province" name="province" placeholder="Western Province" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm" />
//           </div>

//           {/* ZIP Code */}
//           <div className="mb-4 px-4">
//             <label htmlFor="zip-code" className="block text-sm font-medium text-gray-700">ZIP Code</label>
//             <input type="text" id="zip-code" name="zip-code" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm" />
//           </div>

//           {/* Phone */}
//           <div className="mb-4 px-4">
//             <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
//             <input type="tel" id="phone" name="phone" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm " />
//           </div>

//           {/* Email Address */}
//           <div className="mb-4  px-4">
//             <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
//             <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm " />
//           </div>

//           {/* Additional Information */}

//           <div className="mb-4  px-4">
//             {/* <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label> */}
//             <input type="text" placeholder="Additional Information" className="mt-1 block w-full border border-gray-300 rounded-md py-3 shadow-sm " />
//           </div>

//    </form>
//       </div>

//       <div className=" w-[320px] h-[280px] justify-items-center pt-20 mr-32   ">
                    
//                     <h1 className="py-3 font-bold ">Product &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-black font-bold">Subtotal</span> </h1>
//                     <p className="py-3">Asgaard sofa x 1&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9F9F9F]">Rs. 250,000.00</span> </p>
                    
//                     <p className="py-3">Subtotal&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#9F9F9F]">Rs. 250,000.00</span> </p>
                   
//                     <p className="ml-10">Total&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span className="text-[#B88E2F] font-bold text-2xl"> Rs. 250,000.00</span> </p>
                     
//                <hr className="text-gray-900 px-44 mt-10"/> 

           
//            <h1 className="mr-44 mt-10">Direct Bank Transfer</h1>
//             <p className="mt-5 text-gray-400">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>
//              <p className="mr-44 mt-5 text-gray-400">Direct Bank Transfer</p>
//             <p className="mr-48 mt-3 text-gray-400">Cash On Delivery</p>
//             <p className="mt-5">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
//   <div className="border border-gray-400 rounded-md p-2 px-8 mt-10 shadow-sm hover:shadow-md transition-shadow duration-300">
//     <a href="/singleproduct">Place Order</a>
//             </div>
//             </div>        
  

      
//     </div>
               

//     <div className="flex bg-[#F6F1E7] w-[1360px] h-[100px] mt-20 gap-20 ml-">
//             <span className="ml-6"><SlTrophy className="w-[50px] h-[50px] pt-3" /></span>
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

//         <hr className="text-gray-900 px-44 mt-10"/> 
            
// </div>
// )}
// Checkout();








export default function Checkout() {
  return (
    <div>
      {/* Header Image */}
      <div className="w-full">
        <Image
          src="/Group 78 (7).png"
          width={1440}
          height={360}
          alt="Header Image"
          className="w-full object-cover"
        />
      </div>

      {/* Main Section */}
      <div className="p-4 sm:p-8 lg:p-10 flex flex-col lg:flex-row min-h-screen gap-8">
        {/* Billing Details */}
        <div className="w-full lg:max-w-2xl mx-auto bg-white shadow-md rounded-lg p-6 sm:p-8">
          <h1 className="text-2xl font-bold text-center lg:text-left mb-6">
            Billing Details
          </h1>

          <form>
            {/* First Name and Last Name */}
            <div className="flex flex-wrap gap-4 mb-4">
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="first-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="first-name"
                  name="first-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div className="w-full md:w-1/2">
                <label
                  htmlFor="last-name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="last-name"
                  name="last-name"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Company Name */}
            <div className="mb-4">
              <label
                htmlFor="company-name"
                className="block text-sm font-medium text-gray-700"
              >
                Company Name (optional)
              </label>
              <input
                type="text"
                id="company-name"
                name="company-name"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>

            {/* Country/Region */}
            <div className="mb-4">
              <label
                htmlFor="country"
                className="block text-sm font-medium text-gray-700"
              >
                Country/Region
              </label>
              <select
                id="country"
                name="country"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              >
                <option value="">Sri Lanka</option>
                <option value="us">United States</option>
                <option value="ca">Canada</option>
                <option value="uk">United Kingdom</option>
              </select>
            </div>

            {/* Address Fields */}
            <div className="space-y-4">
              <div>
                <label
                  htmlFor="street-address"
                  className="block text-sm font-medium text-gray-700"
                >
                  Street Address
                </label>
                <input
                  type="text"
                  id="street-address"
                  name="street-address"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="city"
                  className="block text-sm font-medium text-gray-700"
                >
                  Town/City
                </label>
                <input
                  type="text"
                  id="city"
                  name="city"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="province"
                  className="block text-sm font-medium text-gray-700"
                >
                  Province
                </label>
                <input
                  type="text"
                  id="province"
                  name="province"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="zip-code"
                  className="block text-sm font-medium text-gray-700"
                >
                  ZIP Code
                </label>
                <input
                  type="text"
                  id="zip-code"
                  name="zip-code"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 mt-4">
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
                />
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-4">
              <input
                type="text"
                placeholder="Additional Information"
                className="mt-1 block w-full border border-gray-300 rounded-md py-2 sm:py-3 shadow-sm"
              />
            </div>
          </form>
        </div>

        {/* Order Summary */}
        <div className="w-full lg:w-[320px] h-auto bg-gray-50 shadow-md rounded-lg p-6">
          <h1 className="font-bold text-lg mb-4">Product Summary</h1>
          <p className="flex justify-between mb-2">
            <span>Asgaard Sofa x 1</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </p>
          <p className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span className="text-gray-500">Rs. 250,000.00</span>
          </p>
          <p className="flex justify-between mb-4">
            <span className="font-bold">Total</span>
            <span className="text-[#B88E2F] font-bold text-lg">
              Rs. 250,000.00
            </span>
          </p>
          <hr className="my-4" />
          <h2 className="text-md font-bold mb-2">Payment Options</h2>
          <p className="text-sm text-gray-600 mb-4">
            Direct Bank Transfer or Cash On Delivery available.
          </p>
          <button className="w-full bg-[#B88E2F] text-white py-2 rounded-md shadow-sm hover:bg-[#9F7D27] transition">
            Place Order
          </button>
        </div>
      </div>

      {/* Features Section */}
      <div className="flex flex-col md:flex-row  bg-[#F6F1E7] p-4 sm:p-8 gap-4 sm:gap-8 justify-center">
        <div className="flex flex-col items-center">
          <SlTrophy className="w-10 h-10 mb-2 " />
          <h2>High Quality</h2>
          <p>Crafted from top materials</p>
        </div>
        <div className="flex flex-col items-center">
          <SiTicktick className="w-10 h-10 mb-2 " />
          <h2>Warranty Protection</h2>
          <p>Over 2 years</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/shipping.png"
            alt="Free Shipping"
            width={40}
            height={40}
            className="mb-2"
          />
          <h2>Free Shipping</h2>
          <p>Order Over $150</p>
        </div>
        <div className="flex flex-col items-center">
          <Image
            src="/customer-support.png"
            alt="Customer Support"
            width={40}
            height={40}
            className="mb-2"
          />
          <h2>24/7 Support</h2>
          <p>Dedicated support</p>
        </div>
      </div>
    </div>
  );
}
























































































































































































































       {/* <div className="mt-24 ml-44">
       <h1 className="font-bold text-2xl ">Billing detail</h1>
       </div> */}
       

       {/* </div> */}
       
    {/* ) */}
{/* } */}
{/* Checkout(); */}