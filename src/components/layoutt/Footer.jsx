import "../layoutt/Footer.scss";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <p className="company-name">Pilates Pro Class Booking</p>
          <p className="address">123 Pilates St, Kingston Uni, London</p>
        </div>

        <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>

        <div className="footer-contact">
          <p>
            For inquiries, email us at:{" "}
            <a href="mailto:support@pilatespro.com">support@pilatespro.com</a>
          </p>
          <p>Call us: +44 012345678</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
