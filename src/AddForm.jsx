import { useDispatch } from "react-redux";
import { v4 } from "uuid";
import { ActionTypes } from "./redux/actionTypes/actionTypes";

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

    //3. reducer'a aksiyonu ilet
    dispacth({
      type: ActionTypes.ADD,
      payload: newTodo,
    });

    //4. Formu Temizle
  };

  return (
    <form onSubmit={handleSubmit} className="d-flex gap-3 my-5">
      <input
        type="text"
        className="form-control"
        placeholder="örn: typescript projesi yap"
      />

      <button className="btn btn-warning">Gönder</button>
    </form>
  );
};

export default AddForm;
