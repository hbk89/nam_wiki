import React, {useState} from 'react'
import {GoogleLogin} from 'react-google-login'

const Login = () => {
    const [info, setInfo] = useState({
        id: '',
        name: '',
        provider:'', // 추후 구글뿐만 아니라 다른 것들
    })

    const handleSuccess = (res) => {
        console.log(res);
        setInfo({
            id: res.googleId,
            name: res.profileObj.name,
            provider: 'google'
        })
    
    }

    const handleFailure = (res) => {
        console.log(res);
    }

    return (
        <GoogleLogin
            clientId='731823296245-6mu03oalntp18eise3btob9j5q2l557p.apps.googleusercontent.com'
            // render={renderProps => (
            //     <button onClick={renderProps.onClick} disabled={renderProps.disabled}>This is my custom Google button</button>
            //   )}
            buttonText ="로그인"
            onSuccess={handleSuccess}
            onFailure={handleFailure}
            cookiePolicy={'single_host_origin'}
            isSignedIn={true}
        />
    )
}

export default Login;