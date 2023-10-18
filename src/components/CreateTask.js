import React, { useState, useEffect } from "react";
import Litstitem from "./Litstitem";

const getlocalitem = () => {
  let list = localStorage.getItem("ListItem");
  if (list) {
    return JSON.parse(localStorage.getItem("ListItem"));
  } else {
    return [];
  }
};

const CreateTask = ({}) => {
  const [taskname, settaskname] = useState("");
  const [getval, setgetval] = useState(getlocalitem());

  const handleclick = (e) => {
    e.preventDefault();
    if (taskname === "") {
      alert("Please Enter Some text...");
    } 
    else {
      let allinputdata = {
        id: new Date().getTime().toString(),
        name: taskname,
      };
      setgetval((oldval) => {
        return [...oldval, allinputdata];
      });
    }
    settaskname("");
  };

  useEffect(() => {
    localStorage.setItem("ListItem", JSON.stringify(getval));
  }, [getval]);

  const handlechange = (e) => {
    settaskname(e.target.value);
  };

  const handledelete = (ids) => {
    setgetval((oldval) => {
      return oldval.filter((arrelem) => {
        return ids !== arrelem.id;
      });
    });
  };

  return (
    <>
      <form className="todoForm">
        <input
          type="text"
          value={taskname}
          onChange={handlechange}
          name="Text"
          placeholder="✍🏻... Your Task"
        />

        <button type="submit" onClick={handleclick}>
          Create
        </button>
      </form>
      <ul className="allTodos">
        {getval.map((getitem) => {
          return (
            <Litstitem
              items={getitem.name}
              key={getitem.id}
              ids={getitem.id}
              onSelect={handledelete}
            />
          );
        })}
      </ul>
    </>
  );
};

export default CreateTask;
