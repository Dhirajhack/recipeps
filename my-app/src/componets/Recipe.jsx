import { useState } from "react"

 export default function Recipe()
 {

    const[recipename,setRecipeName]=useState("")
    const[Ingerdients,setIngredients]=useState("")
    const[Instructions,setInstructions]=useState("")
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
        if(!recipename || !Ingerdients || !Instructions)
        {
            alert("Please fill all field")
        }
        else
        {
            const newRecipe={
                id:Date.now(),
                name:recipename,
                Ingerdients,
                Instructions
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
             
             <form onSubmit={handleSubmit}>
             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Name:</label>
                <input type="text" style={{width:"100%",padding:"5px"}} value={recipename}  onChange={(e)=>setRecipeName(e.target.value)}/>
             </div>

             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Ingerdients</label>
                <input type="text" style={{width:"100%",padding:"5px"}}   value={Ingerdients}  onChange={(e)=>setIngredients(e.target.value)} />
             </div>

             <div style={{marginBottom:"10px"}}>
                <label htmlFor="">Instructions</label>
                <input type="text" style={{width:"100%",padding:"5px"}}  value={setInstructions}  onChange={(e)=>setInstructions(e.target.value)} />
             </div>

             <button style={{padding:"5px 10px" , }} type="submit">ADD RECIPE</button>

             </form>

          </div>
    
         
        </>
    )
 }