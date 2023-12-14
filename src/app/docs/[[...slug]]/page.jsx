const Docs = ({params}) => {

    if(params.slug?.length===3){
        return <h1>
            You are viewing the Employee Name- {params.slug[0]}, who is working as {params.slug[1]}. He is {params.slug[2]} level employee.
        </h1>
    }
    else if (params.slug?.length===2){
        return <h1>
            You are viewing the Employee Name- {params.slug[0]}, who is working as {params.slug[1]}. Add /status if applicable.
             </h1>
    }
    else if (params.slug?.length===1){
        return 
        <div>

        <h1>
        You are viewing the Employee Name- {params.slug[0]}. Add /post/status if applicable.
        </h1>
        
        </div>


        
    }
    return (
        <>
        <h1>You are now in Employee homepage</h1>

        <p> search like name/post/status</p>

        </>
      );
}
 
export default Docs;