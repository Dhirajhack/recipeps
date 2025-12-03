import { useEffect, useState } from "react"

 export default function Recipe()
 {

    const[recipename,setRecipeName]=useState("")
    const[Ingerdients,setIngredients]=useState("")
    const[Instructions,setInstructions]=useState("")
    // const[food , setfood]=useState("")
    const[recipes,setRecipes]=useState([]);
    const [editingId,setEditingId]=useState(null);

    // save recipes to localstorge
    const saveRecipes=(updateRecipes)=>{
        localStorage.setItem("recipes",JSON.stringify(updateRecipes));
        setRecipes(updateRecipes);
    }

    // load recipes
    useEffect(()=>{
        const storedRecipes=JSON.parse(localStorage.getItem("recipes"))||[];
        setRecipes(storedRecipes);
    },[])

    // add recipes
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!recipename || !Ingerdients || !Instructions)
        {
            alert("Please fill all field")
        }

        if(editingId){
            const updateRecipes=recipes.map((r)=>
            r.id===editingId?{...r,name:recipename,Ingerdients,Instructions}:r)
            saveRecipes(updateRecipes);
            setEditingId(null);
        }
        else
        {
            const newRecipe={
                id:Date.now(),
                name:recipename,
                Ingerdients,
                Instructions,
                // food,
            }
            saveRecipes([...recipes,newRecipe]);
        }
         setRecipeName("");
         setIngredients("");
         setInstructions("");
        //  setfood("")

    }

    // delete  recipe
    const handleDelete=(id)=>{
        const updateRecipes=recipes.filter((r)=>r.id!==id)
        saveRecipes(updateRecipes);
    }

    // edit recipe
    const handleEdit=(r)=>{
        setRecipeName(r.name);
        setIngredients(r.Ingerdients);
        setInstructions(r.Instructions);
        setEditingId(r.id);
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
                <input type="text" style={{width:"100%",padding:"5px"}}  value={Instructions}  onChange={(e)=>setInstructions(e.target.value)} />
             </div>

             {/* <div style={{marginBottom:"10px"}}>
                <label htmlFor=""> Image of Food</label>
                <input type="file"  style={{width:"100%",padding:"5px"}}  value={food}  onChange={(e)=>setfood(e.target.value)} />
             </div> */}

             <button style={{padding:"5px 10px" , }} type="submit">
            
                            { editingId?"update recipe":"Add recipe"}</button>

             </form>

          </div>

          <div style={{maxWidth:"600px",margin:"20px auto",border:"1px solid  #ccc" ,padding:"30px"}}>
            <h3> All Recipe</h3>
            {recipes.length===0 && <p> no Recpes added yet</p>}
            {recipes.map((r)=>(
                <div key={r.id} style={{border:"1px solid #ccc" , padding :"10px" , marginBottom:"10px"}}>
                     <h4>Recipe name :{r.name}</h4>
                     <p><strong> Ingredients</strong></p>
                     <ul>{r.Ingerdients}</ul>
                     <p><strong>Instructions{r.Instructions}</strong></p>
                     {/* <p>food image {r.food}</p> */}
                     <button style={{padding:"3px 8px"}} onClick={()=>handleEdit(r)}>Edit</button>
                     <button style={{padding:"3px 8px"}} onClick={()=>handleDelete(r.id)}>delete</button>
                      </div>
            ))}
          </div>
    
         
        </>
    )
 }