"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRef } from "react";


const products = [
  {
    name: "Spices",
    text: "Quality spices sourced according to your required specifications.",
    image:
      "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Fresh Vegetables",
    text: "Fresh produce selected around your quality and quantity requirements.",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=85",
  },
  {
    name: "Fresh Fruits",
    text: "Fruit sourcing tailored to your destination, quality and packing needs.",
    image:
      "https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&w=1200&q=85",
  },
];

const process = [
  ["01", "Tell us what you need", "Share your product, quantity, specifications and destination."],
  ["02", "We source", "We explore suitable sourcing options around your requirements."],
  ["03", "We coordinate", "Quality, packing and export requirements are coordinated with clarity."],
  ["04", "We export", "Once approved, we coordinate the shipment towards your destination."],
];

export default function Home() {

  useEffect(() => {
  /* =========================================
     GLOBAL MOUSE TRACKING
     ========================================= */

  const handleMouseMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${e.clientY}px`
    );

    /* =========================================
       IMAGE PARALLAX
       ========================================= */

    const parallaxImages =
      document.querySelectorAll<HTMLElement>("[data-parallax]");

    parallaxImages.forEach((element) => {
      const speed = Number(element.dataset.parallax) || 0.02;

      const rect = element.getBoundingClientRect();

      const x =
        (e.clientX - (rect.left + rect.width / 2)) * speed;

      const y =
        (e.clientY - (rect.top + rect.height / 2)) * speed;

      element.style.setProperty(
        "--parallax-x",
        `${x}px`
      );

      element.style.setProperty(
        "--parallax-y",
        `${y}px`
      );
    });
  };

  window.addEventListener("mousemove", handleMouseMove);

  /* =========================================
     SCROLL REVEAL
     ========================================= */

  const revealElements =
    document.querySelectorAll<HTMLElement>("[data-reveal]");

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        }
      });
    },
    {
      threshold: 0.15,
    }
  );

  revealElements.forEach((element) => {
    revealObserver.observe(element);
  });

  /* =========================================
     MAGNETIC BUTTONS
     ========================================= */

  const magneticElements =
    document.querySelectorAll<HTMLElement>("[data-magnetic]");

  const magneticHandlers = new Map<
    HTMLElement,
    (event: MouseEvent) => void
  >();

  magneticElements.forEach((element) => {
    const handler = (event: MouseEvent) => {
      const rect = element.getBoundingClientRect();

      const x =
        event.clientX -
        (rect.left + rect.width / 2);

      const y =
        event.clientY -
        (rect.top + rect.height / 2);

      const strength = 0.15;

      element.style.setProperty(
        "--magnetic-x",
        `${x * strength}px`
      );

      element.style.setProperty(
        "--magnetic-y",
        `${y * strength}px`
      );
    };

    magneticHandlers.set(element, handler);

    element.addEventListener("mousemove", handler);
  });

  /* =========================================
     CLEANUP
     ========================================= */

  return () => {
    window.removeEventListener(
      "mousemove",
      handleMouseMove
    );

    revealObserver.disconnect();

    magneticElements.forEach((element) => {
      const handler = magneticHandlers.get(element);

      if (handler) {
        element.removeEventListener(
          "mousemove",
          handler
        );
      }
    });
  };
}, []);

  useEffect(() => {
  const handleMouseMove = (e: MouseEvent) => {
    document.documentElement.style.setProperty(
      "--mouse-x",
      `${e.clientX}px`
    );

    document.documentElement.style.setProperty(
      "--mouse-y",
      `${e.clientY}px`
    );
  };

  window.addEventListener("mousemove", handleMouseMove);

  return () => {
    window.removeEventListener("mousemove", handleMouseMove);
  };
}, []);

  const cardRef = useRef<HTMLDivElement>(null);

const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
  const card = cardRef.current;

  if (!card) return;

  const rect = card.getBoundingClientRect();

  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  card.style.setProperty("--mouse-x", `${x}px`);
  card.style.setProperty("--mouse-y", `${y}px`);
};

const handleCardMouseLeave = () => {
  const card = cardRef.current;

  if (!card) return;

  card.style.setProperty("--mouse-x", "50%");
  card.style.setProperty("--mouse-y", "50%");
};

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="zowexo-site">
      {/* NAVBAR */}
      <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
        <a href="#home" className="brand">
          <Image
            src="/NEWLOGO1.PNG"
            alt="Zowexo Global"
            width={190}
            height={70}
            priority
            className="logo"
          />
        </a>

        <nav className="desktop-nav">
          <a href="#about">About</a>
          <a href="#products">Products</a>
          <a href="#process">How We Work</a>
          <a href="#contact">Contact</a>
        </nav>

        <a href="#contact" className="nav-button">
          Request a Quote
        </a>
      </header>

      {/* HERO */}
      <section id="home" className="hero">
<div className="zowexo-premium-shipping-line" aria-hidden="true">
  <span className="shipping-line-pulse"></span>
</div>


        <div className="zowexo-shipping-animation" aria-hidden="true">
  <div className="shipping-track-line"></div>

  <div className="shipping-ship">
    <span className="ship-container"></span>
    <span className="ship-container"></span>
    <span className="ship-container"></span>
  </div>
</div>

<div className="zowexo-trade-network" aria-hidden="true">
  <div className="trade-network-node supplier-node">
    <span className="network-dot"></span>
    <span>Supplier</span>
  </div>

  <div className="trade-network-line">
    <span className="network-light"></span>
  </div>

  <div className="trade-network-node zowexo-node">
    <span className="network-dot"></span>
    <span>ZOWEXO</span>
  </div>

  <div className="trade-network-line">
    <span className="network-light"></span>
  </div>

  <div className="trade-network-node buyer-node">
    <span className="network-dot"></span>
    <span>Global Buyer</span>
  </div>
</div>

        <div className="zowexo-trade-background" aria-hidden="true">
  <div className="zowexo-trade-route route-a">
    <span className="zowexo-trade-light"></span>
  </div>

  <div className="zowexo-trade-route route-b">
    <span className="zowexo-trade-light"></span>
  </div>

  <span className="zowexo-trade-point trade-point-a"></span>
  <span className="zowexo-trade-point trade-point-b"></span>
  <span className="zowexo-trade-point trade-point-c"></span>
</div>

        <div className="hero-glow hero-glow-one" />
        <div className="hero-glow hero-glow-two" />

        <div className="hero-content">
          <div className="eyebrow reveal">
            GLOBAL SOURCING • IMPORT • EXPORT
          </div>

          <h1 className="hero-title reveal reveal-delay-1">
            Your requirement.
            <span> Our global reach.</span>
          </h1>

          <p className="hero-description reveal reveal-delay-2">
            Zowexo Global connects international buyers with products sourced
            around their exact requirements — from spices and fresh produce to
            custom sourcing needs.
          </p>

          <div className="hero-actions reveal reveal-delay-3">
            <a href="#contact" className="primary-button">
              Discuss Your Requirement
              <span>→</span>
            </a>

            <a href="#products" className="secondary-button">
              Explore Products
            </a>
          </div>

         <div className="hero-trust reveal reveal-delay-4 flex flex-wrap items-center gap-x-6 gap-y-2">
  <span className="inline-flex items-center gap-2 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.06] hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
    <span className="text-[0.6em]">•</span>
    Requirement-led sourcing
  </span>

  <span className="inline-flex items-center gap-2 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.06] hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
    <span className="text-[0.6em]">•</span>
    Global export coordination
  </span>

  <span className="inline-flex items-center gap-2 cursor-pointer transition-all duration-500 ease-out hover:scale-[1.06] hover:text-white hover:drop-shadow-[0_0_6px_rgba(255,255,255,0.35)]">
    <span className="text-[0.6em]">•</span>
    Buyer focused
  </span>
</div>
        </div>

        <div className="hero-visual">
          <div className="hero-image" />
          <div className="hero-image-overlay" />
          <div className="hero-image-reveal" />

          <div
  ref={cardRef}
  className="hero-card"
  onMouseMove={handleCardMouseMove}
  onMouseLeave={handleCardMouseLeave}
>
            <small>ZOWEXO GLOBAL</small>
            <strong className="hero-text-reveal title">
  Sourcing beyond borders.
</strong>
            <span className="hero-text-reveal description">
  Built around your requirements.
</span>
          </div>
        </div>

        <div className="scroll-indicator">
          <span />
          Scroll to explore
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="trust-strip">
       <div className="trust-item">
  <strong>Buyer First</strong>
  <span>Requirements come first</span>
</div>

<div className="trust-item">
  <strong>Flexible Sourcing</strong>
  <span>Built around your needs</span>
</div>

<div className="trust-item">
  <strong>Quality Focus</strong>
  <span>Specifications matter</span>
</div>

<div className="trust-item">
  <strong>Global Reach</strong>
  <span>Export coordination</span>
</div>
      </section>

      {/* ABOUT */}
      <section id="about" className="about-section">
        <div className="section-label">WHY ZOWEXO GLOBAL</div>

        <div className="about-grid">
          <div>
            <h2>
              More than a supplier.
              <br />
              <span>A sourcing partner.</span>
            </h2>
          </div>

          <div>
            <p>
              International buyers often need more than a product catalogue.
              They need someone who understands their specifications,
              quantities, quality expectations, packaging and destination.
            </p>

            <p>
              Zowexo Global works around that requirement. Tell us what you
              need, and we work on sourcing and coordinating the export
              journey.
            </p>

            <a href="#contact" className="text-link">
              Talk to our team <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section id="products" className="products-section">
        <div className="section-heading">
          <div>
            <div className="section-label dark">WHAT WE SOURCE</div>
            <h2>
              Products that match
              <br />
              <span>your requirements.</span>
            </h2>
          </div>

          <p>
            Our range is flexible. If you don't see what you need, simply tell
            us what you're looking for.
          </p>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <article
              className="product-card"
              key={product.name}
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div
                className="product-image"
                style={{ backgroundImage: `url(${product.image})` }}
              />

              <div className="product-overlay" />

              <div className="product-content">
                <span>0{index + 1}</span>
                <h3>{product.name}</h3>
                <p>{product.text}</p>
                <a href="#contact">Enquire →</a>
              </div>
            </article>
          ))}

          <article className="product-card custom-card">
            <div className="custom-symbol">+</div>

            <div className="product-content">
              <span>04</span>
              <h3>Something else?</h3>
              <p>
                Tell us what product you need. We can explore sourcing options
                based on your requirements.
              </p>
              <a href="#contact">Send your requirement →</a>
            </div>
          </article>
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" className="process-section">
        <div className="process-header">
          <div className="section-label">HOW WE WORK</div>

          <h2>
            Simple process.
            <br />
            <span>Clear communication.</span>
          </h2>
        </div>

        <div className="process-grid">
          {process.map(([number, title, text]) => (
            <div className="process-card" key={number}>
              <div className="process-number">{number}</div>
              <div className="process-line" />
              <h3>{title}</h3>
              <p>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-orbit orbit-one" />
        <div className="cta-orbit orbit-two" />

        <div className="cta-content">
          <div className="section-label">LET'S START A CONVERSATION</div>

          <h2>
            Looking for a product?
            <br />
            <span>Tell us what you need.</span>
          </h2>

          <p>
            Share your product requirements, quantity and destination. Our team
            can explore the sourcing possibilities for you.
          </p>

          <a href="#contact" className="primary-button light">
            Request a Quote
            <span>→</span>
          </a>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
        <div className="contact-info">
          <div className="section-label dark">CONTACT ZOWEXO GLOBAL</div>

          <h2>
            Tell us what
            <br />
            <span>you need.</span>
          </h2>

          <p>
            Whether you need spices, fresh produce or a product that isn't
            listed on our website, send us your requirement.
          </p>

          <div className="contact-details">
            <div>
              <small>EMAIL</small>
              <strong>NIYAS M</strong>
              <strong>zowexoglobal@gmail.com</strong>
            </div>

            <div>
              <small>BUSINESS ENQUIRIES</small>
              <strong>International Buyers & Importers</strong>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <div className="form-row">
            <input placeholder="Your name" />
            <input placeholder="Company name" />
          </div>

          <input placeholder="Business email" />

          <input placeholder="Country" />

          <textarea
            rows={6}
            placeholder="Tell us what product you are looking for, quantity, specifications, destination..."
          />

          <button>
            Send Requirement
            <span>→</span>
          </button>

          <small>
            We use your information only to respond to your business enquiry.
          </small>
        </div>
      </section>

      {/* FOOTER */}
<footer className="footer">

  {/* Company */}
  <div className="footer-logo-wrap">
  <img
    src="/NEWLOGO.PNG"
    alt="Zowexo Global"
    className="footer-logo"
  />
</div>
    <p>
      Global sourcing & export.
    </p>

    <p className="footer-description">
      Connecting reliable suppliers to trusted buyers
      worldwide.
    </p>
  


  {/* Navigation */}
  <div className="footer-column">
    <h3>Explore</h3>

    <a href="#about">About Us</a>
    <a href="#products">Products</a>
    <a href="#process">How We Work</a>
    <a href="#contact">Contact</a>
  </div>


  {/* Contact */}
  <div className="footer-column">
    <h3>Reach Us</h3>

    <p>📍 Wayanad , Kerala, India</p>

    <p>
      📞 <a href="tel:+918089478135">+91 80894 78135</a>
    </p>

    <p>
      ✉️ <a href="mailto:zowexoglobal@gmail.com">
        zowexoglobal@gmail.com
      </a>
    </p> 

    <div className="social-links">

  <a
    href="https://wa.me/918089478135"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="WhatsApp"
  >
    <span className="social-icon whatsapp-icon"> ◉ </span>
    <span>WhatsApp</span>
  </a>

  <a
    href="https://instagram.com/zowexo_global"
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Instagram"
  >
    <span className="social-icon instagram-icon"> ◎ </span>
    <span>Instagram</span>
  </a>

</div>
</div>


  {/* Copyright */}
  <div className="copyright">
        © {new Date().getFullYear()} Zowexo Global. All rights reserved.
      </div>
    </footer>

  </main>
);
}