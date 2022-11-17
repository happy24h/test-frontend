import { Typography, Divider, Button } from "antd";
import TodoList from "../components/TodoList";
import Filters from "../components/Filters";
import { Link } from "react-router-dom";
import "./Pages.css";
const { Title } = Typography;
function Home() {
  return (
    <div className="content">
      <Title style={{ textAlign: "center" }}>Project: Todo List</Title>
      <Link style={{ margin: "0 auto" }} to={"/add-user"}>
        <Button type="primary">Add New Task</Button>
      </Link>
      <Filters />
      <Divider />
      <TodoList />
    </div>
  );
}

export default Home;
