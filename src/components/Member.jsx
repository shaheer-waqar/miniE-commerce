import React from "react";

function Member({name,img,profession}) {
  return (
    <div className="group ">
      <div className="relative group rounded-full overflow-hidden ">
        <img
          src={img}
          alt=""
          className="w-[170px] h-[170px] rounded-full object-cover "
        />
        <div
          className="w-full h-0 absolute bg-black/50  
          top-0 flex items-end justify-center transition-all 
          duration-700 group-hover:h-full group-hover:transition-all 
          group-hover:duration-700"
        >
          <h1 className="text-white py-3 hidden group-hover:block cursor-pointer">{profession}</h1>
        </div>
      </div>
      <h1 className="text-center mt-2 cursor-pointer font-semibold">{name}</h1>
    </div>
  );
}

export default Member;
