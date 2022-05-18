import React, { useState } from "react";
import CardWrapper from "../../common/Card";

const withFunctions = (SimpleComponent) => (props) => {
  const [isAuth, setIsAuth] = useState(false);
  console.log("isAuth", isAuth);
  const onLogin = () => {
    localStorage.setItem("user", true);
    setIsAuth(true);
  };
  const onLogOut = () => {
    localStorage.removeItem("user");
    setIsAuth(false);
  };
  return (
    <CardWrapper>
      <SimpleComponent {...props} isAuth={isAuth} onLogin={onLogin} onLogOut={onLogOut}/>
    </CardWrapper>
  );
};

export default withFunctions;
