

// import Header from "../Header";
import { TestContext } from "../context";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import NavScrollExample from "../Navbar";
// import Shop from "../Navbar/shop";

function Test() {
    // const[name,setName] = useState("saad");
    // const[email,setEmail] = useState('');
    const [value, setValue] = useState("");
    const userStore = useSelector((state) => state.userStore);
    const dispatch = useDispatch();

    return (
        <>
            {/* <TestContext.Provider value={{name:'saad'}}> */}
            {/*// <div>
        //     <Header title={"Test Click"} />
        //     <h1>Context API</h1>
        //     </div> */}


            {/* < NavScrollExample />
    <div className="container">
    <Shop />
        </div> */}

            <input 
            value={value} 
            onChange={(e) => setValue(e.target.value)} 
            placeholder="Todo" 
            />
            <button onClick={() => dispatch({ type: "ADD", value })}>ADD</button>
            <button onClick={() => dispatch({ type: "DELETEALL" })}>
                Delete All
            </button>
            <ul>
                {userStore.todo.map((v, i) => (
                    <li key={i}>
                        {v}{" "}
                        <button 
                        onClick={() => 
                        dispatch({ type: "EDIT", index: i, old_value: v })
                        }
                        >
                            Edit
                        </button>
                        <button 
                        onClick={() => 
                        dispatch({ type: "DELETE", index: i })
                        }
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>

            {/* </TestContext.Provider> */}
        </>
    )
}
export default Test;