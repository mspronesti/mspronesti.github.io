import { useMemo } from 'react';
import { useThemeContext } from '../hooks/themeHook';
import { BsSunFill } from 'react-icons/bs';
import { FaMoon } from 'react-icons/fa';
import { Button } from 'react-bootstrap';

const BtnToggleTheme = ({ className }) => {
  const { dark, toggleTheme } = useThemeContext();

  const ToggleThemeIcon = useMemo(
    () => (dark ? FaMoon : BsSunFill),
    [dark],
  );

  return (
    <Button className={className + " btn-toggle"} onClick={toggleTheme}>
      <ToggleThemeIcon style={{ fontSize: "23px" }}/>
    </Button>
  );
};

export default BtnToggleTheme;