import React, { useState } from "react";
import "./Todo.css";
import { useSelector, useDispatch } from "react-redux";
import { addTask, deleteTask } from "../actions/homeActions";

function Todo() {
  const [inputTask, setInputTask] = useState("");
  const [inputDesc, setInputDesc] = useState("");
  const list = useSelector((state) => state.todoReducers.list);
  const dispatch = useDispatch();

  return (
    <>
      <div className="child-div text-center">
        <figure>
          <h5 className="subTitle">Track Your Habits</h5>
        </figure>
      </div>

      <div className="main-div">
        <form className="col-8 mx-auto my-4">
          <div className="form-group row my-2">
            <label htmlFor="task" className="col-sm-2 col-form-label">
              Habit Name
            </label>&nbsp;&nbsp;&nbsp;
            <span className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="taskName"
                placeholder="Enter the habit name..."
                value={inputTask}
                onChange={(event) => setInputTask(event.target.value)}
              />
            </span>
          </div><br/>
          <div className="form-group row">
            <label htmlFor="inputPassword" className="col-sm-2 col-form-label">
              Description
            </label>&nbsp;&nbsp;&nbsp;&nbsp;
            <span className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="=taskDesc"
                placeholder="Enter the description..."
                value={inputDesc}
                onChange={(event) => setInputDesc(event.target.value)}
              />
            </span>
          </div>
        </form>
        <br/>
        <div className="addItems d-grid gap-2 col-6 mx-auto">
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() =>
              dispatch(addTask(inputTask, inputDesc), setInputTask(""), setInputDesc(""), window.confirm("Successfully Added"))
            }
          >
            <img src="data:image/png;base64,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" width="20px" height="20px"/> Add The Habit
          </button>
        </div>

        <div className="showList my-2 list-group-item-primary">
          {list.map((elem) => {
            return (
              <div className="eachItem col-8 mx-auto d-flex justify-content-between" key={elem.id}>
                <h5>{elem.task}</h5>
                <h5>{elem.description}</h5>
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQliaSQ63fZNyt9rpmkPvia6mXqPlQi4cBlpw&usqp=CAU" width="50px" height="30px"
                  title="Delete Item"
                  onClick={() => {
                    dispatch(deleteTask(elem.id));
                    alert("Successfully Deleted");
                  }}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Todo;
