import { useEffect, useState } from "react";
import { databases } from "../AppwriteConfig";

const Todos = () => {
  const [todos, setTodos] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const getTodos = databases.listDocuments(
      "64a655223c7d1fc593e5",
      "64a75d003e72250d0967"
    );
    getTodos.then(
      function (response) {
        setTodos(response.documents);
        // console.log(response); // Success
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    setLoading(false);
  }, []);

  return (
    <section>
      <div className="container">
        <h2 className="text-center">Your Tasks</h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="item-container">
            {todos &&
              todos.map((item) => (
                <div className="row mb-3 task-box" key={item.$id}>
                  <div className="col-sm-8">
                    <h4>{item.todoitem}</h4>
                  </div>
                  <div className="col-sm">
                    <button className="btn btn-danger">Delete</button>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Todos;
