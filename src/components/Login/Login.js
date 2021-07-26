import React, { useState } from "react";
import { GoogleLogin, GoogleLogout } from "react-google-login";

const Login = (props) => {
  const [logged, setLogged] = useState(false);

  const handleLoginSuccess = (res) => {
    console.log(res);
    setLogged(true);
    props.setInfo({
      id: res.googleId,
      name: res.profileObj.name,
      provider: "google",
    });
  };

  const handleLoginFailure = (res) => {
    console.log(res);
  };

  const handleLogoutSuccess = (res) => {
    console.log(res);
    setLogged(false);
    props.setInfo({
      id: "",
      name: "",
      provider: "",
    });
  };

  return (
    <div>
      {logged ? (
        <div>
          <span>{props.info.name}님 환영합니다.</span>
          <GoogleLogout
            clientId="731823296245-6mu03oalntp18eise3btob9j5q2l557p.apps.googleusercontent.com"
            buttonText="로그아웃"
            onLogoutSuccess={handleLogoutSuccess}
          />
        </div>
      ) : (
        <div>
          <div>IP: {props.ip}</div>
          <span>Please login!</span>
          <GoogleLogin
            clientId="731823296245-6mu03oalntp18eise3btob9j5q2l557p.apps.googleusercontent.com"
            // render={renderProps => (
            //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            //   )}
            buttonText="로그인"
            onSuccess={handleLoginSuccess}
            onFailure={handleLoginFailure}
            cookiePolicy={"single_host_origin"}
            isSignedIn={true}
          />
        </div>
      )}
    </div>
  );
};

export default Login;
