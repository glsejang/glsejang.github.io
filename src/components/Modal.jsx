import { useEffect, useState } from "react"
import { Tmi } from "../tmi"
import { Project1, Project2 } from "./Project1"
export function Modal({modal, setModal}){
    
    const [myTmi, setMyTmi] = useState('')

    useEffect(()=>{
        const random = Math.floor(Math.random() * Tmi.length)
        const randomTmi = Tmi[random]
        console.log(randomTmi)
        setMyTmi(randomTmi)
    },[])


    return(
        <>
            <div  className="modalClose" onClick={()=> setModal(0)}>
                {modal === 'tmi' && <TmiModal myTmi={myTmi}/>}
                {modal === 'feat' && <FeatModal/>}
                {modal === 'ani' && <AniModal/>}

                {modal === 'p1' && <Project1/>}
                {modal === 'p2' && <Project2/>}
            </div>
        


        
            
        </>
    )
}

function TmiModal({myTmi}){
    return(
        <div className="modal">
            <div className="tmiBox">
                 <h1>TMI</h1>
                 <p>{myTmi}</p>
                 
            </div>
        </div> 
    )
}


function FeatModal(){
    return(
        <div className="modal">
            <div className="featBox">
                 여긴 기능들 모음이다
            </div>
        </div> 
    )
}


function AniModal(){
    return(
        <div className="modal">
            <div className="aniBox">
                 여긴 애니메이션이다 히히
            </div>
        </div> 
    )
}