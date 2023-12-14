"use client"
import { useRouter } from "next/navigation";

const Order = () => {
    const router = useRouter();

    const handleClick = () => {
        console.log("Your order is being placed....");
        router.push("/");
    }

    return (
        <>
            <h1>Simulating order page</h1><br></br>
            <button onClick={handleClick}>Place your order here</button>
        </>
    );
}
 
export default Order;
