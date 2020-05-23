//import React, {useState} from "react";    //배열을 계속돌려서 시작할때 한번만 불러오는 useEffect필요
import React, {useState,useEffect} from "react";
import axios from 'axios';
/*
       const [변수명,메소드]=useState("[]") ("{}") ("0") (false)
                    =========setter
             [music,setMusic]


       useEffect(()=>{
           처리 => 데이터읽기  axios,fetch...
       });

       componentDidMount
       componentDidUpdate
       =======================
       useEffect(()=>{
           처리 => 데이터읽기  axios,fetch...
       });

       componentDidMount
       useEffect(()=>{
           처리 => 데이터읽기  axios,fetch...
       }, []);

 */

//music.json 가져오는 연습
function App2() {

    const [music,setMusic] =useState([]);
    useEffect(()=>{
        axios.get('http://localhost:3000/music.json')
            .then((res)=>{
                setMusic(res.data);
                console.log(res.data)
        })
    }, []) //deps[] 안주면 무한루프

    //console.log(music)

    //html출력 render()부분
    const html=music.map((m)=>
        <tr>
            <td>{m.rank}</td>
            {/*다중 if문 조건문*/}
            <td>
                {
                    m.state==="상승" &&
                         <span style={{"color":"red"}}>▲{m.idcrement}</span>
                }
                {
                    m.state==="하강" &&
                    <span style={{"color":"blue"}}>▼{m.idcrement}</span>
                }
                {
                    m.state==="유지" &&
                    <span style={{"color":"gray"}}>-</span>
                }
            </td>
            <td><img src={m.poster} width={"35"} height={"35"}/></td>
            <td>{m.title}</td>
            <td>{m.singer}</td>
        </tr>
    )
    return(
        <div className={"row"}>
            <H/>

            {/*검색이벤트*/}
            <div style={{"height":"30px"}}></div>
            <table className={"table"}>
                <tr>
                    <td>
                        <input type={"text"} className={"input-sm"} size={"25"}/>
                    </td>
                </tr>
            </table>

            <table className={"table"}>
                <thead>
                    <tr className={"success"}>
                        <th>순위</th>
                        <th>등폭</th>
                        <th></th>
                        <th>노래명</th>
                        <th>가수명</th>
                    </tr>
                </thead>
                <tbody>
                    {html}
                </tbody>
            </table>
        </div>
    )
}

    function H1(){
        return (
            <h1 className={"text-center"}>Music Top50</h1>
        )
    }

    //function 다르게 불러오기
    const H=()=>{
        const color=["red","orange","pink","yellow","blue"];
        const no=parseInt(Math.random()*5); //random(0.0~0.99)
        return(
            <h1 className={"text-center"} style={{"color":color[no]}}>Music Top50</h1>
        )
    }

    const H2=function(){
        return(
            <h1 className={"text-center"}>Music Top50</h1>
        )
    }

export default App2;