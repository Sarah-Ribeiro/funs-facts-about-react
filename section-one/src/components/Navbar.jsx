import logo from "../assets/react-logo.png";

export default function NavBar() {
  return (
    <nav>
      <img src={logo} alt="logo-react" className="nav--icon" />
      <h3 className="nav--logo_text">ReactFacts</h3>
      <h4 className="nav--title">React Course - Project 1</h4>
    </nav>
  );
}
