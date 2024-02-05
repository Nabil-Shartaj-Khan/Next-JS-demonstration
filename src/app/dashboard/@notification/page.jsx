import Link from "next/link";
const Notification = () => {
  return (
    <div>
      <h1>This is user notification page</h1>
      <Link href="/dashboard/archived">
        Archived Notification Here (Unmatched routes handling)
      </Link>
    </div>
  );
};

export default Notification;
