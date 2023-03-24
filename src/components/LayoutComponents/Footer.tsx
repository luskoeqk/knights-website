// styles
import '@/styles/layouts/footer.scss'

// img
import FooterLogo from '@/assets/footer/footer-logo2.png'


export const Footer = () => {


    return (
        <>
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3 footer-item-logo">
                            <a href="index.html" className="logo-footer"><img src={FooterLogo} /></a>
                            <p>Respect All, Fear None!</p>
                            <ul className="social-list">
                                <li><a target="_blank" href="https://www.facebook.com/afcsofiaknights"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.instagram.com/sofiaknightsafc"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                                <li><a target="_blank" href="https://www.youtube.com/@sofiaknightsafc7904"><i className="fa fa-youtube" aria-hidden="true"></i></a></li>
                            </ul>
                        </div>
                        <div className="col-sm-6 col-lg-3 footer-item">
                            <h3>За контакт</h3>
                            <ul className="footer-cont">
                                <li><i className="fa fa-phone" aria-hidden="true"></i><a href="tel:359886405663">+359886405663</a></li>
                                <li><i className="fa fa-envelope" aria-hidden="true"></i><a href="mailto:sofiaknightsyt@gmail.com"></a>sofiaknightsyt@gmail.com</li>
                                <li><i className="fa fa-map-marker" aria-hidden="true"></i><a href="contacts.html">Стадион "Академик" (до БАН) - ул. "акад. Ростислав Каишев" 2, София</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <div className="copyright"><a href="#" target="_blank">© All rights reserved - Sofia Knights - 2023</a></div>
                        <ul className="footer-menu">
                            <li className="active"><a href="index.html">Начало</a></li>
                            <li><a href="history.html">История</a></li>
                            <li><a href="practices.html">Тренировки</a></li>
                            <li><a href="coaches.html">Треньори</a></li>
                            <li><a href="contacts.html">Контакти</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
