/* Street-side Chapter: warm editorial restaurant page, offset composition, Chapter Green + curry orange, useful motion only. */
import { useEffect, useRef } from "react";
import {
  ArrowDownRight,
  ArrowUpRight,
  Clock3,
  ExternalLink,
  Instagram,
  MapPin,
  MessageCircle,
  Phone,
  Sparkles,
  Utensils,
} from "lucide-react";

const ASSETS = {
  mark: "/brand-mark.svg",
  heroVideo: "/manus-storage/food-chapter-hero_755e2c79.mp4",
  heroPoster: "/manus-storage/food-chapter-hero-poster_a7c9a852.jpg",
  menuArtwork: "/manus-storage/food-chapter-menu_a7afd19d.jpg",
  paperTexture: "",
};

const phone = "+92 328 4118664";
const telHref = "tel:+923284118664";
const whatsappHref = "https://wa.me/923284118664?text=Hi%20Food%20Chapter%2C%20I%27d%20like%20to%20place%20an%20order.";
const mapsHref = "https://www.google.com/maps/dir/?api=1&destination=Food%20Chapter%2C%208%2FA%20Commercial%20Market%2C%20Mohlanwal%20Road%2C%20Lahore%2054000%2C%20Pakistan";
const instagramHref = "https://www.instagram.com/foodchaptergb/";

const menuSections = [
  {
    name: "Appetizer",
    note: "Start the chapter",
    items: [
      ["Fat Wings", "6 piece", "400/-"],
      ["Nuggets", "5 piece", "400/-"],
      ["Tendr", "4 piece", "450/-"],
    ],
  },
  {
    name: "Burgers",
    note: "Built for the first bite",
    items: [
      ["Pizza Burger", "", "449/-"],
      ["Zinger Burger", "", "399/-"],
      ["Grilled Burger", "", "449/-"],
      ["Might Grappy", "", "599/-"],
      ["Chicken Patty Burger", "", "349/-"],
      ["Fillet Burger", "", "400/-"],
    ],
  },
  {
    name: "Fries",
    note: "The side plot",
    items: [
      ["Curly Fries", "M 400/- · L 550/-", ""],
      ["Waff le Fries", "M 400/- · L 550/-", ""],
      ["Plain Fries", "M 300/- · L 450/-", ""],
      ["Pizza Loaded Fries", "M 500/- · L 700/-", ""],
      ["Loaded Fries", "M 400/- · L 500/-", ""],
    ],
  },
  {
    name: "Wraps",
    note: "Roll with it",
    items: [
      ["Zinger Crispy Wrap", "", "499/-"],
      ["Tortila Wrap", "", "499/-"],
      ["Smokey Grill Wrap", "", "499/-"],
    ],
  },
  {
    name: "Sandwich",
    note: "Between two good ideas",
    items: [
      ["Club Sandwich", "", "449/-"],
      ["Cocktail Sandwich", "", "449/-"],
    ],
  },
  {
    name: "Broast",
    note: "For the table",
    items: [
      ["Quarter Broast", "", "799/-"],
      ["Half Broast", "", "1599/-"],
      ["Full Broast", "", "2399/-"],
    ],
  },
  {
    name: "Pizza",
    note: "Make it a large chapter",
    items: [
      ["Chicken Tikka", "S 500/- · M 950/- · L 1400/-", ""],
      ["Chicken Fajita", "S 500/- · M 950/- · L 1400/-", ""],
      ["Super Supreme", "S 550/- · M 950/- · L 1450/-", ""],
      ["Crown Crust", "S 680/- · M 999/- · L 1480/-", ""],
      ["Malai Boti", "S 680/- · M 999/- · L 1480/-", ""],
      ["Stuff Kabab", "S 680/- · M 999/- · L 1480/-", ""],
      ["Seekh Kabab", "S 680/- · M 999/- · L 1480/-", ""],
    ],
  },
];

const deals = [
  ["Deal-1", "Zinger Burger · Regular Fries · 345ml Drink", "580/-"],
  ["Deal-2", "2 Zinger Burger · 345ml Drink", "850/-"],
  ["Deal-3", "3 Zinger Burger · With Fries · 1.5 Liter Drink", "1499/-"],
  ["Deal-4", "4 Zinger Burger · 4 Wings · 1 Medium Plain Fries · 1.5 Liter Drink", "1999/-"],
  ["Deal-5", "1 Wrap · With Fries · 345ml Drink", "650/-"],
  ["Deal-6", "5 Zinger Burger · 1 Medium Plain Fries · 1.5 Liter Drink", "2400/-"],
  ["Deal-7", "Small Pizza · 5 Wings · 350ml Drink", "900/-"],
  ["Deal-8", "Medium Pizza · 10 Wings · 1.5 Liter Drink", "1550/-"],
  ["Deal-9", "Large Pizza · 1.5 Liter Drink", "1550/-"],
  ["Deal-10", "2 Zinger Burger · 1 Club Sandwich · 1.5 Liter Drink", "1150/-"],
  ["Deal-11", "2 Small Pizza · 1.5 Liter Drink", "1150/-"],
  ["Deal-12", "2 Medium Pizza · 1.5 Liter Drink", "1950/-"],
  ["Deal-13", "2 Large Pizza · 1.5 Liter Drink", "2850/-"],
  ["Deal-14", "1 Mighty Burger · Regular Fries · 345ml Drink", "700/-"],
  ["Family Festival Deal", "1 Large Pizza · 2 Zinger Burger · 5 Piece Wings · 1.5 Liter Drink", "2650/-"],
];

function SectionKicker({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-kicker">
      <span className="section-kicker__number">{number}</span>
      <span>{children}</span>
    </div>
  );
}

export default function Home() {
  const heroBack = useRef<HTMLDivElement>(null);
  const heroMid = useRef<HTMLDivElement>(null);
  const heroFront = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduceMotion.matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const y = window.scrollY;
      if (heroBack.current) heroBack.current.style.transform = `translate3d(0, ${y * 0.08}px, 0) scale(1.04)`;
      if (heroMid.current) heroMid.current.style.transform = `translate3d(0, ${y * -0.045}px, 0)`;
      if (heroFront.current) heroFront.current.style.transform = `translate3d(0, ${y * -0.1}px, 0)`;
    };
    const onScroll = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <main>
      <header className="site-nav">
        <a className="brand" href="#top" aria-label="Food Chapter home">
          <img src={ASSETS.mark} alt="" className="brand__mark" />
          <span className="brand__wordmark"><b>FOOD</b><b>CHAPTER</b></span>
        </a>
        <nav className="site-nav__links" aria-label="Primary navigation">
          <a href="#menu">Menu</a>
          <a href="#story">The story</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="nav-order" href={whatsappHref} target="_blank" rel="noreferrer">
          <MessageCircle size={15} /> WhatsApp first
        </a>
      </header>

      <section id="top" className="hero" aria-labelledby="hero-title">
        <div ref={heroBack} className="hero__back" aria-hidden="true">
          <video className="hero__video" autoPlay muted loop playsInline poster={ASSETS.heroPoster} preload="metadata">
            <source src={ASSETS.heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero__shade" aria-hidden="true" />
        <div ref={heroMid} className="hero__mid" aria-hidden="true">
          <span className="hero__stamp">EST. / LAHORE<br /><em>chapter 01</em></span>
        </div>
        <div ref={heroFront} className="hero__front" aria-hidden="true">
          <div className="hero__scribble hero__scribble--one" />
          <div className="hero__scribble hero__scribble--two" />
        </div>
        <div className="hero__content">
          <SectionKicker number="00" children="Gulbahar Colony · Lahore" />
          <h1 id="hero-title">Make this<br /><i>your next</i><br />chapter.</h1>
          <p className="hero__dek">Burgers, pizza, wraps, fries, and broast for the kind of hunger that deserves a proper plot.</p>
          <div className="hero__actions">
            <a className="button button--orange" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Start on WhatsApp</a>
            <a className="button button--ghost" href="#menu">Read the menu <ArrowDownRight size={17} /></a>
          </div>
        </div>
        <div className="hero__footer"><span>Fast food restaurant</span><span className="hero__scroll"><span className="hero__scroll-line" /> Scroll to browse</span><span>54000 · PK</span></div>
      </section>

      <section id="story" className="story section-shell">
        <div className="story__label"><SectionKicker number="01" children="A little context" /><span className="side-note">Good food, no long preface.</span></div>
        <div className="story__copy">
          <h2>A familiar place<br /><i>with a little spark.</i></h2>
          <p>Food Chapter is a fast-food spot in Lahore’s Gulbahar Colony, made for easy decisions and satisfying detours. Come in for a quick bite, take it away for the road, or skip straight to the chat and let your next order write itself.</p>
          <a className="text-link" href={mapsHref} target="_blank" rel="noreferrer">Find the chapter <ArrowUpRight size={16} /></a>
        </div>
        <div className="story__visual">
          <img src={ASSETS.menuArtwork} alt="Food Chapter menu artwork with burgers, fries, wraps, broast, pizza, and deals" loading="lazy" />
          <span className="story__caption">A close-up worth pausing for.</span>
        </div>
      </section>

      <section id="menu" className="menu section-shell">
        <div className="menu__intro">
          <SectionKicker number="02" children="The main chapter" />
          <h2>Choose your<br /><i>plot twist.</i></h2>
          <p>The menu as supplied by Food Chapter. Prices shown in PKR notation from the current menu card.</p>
          <div className="menu__rule" />
          <p className="menu__small">Order for dine-in or takeout. For the fastest route, message first.</p>
          <a className="button button--green" href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={17} /> Message to order</a>
        </div>
        <div className="menu__list">
          {menuSections.map((section) => (
            <article className="menu-group" key={section.name}>
              <div className="menu-group__head"><h3>{section.name}</h3><span>{section.note}</span></div>
              <div className="menu-group__items">
                {section.items.map(([name, detail, price]) => <div className="menu-item" key={name}><span><b>{name}</b>{detail && <small>{detail}</small>}</span>{price && <strong>{price}</strong>}</div>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="deals section-shell">
        <div className="deals__head"><SectionKicker number="03" children="Group scenes" /><h2>Deals made<br /><i>for sharing.</i></h2></div>
        <div className="deal-grid">{deals.map(([name, detail, price]) => <article className="deal" key={name}><span className="deal__name">{name}</span><p>{detail}</p><strong>{price}</strong></article>)}</div>
      </section>

      <section className="reviews section-shell">
        <div className="reviews__head"><SectionKicker number="04" children="From the guestbook" /><h2>Real words.<br /><i>No rewrite.</i></h2><span className="rating">3.7 <span>★</span> <small>20 Google reviews</small></span></div>
        <div className="review-grid">
          <figure className="review"><div className="review__stars">★★★★★</div><blockquote>“Pizza is rated 3/10”</blockquote><figcaption>Zeeshan Khaliq <span>· 8 months ago</span></figcaption></figure>
          <figure className="review review--offset"><div className="review__stars">★★★★★</div><blockquote>“The service was very good in past but from last two orders. The order delivered very late and very cold.”</blockquote><figcaption>Ahmad Ali <span>· 3 months ago</span></figcaption></figure>
          <figure className="review"><div className="review__stars">★★★★★</div><blockquote>“The food tasted really good and it was a great first experience”</blockquote><figcaption>Rayyan Aziz <span>· 2 years ago</span></figcaption></figure>
        </div>
        <p className="reviews__note">Highlights shown verbatim from the supplied Google Maps listing.</p>
      </section>

      <section id="visit" className="visit section-shell">
        <div className="visit__main"><SectionKicker number="05" children="Come by" /><h2>Find the<br /><i>chapter.</i></h2><p className="visit__address">8/A, Commercial Market,<br />Mohlanwal Road, behind Khursheed Rasheed Hospital,<br />Gulbahar Colony Gul Bahar Housing Society,<br />Lahore, 54000, Pakistan</p><a className="button button--orange" href={mapsHref} target="_blank" rel="noreferrer"><MapPin size={17} /> Get directions <ExternalLink size={14} /></a></div>
        <div className="visit__details">
          <div className="detail-block"><Clock3 size={19} /><div><span className="detail-block__label">Hours</span><p>Hours are not listed on the supplied Google Maps information.</p></div></div>
          <div className="detail-block"><Utensils size={19} /><div><span className="detail-block__label">Service</span><p>Dine-in · Takeout</p></div></div>
          <div className="detail-block"><Phone size={19} /><div><span className="detail-block__label">Call</span><a href={telHref}>{phone}</a></div></div>
          <div className="detail-block"><Sparkles size={19} /><div><span className="detail-block__label">What’s nearby</span><p>Lahore Canal Bank Cooperative Housing Society Phase-1 Lahore, Punjab</p></div></div>
        </div>
      </section>

      <footer className="footer">
        <div className="footer__top"><a className="brand brand--footer" href="#top"><img src={ASSETS.mark} alt="" className="brand__mark" /><span className="brand__wordmark"><b>FOOD</b><b>CHAPTER</b></span></a><p>Some call it food.<br /><i>We call it a chapter.</i></p><a className="footer__arrow" href="#top" aria-label="Back to top"><ArrowUpRight /></a></div>
        <div className="footer__bottom"><span>© Food Chapter · Lahore, Pakistan</span><span className="footer__actions"><a href={whatsappHref} target="_blank" rel="noreferrer"><MessageCircle size={15} /> WhatsApp</a><a href={telHref}><Phone size={15} /> {phone}</a><a href={instagramHref} target="_blank" rel="noreferrer"><Instagram size={15} /> foodchaptergb</a></span></div>
      </footer>
    </main>
  );
}
