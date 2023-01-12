import LoginForm from "@components/Loginform/LoginForm";
import Logo from "@components/Logo/Logo";
import "./style.scss";

export default function Home() {
  return (
    <div className="homepage">
      <Logo />
      <LoginForm />
    </div>
  );
}
