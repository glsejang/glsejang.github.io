
export function Project1(){
    return( 
        <>
            <div className="inProject modal p1">
                <div className="topBox">
                    <p>프로젝트:</p><h1> Second Faction</h1> 
                </div>
                <div className="botBox">
                    <div className="botLeft">
                        <img src="/images/secondfaction.png" alt="" />
                        <p><a href="https://second-faction.onrender.com/" target="_blank" rel="noopener noreferrer" >링크</a></p>
                    </div>
                    <div className="botRight">
                        <span className="stackBox">Stacks: 자바스크립트 | 파이썬, 플라스크 </span>
                        <p>제 첫 웹 프로젝트입니다. 첫 프로젝트인만큼 바닐라 자바스크립트와 html, css로 한땀 한땀 만들었습니다.
                            <br />거기에 웹크롤링을 위한 파이썬 셀레니움, 뷰티풀숲, 간단한 백엔드를 위한 플라스크를 사용했습니다.
                            <br />
                            <br />SF소설 서적 및 제 자작 소설 게시 블로그입니다. 
                            추후 SF영화, 게임 정보 및 관련 큐레이션 추가 예정입니다
                        </p>

                    </div>
                    <p></p>
                </div>
            </div>
        </>
    )
}


export function Project2(){
    return( 
        <>
            <div className="inProject modal p2">
                <div className="topBox">
                    <p>프로젝트:</p><h1> Beef Patty Only</h1> 
                </div>
                <div className="botBox">
                    <div className="botLeft">
                        <img src="/images/beefpattyonly.png" alt="" />
                        <p><a href="https://glsejang.github.io/beefpattyonly/" target="_blank" rel="noopener noreferrer" >링크</a></p>
                    </div>
                    <div className="botRight">
                        <span className="stackBox">Stacks: 리액트 | 자바스크립트</span>
                        <p>처음으로 리액트로 만든 것입니다. 이 웹 역시 나중에 햄버거 리뷰 블로그로 운영하고 싶어서 만들었습니다.
                            <br />
                            <br />
                            헤더와 푸터는 버거 번을, 안의 포스트의 테이블은 패티와 양상추 토마토 등을 표현하려 했습니다.  
                            <br />
                            옆의 사이드 내브바는 감자튀김을 표현했습니다.
                        </p>

                    </div>
                    <p></p>
                </div>
            </div>
        </>
    )
}

export function Project3(){
    return( 
        <>
            <div className="inProject modal p3">
                <div className="topBox">
                    <p>프로젝트:</p><h1> 날씨정보 기반 식물 관리 웹</h1> 
                </div>
                <div className="botBox">
                    <div className="botLeft">
                        <div className="img_box" style={{display: 'flex'}}>
                        <img style={{width:'50%'}} src="/images/weather.png" alt="" />
                        <img style={{width:'50%'}} src="/images/weather2.png" alt="" />
                        </div>
                        <p><a href="https://glsejang.github.io/weather/" target="_blank" rel="noopener noreferrer" >링크</a></p>
                    </div>
                    <div className="botRight">
                        <span className="stackBox">Stacks: 리액트 | 자바스크립트 ㅣ 부트스트랩</span>
                        <p> 프로젝트로 가장 많이 하는 날씨 어플, todolist 앱을 하나로 합치고, <br />
                            식물 관리 기능을 넣었습니다. 어머니와 이모, 지인 분들이 사용하기 쉽도록, 모바일로만 디자인 하였고 <br />
                            최대한 심플하게 하기 위해 부트스트랩을 이용했습니다.
                            <br />
                            기능 구현은, 사용자로 부터, 키우는 식물과 위치 정보를 입력 받고, api를 이용 일주일간의 날씨 정보를 받은 뒤에 <br />
                            이것을 프롬프트로 만들어서 제미나이에 요청, 응답을 다시 파싱해서 정보화 하고 카드형 todolist로 생성합니다.   
                        </p>

                    </div>
                    <p></p>
                </div>
            </div>
        </>
    )
}