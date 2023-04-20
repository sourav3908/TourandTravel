import "./FooterStyles.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div>
          <h1>Travelo</h1>
          <p>Create memories that last a lifetime.</p>
        </div>
        <div>
          <a href="/">
            <i className="fa-brands fa-facebook-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-instagram-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-behance-square"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-twitter-square"></i>
          </a>
        </div>
      </div>
      <div className="bottom">
        <div>
          <h4>About</h4>
          <a href="/">About Us</a>
          <a href="/">Contact</a>
          <a href="/">Press</a>
          <a href="/">Terms of Use</a>
        </div>
        <div>
          <h4>Travel Tips</h4>
          <a href="/">Blog</a>
          <a href="/">Destinations</a>
          <a href="/">India Travel</a>
          <a href="/">Travel Insurance</a>
        </div>
        <div>
          <h4>Resources</h4>
          <a href="/">Categories</a>
          <a href="/">City Guides</a>
          <a href="/">Travel Resources</a>
          <a href="/">Support</a>
        </div>
        <div>
          <h4>Others</h4>
          <a href="/">Terms of Service</a>
          <a href="/">Privacy Policy</a>
          <a href="/">License</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
