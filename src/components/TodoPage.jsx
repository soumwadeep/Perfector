import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../AppwriteConfig";

const TodoPage = () => {
  const { topicId } = useParams();
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    fetchTodos();
  }, [topicId]);

  const fetchTodos = async () => {
    try {
      const response = await databases.listDocuments(
        "64a655223c7d1fc593e5",
        topicId
      );
      setTodos(response.documents);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = async (e) => {
    e.preventDefault();

    if (newTodo.trim() === "") {
      alert("Please enter a todo");
      return;
    }

    try {
      const docId = Date.now().toString();
      const documentData = {
        todo: newTodo,
      };

      const promise = databases.createDocument(
        "64a655223c7d1fc593e5",
        topicId,
        docId,
        documentData
      );

      promise.then(
        function (response) {
          fetchTodos(); // Refresh the todos list
          setNewTodo(""); // Clear the input field
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTodo = async (todoId) => {
    try {
      const promise = databases.deleteDocument(
        "64a655223c7d1fc593e5",
        topicId,
        todoId
      );

      promise.then(
        function (response) {
          fetchTodos(); // Refresh the todos list
        },
        function (error) {
          console.log(error);
        }
      );
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="container">
        <h1 className="text-center mb-3">Todos for Topic {topicId}</h1>
        <form onSubmit={addTodo}>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Enter a todo"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit" className="btn btn-primary">
              Add Todo
            </button>
          </div>
        </form>
        {todos.length === 0 ? (
          <p className="text-center">No todos found.</p>
        ) : (
          <ul className="list-group">
            {todos.map((todo) => (
              <li className="list-group-item" key={todo.$id}>
                {todo.todo}
                <button
                  className="btn btn-danger float-end"
                  onClick={() => deleteTodo(todo.$id)}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
};

export default TodoPage;
