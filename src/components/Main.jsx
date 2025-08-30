import TodoItem from "./TodoItem";

export default function Main({ setDrawerOpen, todos, search }) {
  const todosFilteredToCompleted = todos.toSorted(
    (a, b) => b.completed - a.completed
  );

  const listEmptyText = search.trim().length ? (
    <h2 className="message-title">Todos not found:(</h2>
  ) : (
    <h2 className="message-title">Champ, you did it all:)</h2>
  );

  return (
    <main className="main">
      <div className="container">
        {todos.length ? (
          <ul className="main__list">
            {todosFilteredToCompleted.map((todo) => (
              <TodoItem {...todo} key={todo.id} />
            ))}
          </ul>
        ) : (
          listEmptyText
        )}

        <button onClick={() => setDrawerOpen(true)} className="btn">
          +
        </button>
      </div>
    </main>
  );
}
