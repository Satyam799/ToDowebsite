import List from "../Comnponent/List";
import { useDispatch, useSelector } from "react-redux";
import Modal from "../Comnponent/Modal";
import { useRef, useState } from "react";
import { TodostateAll } from "../Store/Todoslice";
import { useNavigate } from "react-router-dom";
import { Rootstate } from "./All";

export const Inprogress: React.FC = () => {
  const { inprogress } = useSelector((state: Rootstate) => state.Todo);
  const [hide, sethide] = useState(false);
  const [text, settext] = useState("");
  const dispath = useDispatch();
  const navigate = useNavigate();
  const value = useRef<HTMLTextAreaElement>(null);
  function handelsubmit(
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) {
    e.preventDefault();
    if (text === "") return value.current?.focus();

    if (text === "") return;

    dispath(TodostateAll(text));
    sethide(false);
    settext("");
    navigate("/");
  }

  return (
    <>
      <div className={`Modal ${hide ? "" : "hide"}`}>
        <Modal
          settext={settext}
          value={value}
          text={text}
          sethide={sethide}
          handelsubmit={handelsubmit}
        />
      </div>
      <div className={`list ${!hide ? "" : "hide"}`}>
        {inprogress?.map((el: string, i: number) => {
          return <List el={el} key={i} />;
        })}
      </div>
      <button className="Absolute" onClick={() => sethide(true)}>
        New Todo +
      </button>
    </>
  );
};

export default Inprogress;
