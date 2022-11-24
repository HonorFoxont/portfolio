import fb from "../images/fbicon.jpg";
import gthub from "../images/ghicon.png";
import ldin from "../images/ldicon.png";
import rd from "../images/rdicon.jpg";

const Footer = () => {
  return (
    <div className="footer">
      <div className="icon-bar">
        <div>
          <a href="https://www.facebook.com/HonorFoxont">
            <img src={fb} alt="" width="40px" />
          </a>
        </div>
        <div>
          <a href="https://github.com/HonorFoxont">
            <img src={gthub} alt="" width="40px" />
          </a>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/dipin-bhattarai">
            <img src={ldin} alt="" width="40px" />
          </a>
        </div>
        <div>
          <a href="https://wa.me/9779824330599">
            <img src={rd} alt="" width="43px" />
          </a>
        </div>
      </div>
      <div>&copy; 2022 - Dipin Bhattarai</div>
    </div>
  );
};

export default Footer;
