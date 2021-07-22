import React from "react";
import { GoogleLogout } from "react-google-login";

const Logout = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <GoogleLogout
      clientId="731823296245-6mu03oalntp18eise3btob9j5q2l557p.apps.googleusercontent.com"
      buttonText="로그아웃"
      onLogoutSuccess={responseGoogle}
    />
  );
};

export default Logout;
