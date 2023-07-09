import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useState, useEffect } from "react";
import { databases } from "../AppwriteConfig";
import Todos from "./Todos";

const TodoPage = () => {
  useEffect(() => {
    document.title = "Todos | Perfector";
  }, []);
  const { topicId } = useParams();
  const [todo, setTodo] = useState("");
  const docId = Date.now().toString();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") {
      alert("Write Something In Your Todo!");
      console.log("Todo item is empty. Not adding.");
      return;
    }

    const promise = databases.createDocument(
      "64a655223c7d1fc593e5",
      "64a75d003e72250d0967",
      docId,
      {
        topicId: topicId,
        todoitem: todo,
        todostatus: false,
      }
    );

    promise.then(
      function (response) {
        // alert("Added Your Task!");
        console.log(response); // Success
        window.location.reload();
      },
      function (error) {
        console.log(error); // Failure
      }
    );
    e.target.reset();
  };

  return (
    <section>
      <Sidebar />
      <div className="container">
        <h1 className="text-center mb-3">Create Your Todos Here</h1>
        <form action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-sm-8">
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control form-control-lg"
                  onChange={(e) => {
                    setTodo(e.target.value);
                  }}
                />
              </div>
            </div>
            <div className="col-sm">
              <button type="submit" className="btn btn-success btn-lg">
                Add Todo
              </button>
            </div>
          </div>
        </form>
        <Todos />
      </div>
    </section>
  );
};

export default TodoPage;
