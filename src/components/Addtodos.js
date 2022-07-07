import React, { useState } from "react";

const Addtodos = (props) => {
    const [title,setTitle]=useState("");
    const [desc,setDesc] = useState("");
    const submit = (e)=>{
        e.preventDefault();
        if(!title||!desc){
            alert("All feilds should be filled properly")
        }
        else{
        props.addTodo(title,desc);
        setTitle("");
        setDesc("");
        }
        }
      return (
    <>
    <div className="container">
        <h3 className="text-center">Add a TODO</h3>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="TodoTile" className="form-label">
          <h4>Add yout Todo Tilte</h4> 
          </label>
          <input
            type="text"
            value={title}
            className="form-control"
            id="title" onChange={(e)=>{setTitle(e.target.value)}}
            aria-describedby="emailHelp"

          />
        </div>
        <div className="mb-3">
          <label htmlFor="TodoDescription" className="form-label">
          <h4>Add yout Todo Description</h4> 
          </label>
          <input
            type="text"
            className="form-control"
            id="decription"
            value={desc} onChange={(e)=>{setDesc(e.target.value)}}
          />
        </div>
        {/* <div class="mb-3 form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div> */}
        <button type="submit" class="btn btn-sm btn-success">
          Add your List
        </button>
      </form>
      </div>
    </>
  );
};

export default Addtodos;
