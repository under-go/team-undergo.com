"use client";

import { useState } from "react";

const Auth = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(props.isLoggedIn);

  if (isLoggedIn === true) {
    return <div className="pt-24">hi</div>;
  } else {
    return <div className="pt-24">no hi</div>;
  }
};

const page = () => {
  return (
    <div className="pt-24">
      <input type="password" className="border border-black" />
    </div>
  );
};

export default page;
