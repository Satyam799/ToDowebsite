import React from "react";

interface Modalx{
  text:string ,
  settext:React.Dispatch<React.SetStateAction<string>>,
  handelsubmit:(e:React.FormEvent<HTMLFormElement>|React.MouseEvent<HTMLButtonElement>)=>void,
  sethide:React.Dispatch<React.SetStateAction<boolean>>
}

const Modal:React.FC<Modalx>=({text,settext,handelsubmit,sethide})=>{
  return (
      <form className="container" onSubmit={handelsubmit}>
        <p>Please enter the content</p>
        <textarea  placeholder="Please eneter you Todo" value={text} onChange={((e)=>settext(e.target.value))}/>
        <div className="buttons">
          <button type='submit' onClick={handelsubmit}>Submit</button>
          <button onClick={()=>{
            sethide(false)
            settext('')

            }}>Cancell</button>
        </div>
      </form>
  );
}

export default Modal
