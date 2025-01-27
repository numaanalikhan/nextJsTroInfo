import React from "react";

import Link  from "next/link";
import { Skeleton } from "../ui/skeleton";


async function Recipies({ recipieList }) {
  console.log(recipieList);

  return (
    <div className="bg-red-400">
      <div className="mx-auto p-4 lg:max-w-6xl md:max-w-4xl sm:max-w-full">
        <h1 className="text-4xl font-bold text-gray-800 mb-10">
          List of Recipies
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {recipieList && recipieList?.length > 0
            ? recipieList?.map((item) => {           
              return(

                <Link href="/">
                  <div className="w-[20px] h-[320px]">
                    <img
                    src={item.image}
                    className="w-full h-full"
                    />
                  </div>
                </Link>
              )   
              })
            : <Skeleton/>}
        </div>
      </div>
    </div>
  );
}

export default Recipies;
 