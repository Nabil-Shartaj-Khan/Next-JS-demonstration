import Link from "next/link";
const Profile = () => {
  return (
    <>
      <h1>This is profile page</h1>
      <p>Go to /first_profile here (same level page interception)</p>
      <Link href="/profile/first_profile">Here</Link>
      <p>For one level above, use (..)</p>
      <p>For two level above, use (..)(..)(problematic)</p>
      <p>For two level above, use (...)</p>
    </>
  );
};

export default Profile;
