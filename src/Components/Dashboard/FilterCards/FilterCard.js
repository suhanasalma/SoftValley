import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useEditInfoMutation } from "../../../Redux/InformationApi/informationApi";

const FilterCard = ({user}) => {

  const [editInfo] = useEditInfoMutation()
  // console.log(editInfo);
  const dispatch = useDispatch()

 
  const [id, setId] = useState([]);

  const handleId = (values) => {
    setId([...id,values]);
    editInfo({ source_id: id });
  };
 
  return (
    <li
     
      key={user?.user_id ? user?.user_id : user?.id}
    >
      <label htmlFor="user_id" className="inline-flex items-center gap-2">
        <input
          onClick={() => handleId(user?.user_id ? user?.user_id : user?.id)}
          type="checkbox"
          id="user_id"
          className="w-5 h-5 border-gray-300 rounded"
        />

        <span className="text-sm font-medium text-gray-700">
          {user?.user_id ? user?.user_id : user?.id}
        </span>
      </label>
    </li>
  );
};

export default FilterCard;
