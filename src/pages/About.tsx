import React from 'react'
// @ts-ignore: Deno hates images
import DKM from "../public/assets/mm12sSNz.jpg"

export default function About(){
return(
    <div className="text-center responsive-text">
        <h1>About me:</h1>
        <div className="flex align-middle justify-center">
            <img src={DKM} alt="Danish kode Monkey" className="avatar"/>

        </div>
        <h3>
            My name is <span className="text-sky-400"> Daniel </span>
        </h3>
        <h4>I am a{" "} <span className="text-amber-400">Full-stack developer</span> with a focus on <span className="text-green-500">web technologies and development</span></h4>
    </div>
)
}