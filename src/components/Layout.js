import React from "react"

export default function Layout({ children }) {
    console.log(children)
    return(
        <div>
            <div>
                { children }
            </div>
        </div>
    )
}