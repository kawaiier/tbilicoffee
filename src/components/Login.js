import React from 'react';

const Login = (props) => {
    return (
        <div>
            {props.user ?
                        <div>
                            <button onClick={props.logout}>Log Out</button>
                        </div>                
                        :
                        <button onClick={props.login}>Log In</button>              
                    }
        </div>
    )
}

export default Login;