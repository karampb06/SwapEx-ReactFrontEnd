import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: info@swapex.com</p>
        <p>Phone: 0800-8000-8000</p>
      </div>
      <div className="footer-section">
        <h4>Legal</h4>
        <p>Privacy Policies</p>
        <p>Terms of Services</p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <p>About Us</p>
        <p>How it Works</p>
        <p>FAQ</p>
      </div>
      <p className="copyright">© 2025 SwapEx. All rights reserved.</p>
    </footer>
  );
}

export default Footer;