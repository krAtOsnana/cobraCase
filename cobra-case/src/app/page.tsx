import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check, Star } from "lucide-react";
import Phone from "@/components/Phone";

//this our main page
export default function Home() {
  return (
    <>
    <div className="bg-gray-300">
      <section>
      <MaxWidthWrapper className="pb-24 pt-10 lg:grid lg:grid-cols-3 sm:pb-32 
      lg:gap-x-0 xl:gap-x-8 lg:pt-24 xl:pt-32 lg:pb-52">
        <div className="col-span-2 px-6 lg:px-0 lg:pt-4">
          <div className="relative mx-auto text-center lg:text-left flex flex-col
           items-center lg:items-start"></div>
           <div className="absolute w-28 left-0 top-20 hidden lg:block">
            <img src="/snake-1.png" alt="snakeImage" className="w-full" />
           </div>
            <h1 className="relative text-center lg:text-left w-fit tracking-tight text-balance mt-16 font-bold !leading-tight
            text-gray-900 text-5xl md:text-6xl lg:text-6xl">
              Your Image on a <span className="bg-green-600 px-2 text-white">custom</span> phone case
            </h1>
            <p className="mt-8 text-lg lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap">
            Capture your favourite <span className="font-semibold">memories</span> with your own,{" "}
            <span className="font-semibold">one-of-one</span> phone case.
            CobraCase allows you to protect your memories, not just your phone case.
            </p>
           <ul className="mt-8 space-y-2 text-left  font-medium flex flex-col items-center sm:items-start">
            <div className="space-y-2">
              <li className="flex gap-1.5 item-center text-left">
               <Check className="h-5 w-5 shrink-0 text-green-600"></Check>
               High quality, Durable material
              </li>
              <li className="flex gap-1.5 item-center text-left">
               <Check className="h-5 w-5 shrink-0 text-green-600"></Check>
               5 year print Guarantee
              </li>
              <li className="flex gap-1.5 item-center text-left">
               <Check className="h-5 w-5 shrink-0 text-green-600"></Check>
               Modern iPhone models supported
              </li>
            </div>
           </ul>
           <div className="mt-12 flex  flex-col sm:flex-row items-center sm:item-start gap-5">
            <div className="flex -space-x-4 ">
              <img className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100  " src="/users/user-1.png" alt="user image" />
              <img className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100  " src="/users/user-2.png" alt="user image" />
              <img className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100  " src="/users/user-4.jpg" alt="user image" />
              <img className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100  " src="/users/user-5.jpg" alt="user image" />
              <img className="object-cover inline-block h-10 w-10 rounded-full ring-2 ring-slate-100  " src="/users/user-3.png" alt="user image" />
          </div>
          <div className="flex flex-col justify-between items-center sm:items-start">
            <div className="flex gap-0.5">
              <Star className="h-4 w-4 text-green-600 fill-green-600"/>
              <Star className="h-4 w-4 text-green-600 fill-green-600"/>
              <Star className="h-4 w-4 text-green-600 fill-green-600"/>
              <Star className="h-4 w-4 text-green-600 fill-green-600"/>
              <Star className="h-4 w-4 text-green-600 "/>
            </div>
            <p>
              <span className="font-semibold">1069</span> Happy customers.
            </p>
          </div>

          </div>

        </div>




      {/* hero section  */}

      <div className="col-span-full lg:col-span-1 w-full flex justify-center px-8 
      sm:px-16 md:px-0 mt-32 lg:mx-0 lg:mt-20 h-full">
        <div className="relative md:max-w-xl">
          <img src="/your-image.png" alt="your image icon" className="absolute w-40 
          lg:w-52 left-56 -top-20 select-none hidden sm:block lg:hidden" />
          <img src="/line.png" alt="line image" className="absolute w-20 -left-6 -bottom-6 select-none" />
          <Phone className="" imgSrc=""/>
        </div>
      </div>

      </MaxWidthWrapper>
      </section>
    </div>
    </>
  );
}
