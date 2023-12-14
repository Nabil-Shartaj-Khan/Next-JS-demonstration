import Link from "next/link";

<Link href="/">Go to the Homepage</Link>
const Dynamic = () => {
    return (
        <> 
        <h2>Here examples of dynamic routing will be shown- </h2>
        <h5>Our products are</h5>

            <h2><Link href="/products/1">Product 1</Link></h2>
            <h2><Link href="/products/2">Product 2</Link></h2>
            <h2><Link href="/products/3">Product 3</Link></h2>
            <h2><Link href="/products/4">Product 4</Link></h2>
            <h2><Link href="/products/5">Product 5</Link></h2>
            <h2><Link href="/products/6">Product 6</Link></h2>
        </>
       
     );
}
 
export default Dynamic;