import "./Home.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Roney Palace Condos</h1>
          <p className="hero-subtitle">
            Luxury beachfront residences at 2301 Collins Ave, Miami Beach
          </p>

          <div className="hero-buttons">
            <a href="#sale" className="btn-primary">
              Condos for Sale
            </a>
            <a href="#rent" className="btn-secondary">
              Condos for Rent
            </a>
          </div>
        </div>
      </div>

      {/* ABOUT SECTION */}
      <section className="about" id="info">
        <h2>About Roney Palace</h2>
        <p>
          Roney Palace is one of Miami Beach’s premier oceanfront residences,
          located directly on the sand and sharing amenities with the world-class
          1 Hotel. With short-term rental flexibility (30 days), strong investor
          demand, and resort-style amenities, the building attracts both luxury
          buyers and high-yield short-term rental investors.
        </p>
      </section>

      {/* SALE SECTION */}
      <section className="sale-section" id="sale">
        <h2>Condos For Sale</h2>
        <p className="section-note">
          MLS listings will appear here automatically once your IDX access is
          activated.
        </p>

        <div className="listing-placeholder">
          <p>Listings loading soon...</p>
        </div>
      </section>

      {/* RENT SECTION */}
      <section className="rent-section" id="rent">
        <h2>Condos For Rent</h2>
        <p className="section-note">
          Rental listings will be displayed here once IDX access is active.
        </p>

        <div className="listing-placeholder">
          <p>Rental listings loading soon...</p>
        </div>
      </section>

      {/* AMENITIES SECTION */}
      <section className="amenities">
        <h2>Building Features & Amenities</h2>

        <div className="amenities-grid">
          <div className="amenity-card">Oceanfront Pool Deck</div>
          <div className="amenity-card">1 Hotel Shared Amenities</div>
          <div className="amenity-card">Full-Service Beach Club</div>
          <div className="amenity-card">24/7 Valet Parking</div>
          <div className="amenity-card">Fitness Center</div>
          <div className="amenity-card">Spa & Wellness</div>
          <div className="amenity-card">On-Site Restaurants & Bars</div>
          <div className="amenity-card">30-Day Rentals Allowed</div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="contact" id="contact">
        <h2>Contact</h2>
        <p className="contact-intro">
          Interested in buying, renting, or investing at Roney Palace? Contact
          me anytime — I respond quickly.
        </p>

        <div className="contact-card">
          <h3>Paul H.</h3>
          <p className="contact-title">
            Real Estate Advisor · Coldwell Banker Realty
          </p>

          <p className="contact-row">
            <span className="icon">📧</span>
            <a href="mailto:info@roneypalacecondos.com">
              info@roneypalacecondos.com
            </a>
          </p>

          <p className="contact-row">
            <span className="icon">📞</span>
            <a href="tel:6172129970">(617) 212-9970</a>
          </p>

          <a href="mailto:info@roneypalacecondos.com" className="contact-button">
            Request More Information
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} RoneyPalaceCondos.com</p>
        <p>Presented by Coldwell Banker Realty</p>
        <p>
          Contact:{" "}
          <a href="mailto:info@roneypalacecondos.com">
            info@roneypalacecondos.com
          </a>
        </p>
        <p className="disclaimer">
          This website is not affiliated with, sponsored by, or associated with
          Roney Palace Condominium Association, Inc.
        </p>
        <p className="footer-copy">
          © {new Date().getFullYear()} All Rights Reserved
        </p>
      </footer>
    </>
  );
}

export default App;
