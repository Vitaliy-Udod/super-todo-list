import { useState } from "react";

export default function Drawer({ drawerOpen, setDrawerOpen, addTodo }) {
  const [inputFields, setInputFields] = useState({ title: "", text: "" });

  const cteateNewTodo = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      title: inputFields.title,
      text: inputFields.text,
      completed: false,
    };
    addTodo(newTodo);
    setInputFields({ title: "", text: "" });
    setDrawerOpen(false);
  };

  if (!drawerOpen) {
    return null;
  }

  return (
    <div
      onClick={() => {
        setDrawerOpen(false);
      }}
      className="drawer"
    >
      <div onClick={(e) => e.stopPropagation()} className="modal">
        <h4 className="modal__title">
          <img
            onClick={() => {
              setDrawerOpen(false);
            }}
            src="/back-arrow.svg"
            alt="arrow"
            className="back-arrow"
          />
          NEW TODO
        </h4>
        <form className="modal__form">
          <input
            onChange={(e) =>
              setInputFields({ ...inputFields, title: e.target.value })
            }
            value={inputFields.title}
            type="text"
            className="modal__input"
            placeholder="Title"
          />
          <input
            onChange={(e) =>
              setInputFields({ ...inputFields, text: e.target.value })
            }
            value={inputFields.text}
            type="text"
            className="modal__input"
            placeholder="Text"
          />
          <button
            disabled={
              inputFields.title.trim().length < 1 ||
              inputFields.text.trim().length < 1
            }
            onClick={cteateNewTodo}
            className="modal__btn"
          >
            ADD
          </button>
        </form>
      </div>
    </div>
  );
}
