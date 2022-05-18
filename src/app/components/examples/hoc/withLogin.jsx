import React from "react";
import SmallTitle from "../../common/typografy/smallTitle";

const withLogin = (Component) => (props) => {
  const isLogin = localStorage.getItem("login");
  return (
    <>
      {
        isLogin ? <Component {...props}/> : <SmallTitle>Need to auth</SmallTitle>
      }
    </>
  );
};

export default withLogin;
