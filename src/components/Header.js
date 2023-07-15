import React from "react"
// import App from "./src/App.css"

export default function Header() {
    return (
        <header className="header">
            <img 
                src= "./public/troll-face.png" alt="troll-face"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            
        </header>
    )
}