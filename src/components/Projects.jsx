import { useState } from "react"

export function Projects({setModal}){

    const [onProject, setOnProject] = useState(0)


    return(
        <>
            <div className=" projectContainer ">
                <div className="project">
                    <ul>
                        <li onClick={()=> setModal('p1')}>
                            <h3 >Project 1: </h3>
                            <span> Second Faction</span>
                            <span> ... </span>
                            <span> 배포 중</span>

                        </li>
                        <li onClick={()=> setModal('p2')}>
                            <h3 >Project 2: </h3>
                            <span> Beef Patty Only</span>
                            <span> ... </span>
                            <span> </span>
                        </li>
                        <li onClick={()=> setModal('p3')}>
                            <h3>Project 3: </h3>
                            <span> Weather WebApp</span>
                            <span> ... </span>
                            <span> 배포 중 </span>
                        </li>
                        <li>
                            <h3>Project 4: </h3>
                            <span> ...</span>
                            <span>  </span>
                            <span> </span>
                        </li>
                    </ul>

                    <div className="etc">
                        <h2 onClick={()=>
                            setModal('ani')
                        }>Animations / References</h2>

                        
                        <h2 onClick={()=>
                            setModal('tmi')
                        }>TMI</h2>
                    </div>

                </div>

            </div>
        </>
    )
}