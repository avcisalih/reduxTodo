import AddForm from "./AddForm";
import ListTodos from "./ListTodos";

function App() {
  return (
    <div className="vh-100">
      <div className="container p-5">
        <h2 className="text-center">
          REDUX <span className="text-warning">CRUD</span>
        </h2>
        <AddForm />
        <ListTodos />
      </div>
    </div>
  );
}

export default App;