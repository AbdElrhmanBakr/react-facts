function Footer({darkMode}) {
  return (
    <footer className={darkMode ? "dark" : ""}>
      <small>© 2023 ABBR development. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
