



export function Profile(){
    return(
        <>
            <div className="profileContainer">
                <div className="name">
                    <h2>장은우</h2>
                    <p>우리집에 고양이 있다. <br />
                        곧 두마리로 만들테다.
                    </p>
                    <a href="tel:01071885246">010-7188-5246</a>
                </div>

                <div className="stacks"style={{fontSize:'0.8rem'}}>
                    <h4>stacks </h4>
                    <span>Javascript </span>
                    <span>React </span>
                    <span>Python </span>
                    <span>... </span>
                </div>
                
                <div className="link">
                    <a href="glsejang@naver.com"target="_blank"rel="noopener noreferrer" >이메일 </a>
                    <a href="https://github.com/glsejang"target="_blank"rel="noopener noreferrer" >깃허브 </a>
                    <a href="https://grroooot.tistory.com/"target="_blank"rel="noopener noreferrer" >블로그 </a>
                </div>
                
                

            </div>
        </>
    )
}