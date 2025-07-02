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
            <div className="inModalTop"><h1>TMI</h1></div>
            <div className="inModalBot">
                 <p className="tmi">{myTmi}</p>
            </div>                    
        </div>
        
    )
}


function FeatModal(){
    return(
        <div className="modal">
           <div className="inModalTop"><h1>Features</h1></div>
            <div className="inModalBot">
                 <p>여긴 기능들 모음이다</p>
            </div>                  
        </div> 
    )
}


function AniModal(){
    return(
        <div className="modal">
            <div className="inModalTop"><h1>Animations</h1></div>
            <div className="inModalBot">
                <p><a href="https://codepen.io/glsejang-the-reactor">우주의 별</a></p>
                <p><a href="://codepen.io/glsejang-the-reactor">...</a></p>
            </div>  
        </div> 
    )
}