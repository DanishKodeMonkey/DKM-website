import _React from "react";

const Loading = () => {
  return (
    <div className=" container flex h-screen flex-col items-center justify-center border-primary ">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-900 mb-10">
      </div>
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
