export default function Modal({text,settext,handelsubmit,sethide}) {
  return (
      <form className="container" onSubmit={handelsubmit}>
        <p>Please enter the content</p>
        <textarea type="text" placeholder="Please eneter you Todo" value={text} onChange={((e)=>settext(e.target.value))}/>
        <div className="buttons">
          <button onClick={handelsubmit}>Submit</button>
          <button onClick={()=>{
            sethide(false)
            settext('')

            }}>Cancell</button>
        </div>
      </form>
  );
}
