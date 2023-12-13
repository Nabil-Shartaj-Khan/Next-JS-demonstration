const Dynamic = ({params}) => {
    return (
        <> 
        <h2>Examples of dynamic routing- </h2>

            <h4>You are now viewing <i>{params.productId}</i></h4>
        
        </>
       
     );
}
 
export default Dynamic;