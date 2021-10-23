import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import MyDrawer from "./MyNavigation";
import { NavigationActions } from "react-navigation";

const NavigationContain = (props) => {
  const navRef = useRef();
  const isAuth = useSelector((state) => !!state.auth.token);

  useEffect(() => {
    if (!isAuth) {
      navRef.current.dispatch(
        NavigationActions.navigate({ routeName: "AuthStack" })
      );
    }
  }, [isAuth]);
  return <MyDrawer ref={navRef} />;
};

export default NavigationContain;
