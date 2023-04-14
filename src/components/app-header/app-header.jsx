import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components' 
import styles from '../app-header/app-header.module.css'
function AppHeader() {

  
    return (
      <header>
        <nav className={`${styles.nav} p-4`}>
          <div className={`${styles.nav__items}`}>
            <div className={`${styles.nav__item} pl-5 pr-5 pb-5 pt-5`}>
              <BurgerIcon />
              <p className={`p-2`}>Конструктор</p>
            </div>
            <div className={`${styles.nav__item} pl-5 pr-5 pb-5 pt-5`}>
              <ListIcon />
              <p>Лента заказов</p>
            </div>
          </div>

          <Logo />
          <ProfileIcon />
        </nav>
      </header>
    );
  }
  
  export default AppHeader;