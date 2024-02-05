const UserLayout = ({ children, action, notification, user, login }) => {
  const isLoggedin = true;
  return isLoggedin ? (
    <div>
      {children}
      {action}
      {notification}
      {user}
    </div>
  ) : (
    login
  );
};

export default UserLayout;
