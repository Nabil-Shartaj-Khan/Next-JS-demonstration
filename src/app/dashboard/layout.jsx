const UserLayout = ({ children, action, notification, user }) => {
  return (
    <div>
      <div>
        {children}
        {action}
        {notification}
        {user}
      </div>
    </div>
  );
};

export default UserLayout;
