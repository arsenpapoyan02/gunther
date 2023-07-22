import React from "react";
import './about.scss';
import img from './blacksmith.png';

class About extends React.Component {
    render() {
        return (
            <section className="about">
                <div className="container">
                    <h1 className="section__title">Über uns</h1>
                    <div className="about__inner">
                        <div className="about__inner--image">
                            <img src={img} alt="" />
                            <b><p>Vorstellung von Günther: Verbessern Sie Ihr Badezimmer- und Küchenerlebnis mit deutscher Präzision und exquisiter Edelstahlhandwerkskunst</p></b> <br />
                            <p>Mit einer stolzen Tradition, die in der deutschen Ingenieurskunst verwurzelt ist, ist Günther zum Synonym für Präzision, Zuverlässigkeit und exquisite Handwerkskunst geworden.</p><br />
                            <p>Bei Günther verstehen wir die Bedeutung der Auswahl der richtigen Materialien für unsere Geräte. Deshalb sind wir stolz darauf, hochwertigen Edelstahl zu verwenden, ein langlebiges und widerstandsfähiges Material, das unseren Produkten eine elegante Note verleiht. Mit seiner schlanken und glänzenden Oberfläche verbindet Edelstahl Modernität nahtlos mit zeitloser Raffinesse.</p><br />
                            <p>Neben seiner ästhetischen Anziehungskraft bietet Edelstahl praktische Vorteile, die ihn zur idealen Wahl für Ihr Zuhause machen. Seine porenfreie Oberfläche ist resistent gegen Flecken, Korrosion und Verfärbungen und gewährleistet, dass Ihre Günther Geräte jahrelang schlank und makellos bleiben. Edelstahl ist auch einfach zu reinigen, was die Wartung zum Kinderspiel macht und Ihnen eine hygienische Umgebung in Ihrem Badezimmer und Ihrer Küche bietet.</p>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;