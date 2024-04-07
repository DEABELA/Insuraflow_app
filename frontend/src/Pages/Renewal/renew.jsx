import NavBar from "../../components/NavBar";
import { FooterWithSocialLinks } from "../../components/Footer";
import { CardDefault } from "./Renew_card";
const Renew = () => {
    return (
        <div>
            <NavBar />
            <div ><CardDefault />
            </div>
            <FooterWithSocialLinks />
        </div>
    );
};

export default Renew;
