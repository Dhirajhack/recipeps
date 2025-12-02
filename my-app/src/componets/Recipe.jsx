import { useState } from "react"

 export default function Recipe()
 {

    const[recipename,setRecipeName]=useState("")
    const[Ingerdients,setIngredients]=useState("")
    const[instructions,setInstructions]=useState("")
    const[recipes,setRecipes]=useState([]);

    // save recipes to localstorge
    const saveRecipes=(updateRecipes)=>{
        localStorage.setItem("recipes",JSON.stringify(updateRecipes));
        setRecipes(updateRecipes);
    }

    // load recipes

    // add recipes
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!recipename || !Ingerdients || !instructions)
        {
            alert("Please fill all field")
        }
        else
        {
            const newRecipe={
                id:Date.now(),
                name:recipename,
                Ingerdients,
                instructions
            }
            saveRecipes([...recipes,newRecipe]);
        }
         setRecipeName("");
         setIngredients("");
         setInstructions("");

    }

    return(
        <>
          <div style={{maxWidth:"600px",margin:"20px auto" , border:"1px solid #ccc" , padding:"20px"}}>
             <h1 style={{marginBottom:"20px",border:"1px solid #ccc" , padding:"20px"}}> Recipe book</h1>
             
             <form>
             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Name:</label>
                <input type="text" style={{width:"100%",padding:"5px"}} />
             </div>

             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Ingerdients</label>
                <input type="text" style={{width:"100%",padding:"5px"}} />
             </div>

             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Instructions</label>
                <input type="text" style={{width:"100%",padding:"5px"}} />
             </div>

             <button style={{padding:"5px 10px" , }} type="submit">ADD RECIPE</button>

             </form>

          </div>
    
         
        </>
    )
 }