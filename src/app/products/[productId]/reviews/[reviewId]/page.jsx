const ReviewDetails = ({params}) => {
    return ( <>

            <h2>You are now viewing the product details and reviews</h2>
            <li>Product id- {params.productId}</li>
            <li>Review Number- {params.reviewId}</li>
    </>);
}
 
export default ReviewDetails;