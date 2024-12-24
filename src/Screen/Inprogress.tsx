import List from "../Comnponent/List";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Comnponent/Modal";
import { useState } from "react";
import { TodostateAll } from "../Store/Todoslice";
import { useNavigate } from "react-router-dom";


export default function Inprogress() {
  const { inprogress } = useSelector((state) => state.Todo);
  const [hide, sethide] = useState(false);
  const [text,settext]=useState('')
  const dispath=useDispatch()
  const navigate=useNavigate()


  function handelsubmit (e){
    e.preventDefault()
    dispath(TodostateAll(text))
    sethide(false)
    settext('')
    navigate('/')
  }  

  return (
    <>
      <div className={`Modal ${hide ? '' :'hide'}`}>
        <Modal settext={settext} text={text} sethide={sethide} handelsubmit={handelsubmit}/>
      </div>
      <div className={`list ${!hide ? '' :'hide'}`}>
        {inprogress?.map((el,i) => {
          return <List el={el} key={i} />;
        })}
      </div>
      <button className="Absolute" onClick={()=>sethide(true)}>New Todo +</button>

    </>
  )
}
