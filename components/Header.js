import headerStyles from "../styles/Header.module.css";

const Header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span> news
      </h1>

      <p className={headerStyles.description}>
        Keep up to date with the latest webDev News
      </p>
    </div>
  );
};

export default Header;
