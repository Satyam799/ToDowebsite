import List from "../Comnponent/List";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Comnponent/Modal";
import React, { useState } from "react";
import { TodostateAll } from "../Store/Todoslice";

export interface Todostate {
  All:(string )[],
  inprogress:(string )[],
  Done:(string )[]
}

export interface Rootstate{
  Todo:Todostate
}

export const All :React.FC =()=>{
  const { All } = useSelector((state:Rootstate) => state.Todo);
  const [hide, sethide] = useState(false);
  const [text,settext]=useState('')
  const dispath=useDispatch()
  function handelsubmit (e:React.FormEvent<HTMLFormElement>|React.MouseEvent<HTMLButtonElement>){
    e.preventDefault()
    dispath(TodostateAll(text))
    sethide(false)
    settext('')
  }  

  return (
    <>
      <div className={`Modal ${hide ? '' :'hide'}`}>
        <Modal settext={settext} text={text} sethide={sethide} handelsubmit={handelsubmit}/>
      </div>
      <div className={`list ${!hide ? '' :'hide'}`}>
        {All?.map((el,i) => {
          return <List el={el} key={i}/>;
        })}
      </div>
      <button className="Absolute" onClick={()=>sethide(true)}>New Todo +</button>

    </>
  );
}

export default All