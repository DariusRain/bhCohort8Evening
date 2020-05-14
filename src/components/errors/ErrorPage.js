import React from 'react'

function ErrorPage({message}) {
    return (
        <div style={myStyles.main}>
           <h1>{message}</h1> 
        </div>
    )
}

const myStyles = {
    main: {
        position: "absolute",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
        color: "red"
    }
}

export default ErrorPage;
