import React, {useState} from 'react';
 import image from '../images/todo.png';
const Todo = () => {
    const [inputData,setInputData] = useState('');
    const [items,setItems] = useState([]);

    const addItem = () => {
        if(!inputData){

        }else{
            setItems([...items,inputData]);
            setInputData('');
        }
        
    }

    const deleteItem = (id) => {
        console.log(id);
        const updatedItem = items.filter((element,index) => {
            return index !== id;
        });
        setItems(updatedItem);
    }

    const removeAll = () => {
        setItems([]);
    }
    return (
        <>
           <div className="main-div">
               <div className="child-div">
                  <figure>
                      <img src={image} alt="img" />
                      <figcaption>Add Items Here...</figcaption>
                  </figure>
                  <div className="addItems">
                    <input 
                       type="text" 
                       placeholder="Add Items..." 
                        value={inputData}
                        onChange={(event) => {setInputData(event.target.value)}}
                       />
                    <i className="fa fa-plus add-btn" 
                    title="Add Item"
                    onClick={addItem}></i>
                 </div>
                 <div className="showItems">
                 {
                     items.map((element,index) => {
                         return(
                            <div className="eachItem" key={index}>
                                <h3>{element}</h3>
                                <i className="fa fa-trash-alt add-btn" 
                                title="Delete Item"
                                onClick={() => {deleteItem(index)}}></i>
                            </div>
                         )
                     })
                 }
                    
                 </div>
                {/* clear all  */}
                <div className="showItems">
                    <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
                        <span>CHECK LIST</span>
                    </button>
                </div>


               </div>
           </div>
        </>
    )
}

export default Todo;