import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { databases } from "../AppwriteConfig";

const Todos = () => {
  const { topicId } = useParams();
  const [todos, setTodos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editTodoId, setEditTodoId] = useState("");
  const [editTodoValue, setEditTodoValue] = useState("");

  useEffect(() => {
    setLoading(true);
    const getTodos = databases.listDocuments(
      "64a655223c7d1fc593e5",
      "64a75d003e72250d0967"
    );
    getTodos.then(
      function (response) {
        const filteredTodos = response.documents.filter(
          (item) => item.topicId === topicId
        );
        setTodos(filteredTodos);
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    setLoading(false);
  }, [topicId]);

  const deleteTodo = (id) => {
    const deleteATodo = databases.deleteDocument(
      "64a655223c7d1fc593e5",
      "64a75d003e72250d0967",
      id
    );
    deleteATodo.then(
      function (response) {
        console.log(response); // Success
        window.location.reload();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  const editTodo = (id) => {
    setEditTodoId(id);
    const todoItem = todos.find((item) => item.$id === id);
    setEditTodoValue(todoItem.todoitem);
  };

  const cancelEdit = () => {
    setEditTodoId("");
    setEditTodoValue("");
  };

  const updateTodo = (id, todoitem) => {
    const updateTodoText = databases.updateDocument(
      "64a655223c7d1fc593e5",
      "64a75d003e72250d0967",
      id,
      { todoitem }
    );
    updateTodoText.then(
      function (response) {
        console.log(response); // Success
        cancelEdit();
        window.location.reload();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
  };

  return (
    <section>
      <div className="container">
        <h2 className="text-center">Your Tasks</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="item-container">
            {todos.length === 0 ? (
              <p>You Haven&apos;t Created Any Tasks Yet.Create One To Excel!</p>
            ) : (
              todos.map((item) => (
                <div className="row mb-3 task-box" key={item.$id}>
                  <div className="col-sm-8">
                    {editTodoId === item.$id ? (
                      <input
                        type="text"
                        className="form-control"
                        value={editTodoValue}
                        onChange={(e) => setEditTodoValue(e.target.value)}
                      />
                    ) : (
                      <h4>{item.todoitem}</h4>
                    )}
                  </div>
                  <div className="col-sm">
                    {editTodoId === item.$id ? (
                      <>
                        <button
                          className="btn btn-success"
                          onClick={() => updateTodo(item.$id, editTodoValue)}
                        >
                          Save
                        </button>
                        <button
                          className="btn btn-secondary"
                          onClick={cancelEdit}
                        >
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn btn-primary"
                          onClick={() => editTodo(item.$id)}
                        >
                          Edit
                        </button>
                        <button
                          className="btn btn-danger"
                          onClick={() => deleteTodo(item.$id)}
                        >
                          Delete
                        </button>
                      </>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default Todos;
