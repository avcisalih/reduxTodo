import { useState } from "react";
import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { ActionTypes } from "./redux/actionTypes/actionTypes";

const TodoCard = ({ todo }) => {
  const [isOpen, setIsOpen] = useState(false);

  //dispatch kurulumunu yap
  const dispatch = useDispatch();

  //tamamlandı değeri true ise false, false ise true çevir
  const toggleIsdone = () => {
    //todo objesinin is_done değerini tersine çevir
    const updated = { ...todo, is_done: !todo.is_done };

    //storu güncelle
    dispatch({
      type: ActionTypes.UPDATE,
      payload: updated,
    });
  };
  //silme aksiyonunu tetikler
  const handleDelete = () => {
    dispatch({
      type: ActionTypes.DELETE,
      payload: todo.id,
    });
  };

  return (
    <div className="border border-2 border-warning rounded-5  text-center  shadow shadow-lg p-4 my-5">
      <p className="text-info fs-1 fw-bolder">{todo.text}</p>
      <h6 className=" text-secondary fs-6">
        {todo.is_done ? "Tamamlandı" : "Devam Ediyor"}
      </h6>
      <p className=" text-secondary fs-6">{todo.create_at}</p>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="btn btn-outline-primary"
      >
        Düzenle
      </button>

      <button onClick={toggleIsdone} className="btn btn-outline-success mx-3">
        {todo.is_done ? "Geri Al" : "Tamamlandı"}
      </button>

      <button onClick={handleDelete} className="btn btn-outline-danger">
        Sil
      </button>

      {isOpen && <Modal close={() => setIsOpen(false)} todo={todo} />}
    </div>
  );
};

export default TodoCard;
