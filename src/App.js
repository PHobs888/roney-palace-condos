import { useState, useEffect } from "react";
import "./Home.css";
import Navbar from "./components/Navbar";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://roneypalacecondos.com/api/listings-api.php")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch listings");
        return res.json();
      })
      .then((data) => {
        setListings(data.bundle || []);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError(err.message);
        setLoading(false);
      });
  }, []);
  
  return (
    <>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero" id="home">
        <div className="hero-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">Roney Palace Condos for Sale & Rent in Miami Beach</h1>
          <p className="hero-subtitle">
            Luxury beachfront residences at 2301 Collins Ave, Miami Beach
          </p>
          <img
         src="/roney-hero.jpg"
         alt="Roney Palace oceanfront condos in Miami Beach at 2301 Collins Ave"
         style={{ display: "none" }}
/>
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

  {loading && <p>Loading listings…</p>}
  {error && <p style={{ color: "red" }}>Error: {error}</p>}

  <div className="listings-grid">
    {listings.map((listing) => (
      <div className="listing-card" key={listing.ListingKey}>
        <h3>
          {listing.StreetNumber} {listing.StreetName}
        </h3>
        <p>Price: ${listing.ListPrice?.toLocaleString()}</p>
        <p>Beds: {listing.BedroomsTotal}</p>
        <p>Baths: {listing.BathroomsTotalInteger}</p>
      </div>
    ))}
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
          <h3>Paul Hobson</h3>
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
