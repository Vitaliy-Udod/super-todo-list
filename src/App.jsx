import { createContext, useState } from "react";
import Drawer from "./components/Drawer";
import Header from "./components/Header";
import Main from "./components/Main";

export const AppContext = createContext({});

function App() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: "Learn HTML",
      text: "Tags, Attributes, Values",
      completed: true,
    },
    {
      id: 2,
      title: "Learn CSS",
      text: "Selectors, Flex, Grid",
      completed: true,
    },
    {
      id: 3,
      title: "Learn JS",
      text: "Functions, Objects, Array",
      completed: true,
    },
    {
      id: 4,
      title: "Learn React",
      text: "JSX, Components, Hooks",
      completed: false,
    },
    {
      id: 5,
      title: "Learn React Router",
      text: "BrowserRouter, Route, Link",
      completed: false,
    },
    {
      id: 6,
      title: "Learn Redux Toolkit",
      text: "Store, Slice, Dispatch",
      completed: false,
    },
  ]);

  const addTodo = (newTodo) => {
    setTodos([...todos, newTodo]);
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const changeCompleted = (id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      })
    );
  };

  const editTitleAndText = (id, newFields) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, ...newFields };
        }
        return todo;
      })
    );
  };

  const searchFilter = todos.filter((todo) =>
    todo.title.toLowerCase().includes(search.trim().toLowerCase())
  );

  return (
    <div className="wrapper">
      <Drawer
        drawerOpen={drawerOpen}
        setDrawerOpen={setDrawerOpen}
        addTodo={addTodo}
      />
      <Header search={search} setSearch={setSearch} />
      <AppContext.Provider
        value={{ removeTodo, changeCompleted, editTitleAndText }}
      >
        <Main
          search={search}
          setDrawerOpen={setDrawerOpen}
          todos={searchFilter}
        />
      </AppContext.Provider>
    </div>
  );
}

export default App;
