import Link from "next/link";
const Home = () => {
    return ( 
        <>
        <h2>Welcome to next JS demonstration</h2>
        <Link href="/docs">Go to the docs</Link><br></br>
        <Link href="/login">Go to the Login</Link><br></br>
        <Link href="/register">Go to the Register</Link><br></br>
        <Link href="/posts">Go to the Posts</Link><br></br>
        <Link href="/products">Go to the products</Link><br></br>
        <Link href="/profile">Go to the Profile</Link><br></br>
        </>
     );

}
 
export default Home;