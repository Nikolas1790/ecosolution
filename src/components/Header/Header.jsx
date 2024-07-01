import { Logo } from "components/Logo/Logo";
import { HeaderContainer } from "./Header.styled";
import { BurgerMenu } from "components/BurgerMenu/BurgerMenu";

export const Header = () => {
  return (
    <HeaderContainer >
      <Logo />
      <BurgerMenu />
    </HeaderContainer>
  );
};
