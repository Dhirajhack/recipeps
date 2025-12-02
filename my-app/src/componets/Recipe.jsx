 export default function Recipe()
 {
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