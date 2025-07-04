import { useEffect, useState } from "react"
import { Tmi } from "../tmi"
import { Project1, Project2, Project3 } from "./Project1"
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
                {modal === 'p3' && <Project3/>}
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
           <div className="inModalTop"><h1>References</h1></div>
            <div className="inModalBot">
                <div className="codepen">
                    <h2><a href="https://codepen.io/glsejang-the-reactor"   target="_blank" rel="noopener noreferrer"> 
                        CODEPEN </a></h2>
                    <p> </p>  
                    <p>아직 발전하는 중입니다.</p> 

                </div>
                  
                <div className="pinter">
                    <h2><a href="https://kr.pinterest.com/glsejang/clones/" target="_blank" rel="noopener noreferrer">Pinterest</a></h2>
                    <p>영감을 준 UI 모음 </p>  
                    <p>좋은 디자인 보면 바로 따라 하고 싶어집니다.</p>     
                </div>         
                 
            </div>                  
        </div> 
    )
}

function AniModal(){
    return(
        <div className="modal">
            <div className="inModalTop"><h1>Animations</h1></div>
            <div className="inModalBot">
                <div className="codepen">
                    <h2><a href="https://codepen.io/glsejang-the-reactor"   target="_blank" rel="noopener noreferrer"> 
                        CODEPEN </a></h2>
                    <h4>애니메이션, 배경, 효과 등</h4>  
                    <p>아직 발전하는 중입니다.</p> 

                </div>
                  
                <div className="pinter">
                    <h2><a href="https://kr.pinterest.com/glsejang/clones/" target="_blank" rel="noopener noreferrer">Pinterest</a></h2>
                    <h4>영감을 준 UI 모음 </h4>  
                    <p>좋은 디자인 보면 바로 따라 하고 싶어집니다.</p>     
                </div>         
                 
            </div>         
        </div> 
    )
}