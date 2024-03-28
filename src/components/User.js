import React from "react";

const User = ({ data }) => {
  return (
    <div className="flex justify-between border m-2 min-w-[350px] sm:min-w-[650px] px-5 items-center shadow mt-5">
      <div className="h-15">
        <img className="w-20 h-full" src={data.avatar}></img>
      </div>
      <div className="text-center">
      <h3 className="font-semibold">{data.name}</h3>
      <p>{data.email}</p>
      </div>
      <div>
        <span className="font-bold">{data.role}</span>
      </div>
    </div>
  );
};

export default User;
