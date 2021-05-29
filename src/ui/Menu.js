export const MenuItem = ({ children }) => {
  return (
    <li className="header__menu-item">
      <a>{children}</a>
    </li>
  );
};
export const Menu = ({ children }) => {
  return <ul className="header__menu">{children}</ul>;
};
