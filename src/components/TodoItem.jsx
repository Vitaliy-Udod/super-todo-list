import { useContext, useState } from "react";
import { AppContext } from "../App";

export default function TodoItem({ id, title, text, completed }) {
  const [edit, setEdit] = useState(false);
  const [editInputs, setEditInputs] = useState({ title, text });

  const { removeTodo, changeCompleted, editTitleAndText } =
    useContext(AppContext);

  const editFiel = () => {
    if (edit) {
      setEdit(!edit);
      editTitleAndText(id, editInputs);
    } else {
      setEdit(!edit);
    }
  };

  return (
    <li className="main__item">
      <div
        className="main__item-icon-inner"
        onClick={() => changeCompleted(id)}
      >
        <img
          className="main__item-icon"
          src={completed ? "/cup.svg" : "/list.svg"}
          alt="completed icon"
        />
      </div>
      <div className="main__item-info-block">
        <div>
          {edit ? (
            <input
              onChange={(e) =>
                setEditInputs({ ...editInputs, title: e.target.value })
              }
              value={editInputs.title}
              className="main__input-title"
              type="text"
            />
          ) : (
            <h4 className="main__item-title">{editInputs.title}</h4>
          )}
        </div>

        <div>
          {edit ? (
            <input
              onChange={(e) =>
                setEditInputs({ ...editInputs, text: e.target.value })
              }
              value={editInputs.text}
              className="main__input-description"
              type="text"
            />
          ) : (
            <div className="main__item-description">{editInputs.text}</div>
          )}
        </div>
      </div>
      <div className="main__item-nav-block">
        <img
          onClick={editFiel}
          src={edit ? "/save.svg" : "/edit.svg"}
          alt="edit"
          className="main__item-img"
        />
        <img
          onClick={() => {
            removeTodo(id);
          }}
          src="/trash.svg"
          alt="delete"
          className="main__item-img"
        />
        <img
          onClick={() => changeCompleted(id)}
          src="/check.svg"
          alt="completed"
          className="main__item-img"
          style={{ backgroundColor: completed ? "#4dd17b" : "" }}
        />
      </div>
    </li>
  );
}
