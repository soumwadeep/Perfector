import { useParams } from "react-router-dom";
import Sidebar from "./Sidebar";

const TodoPage = () => {
  const { topicId } = useParams();
  return (
    <section>
      <Sidebar />
      <div className="container">
        <h1>Create Todos For Topic Number: {topicId}</h1>
      </div>
    </section>
  );
};

export default TodoPage;
