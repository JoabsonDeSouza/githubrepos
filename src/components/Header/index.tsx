import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';
import { Link } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import logo from '../../assets/logo.svg';

import { AppContext } from '../../context/AppContext';
import { Header } from './styles';

interface Props {
  toggleTheme(): void;
}

// eslint-disable-next-line react/prop-types
const HeaderComponent: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <AppContext.Consumer>
      {({ buttonBack }) => {
        return (
          <Header>
            <img src={logo} alt="GitHub Repositories" />

            <Switch
              onChange={toggleTheme}
              checked={title === 'dark'}
              onColor={colors.secundary}
              offColor={shade(0.1, colors.primary)}
              onHandleColor={colors.switch}
              uncheckedIcon
              offHandleColor={colors.switch}
              handleDiameter={20}
              height={10}
              width={30}
            />
            {buttonBack && (
              <Link to="/">
                <FiChevronLeft size={16} />
                Voltar
              </Link>
            )}
          </Header>
        );
      }}
    </AppContext.Consumer>
  );
};

export default HeaderComponent;
