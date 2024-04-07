
import NavBar from "../components/NavBar";
import { FooterWithSocialLinks } from "../components/Footer";
const Home = () => {
  return (
    <div>
      <NavBar />
      <h1 className=" text-center font-bold text-red-700">
        Welcome too InsuraFlow!!
      </h1>
      <FooterWithSocialLinks />
    </div>

  );
};

export default Home;
