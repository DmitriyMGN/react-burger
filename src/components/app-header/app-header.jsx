import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "../app-header/app-header.module.css";
function AppHeader() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.nav__items}>
          <a href="/" className={`${styles.nav__item} pl-5 pr-5`}>
            <BurgerIcon />
            <p className={`text text_type_main-default pl-2`}>Конструктор</p>
          </a>
          <a href="/" className={`${styles.nav__item} pl-2 pr-5`}>
            <ListIcon />
            <p className={`text text_type_main-default pl-2`}>Лента заказов</p>
          </a>
        </div>
        <Logo />
        <a href="/" className={`${styles.nav__item} ${styles.nav__item_profile} pl-5 pr-5`}>
          <ProfileIcon />
          <p className={`text text_type_main-default pl-2`}>Личный кабинет</p>
        </a>
      </nav>
    </header>
  );
}

export default AppHeader;
