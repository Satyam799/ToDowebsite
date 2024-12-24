import { useDispatch, useSelector } from "react-redux"
import { TodoListDone } from "../Store/Todoslice"
import image from "../assets/check.png";

export default function List({el}) {
 const dispatch=useDispatch()
 function handellist(e){
    e.preventDefault()
    if(!completed){
    dispatch(TodoListDone(el))
    }
  }

const {Done}=useSelector((state)=>state.Todo)

const completed=Done.find((ele)=>el===ele)
const nowDone=window.location.pathname==='/done'

  return (
    <div className={`box ${completed && !nowDone ? 'done':''}`} onClick={handellist}>
        {el}
        {completed && !nowDone && <img src={image} alt="img"  className="image2"/> }

    </div>
  )
}
