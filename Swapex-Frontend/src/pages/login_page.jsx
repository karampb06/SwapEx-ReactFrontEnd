import './login_Page.css';

function LoginPage() {
  return (
    <div className="login-page">
      <header className="header">
        <img src="/vite.svg" alt="SwapEx Logo" className="logo" />
        <h1>Login to SwapEx</h1>
      </header>
      <form className="login-form">
        <label>Email ID</label>
        <input type="email" placeholder="Enter your email" />
        <label>Password</label>
        <input type="password" placeholder="Enter your password" />
        <button type="submit" className="btn">Login</button>
        <a href="#" className="forgot-password">Forgot Password?</a>
      </form>
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
    </div>
  );
}

export default LoginPage;