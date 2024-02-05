import Link from "next/link";

const Home = () => {
  return (
    <>
      <h2>Welcome to next JS demonstration</h2>
      <ul>
        <li>
          <Link href="/docs">Go to the docs (SLUG demonstration)</Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/login">Go to the Login</Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/register">Go to the Register</Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/posts">Go to the Posts (simple routing)</Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/products">Go to the products (dynamic routing)</Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/profile">
            Go to the Profile (simple routing, intercepting routes)
          </Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/order_product">
            Go to Product Order (/push demonstration){" "}
          </Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/route_handler">
            Go to Route Handling (Route handling and Headers in route handling)
          </Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/dashboard">
            Go to Dashboard (Parallel routing, Unmatched routes handling,
            conditional rendering)
          </Link>{" "}
        </li>
        <br></br>
        <li>
          <Link href="/projects">
            Project list from Array using GET, POST, PATCH, DELETE request,
            Query parameter (use /projects?query="anything" for finding projects
            with similar name),redirect (use Thunder client for API request)
          </Link>{" "}
        </li>
        <br></br>
      </ul>
    </>
  );
};

export default Home;
