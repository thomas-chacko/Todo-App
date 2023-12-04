import { FaTrash } from "react-icons/fa";
import Button from "./Button";

type ItemList = {
  item: string;
  handleDelete: () => void;
};
const ItemList = ({ item, handleDelete }: ItemList) => {
  return (
    <div>
      <div className="flex justify-between px-4 my-4 mx-2 py-3 border ">
        <p style={{ fontStyle: "italic" }} className="text-xl">
          {item}
        </p>
        <Button onClick={() => handleDelete()}>
          <FaTrash size={25} className="text-red-600" />
        </Button>
      </div>
    </div>
  );
};
export default ItemList;
