// img
import Logo from '@/assets/logo.png';

// stlyes
import '@/styles/layouts/header.scss';

export const Header = () => {
    return (
        <header className="header">

            <div className="top-panel">
                <div className="container">
                    <ul className="header-cont">
                        <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:+359866405663">+359866405663</a></li>
                        <li><i className="fa fa-clock-o" aria-hidden="true"></i>Понеделник и сряда - 20:30, стадион "Академик" (4-ти км)</li>
                    </ul>
                    {/* <ul className="social-list"> */}
                        {/* <li><a target="_blank" href="https://www.facebook.com/afcsofiaknights"><i className="fa fa-facebook" aria-hidden="true"></i></a></li> */}
                        {/* <li><a target="_blank" href="https://www.instagram.com/sofiaknightsafc"><i className="fa fa-instagram" aria-hidden="true"></i></a></li> */}
                        {/* <li><a target="_blank" href="https://www.youtube.com/@sofiaknightsafc7904"><i className="fa fa-youtube" aria-hidden="true"></i></a></li> */}
                    {/* </ul> */}
                </div>
            </div>


            <div className="header-menu">
                <div className="container">
                    <div className="header-logo">
                        <a href="index.html" className="logo"><img src={Logo} /></a>
                    </div>
                    <nav className="nav-menu">
                        <ul className="nav-list">
                            <li className="menu-active"><a href="index.html">Начало</a></li>
                            |
                            <li><a href="history.html">История</a></li>
                            |
                            <li><a href="practices.html">Тренировки</a></li>
                            |
                            <li><a href="coaches.html">Треньори</a></li>
                            |
                            <li><a href="contacts.html">Контакти</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}
