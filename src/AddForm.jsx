import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "./redux/actionTypes/actionTypes";
import axios from "axios";
import { addTodo } from "./redux/actions/todoActions";

const AddForm = () => {
  //dispacth kurulumunu yapalım
  const dispacth = useDispatch();

  // Form Gönderilince
  const handleSubmit = (e) => {
    //1. Sayfanın Yenilenmesini Engelle
    e.preventDefault();

    //2. Stor'a kaydedilecek veriyi hazırla
    const newTodo = {
      id: v4(),
      text: e.target[0].value,
      is_done: false,
      create_at: new Date().toLocaleDateString(),
    };

    //3. Veriyi api'a gönder
    axios.post("/todos", newTodo).then(() => dispacth(addTodo(newTodo)));

    //4. Formu Temizle
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        className="form-control"
        placeholder="örn: react projesi yap"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
