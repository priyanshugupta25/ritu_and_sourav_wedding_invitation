import { useCallback, useEffect, useRef, useState } from 'react';
import {
  brideImage,
  frontLogo,
  groomImage,
  haldiImage,
  img1,
  img2,
  img3,
  img4,
  mehendiImage,
  scratchLogo,
  sangeetImage,
  shubhVivahImage,
  weddingDate,
  weddingMusic,
  weddingImage,
  venueAddress,
  venueName,
} from './data.js';

const galleryPhotos = [
  { image: img1, title: 'A day to remember', caption: 'A celebration filled with love' },
  { image: img2, title: 'Two hearts, one promise', caption: 'The beginning of forever' },
  { image: img3, title: 'Little moments', caption: 'Memories made with love' },
  { image: img4, title: 'Together is beautiful', caption: 'A lifetime of new memories' },
];

const events = [
  {
    number: 'EVENT 01 · HALDI',
    title: 'Haldi Ceremony',
    tagline: 'Turmeric, Love & Phoolon Ki Holi',
    quote: 'Come and bless us as we cover ourselves in love and turmeric at our Haldi ceremony!',
    date: 'Thursday, November 19, 2026',
    time: '12:00 PM onwards',
    dressCode: 'Shades of Sunshine Yellow & Marigold',
    image: haldiImage,
    start: '20261119T120000',
    end: '20261119T130000',
  },
  {
    number: 'EVENT 02 · SANGEET',
    title: 'Sangeet Ceremony',
    tagline: 'Melodies, Memories & Magical Performances',
    quote: 'A night of music, a stage full of memories, and hearts full of love — come celebrate our Sangeet with us!',
    date: 'Thursday, November 19, 2026',
    time: '6:00 PM onwards',
    dressCode: 'Glamorous evening wear, Indo-western & Lehengas',
    image: sangeetImage,
    start: '20261119T180000',
    end: '20261119T230000',
  },
  {
    number: 'EVENT 03 · MEHENDI',
    title: 'Mehendi Ceremony',
    tagline: 'Intricate Henna, Laughter & Celebrations',
    quote: 'Join us for an evening of love, laughter, and beautiful Mehendi as we celebrate the beginning of a new journey!',
    date: 'Thursday, November 19, 2026',
    time: '8:00 PM onwards',
    dressCode: 'Emerald Green & Vibrant Floral Hues',
    image: mehendiImage,
    start: '20261119T200000',
    end: '20261119T235900',
  },
  {
    number: 'EVENT 04 · THE BIG DAY',
    title: 'Wedding Ceremony',
    tagline: 'The Auspicious Vedic Union & Sacred Phere',
    quote: 'You are cordially invited to our wedding ceremony. Join us for the sacred seven vows as Ritu and Sourav begin their eternal journey.',
    date: 'Friday, November 20, 2026',
    time: '8:00 PM onwards · Muhurat: 8:15 PM',
    dressCode: 'Royal Indian Traditional · Sherwanis & Lehengas',
    image: weddingImage,
    start: '20261120T200000',
    end: '20261120T235900',
    featured: true,
  },
];

function SectionHeading({ eyebrow, title, accent, suffix, hindi }) {
  return (
    <div className="section-heading">
      <p className="section-kicker">{eyebrow}</p>
      <h2 className="section-title">
        {title} {accent && <em>{accent}</em>} {suffix}
      </h2>
      {hindi && <p className="section-hindi hindi">{hindi}</p>}
    </div>
  );
}

function InvitationCover({ onOpen, onStartMusic }) {
  const [opening, setOpening] = useState(false);
  const [closing, setClosing] = useState(false);
  const [confetti, setConfetti] = useState([]);

  function openInvitation() {
    if (opening) return;
    setOpening(true);
    onStartMusic();
    setConfetti(Array.from({ length: 85 }, (_, index) => ({
      id: index,
      left: `${45 + Math.random() * 10}%`,
      top: `${39 + Math.random() * 18}%`,
      color: ['#b8924c', '#f2d59a', '#8c2943', '#c95468', '#e6b7ac', '#fff4d7'][index % 6],
      dx: `${Math.random() * 100 - 50}vw`,
      dy: `${Math.random() * 85 - 42}vh`,
      rotation: `${Math.random() * 1000 - 500}deg`,
      delay: `${Math.random() * 210}ms`,
    })));
    window.setTimeout(() => setClosing(true), 1550);
    window.setTimeout(() => setConfetti([]), 2200);
    window.setTimeout(onOpen, 2300);
  }

  return (
    <section className={`invitation-cover${opening ? ' is-opening' : ''}${closing ? ' is-closing' : ''}`} aria-label="Wedding invitation cover">
      <span className="cover-flower cover-flower-left" aria-hidden="true">✿</span>
      <span className="cover-flower cover-flower-right" aria-hidden="true">✧</span>
      <div className="cover-intro">
        <img className="cover-logo" src={frontLogo} alt="" />
        <p className="cover-kicker">A wedding invitation</p>
        <img className="cover-title-art" src={shubhVivahImage} alt="शुभ विवाह" />
      </div>
      <button className="envelope" type="button" onClick={openInvitation} disabled={opening} aria-label="Open the wedding invitation">
        <span className="envelope-letter" aria-hidden="true">
          <span className="envelope-letter-ornament">✦</span>
          <span className="hindi">शुभ विवाह</span>
          <strong>RITU RAJ</strong>
          <em>&</em>
          <strong>SOURAV KUMAR</strong>
          <small>20 NOVEMBER 2026</small>
        </span>
        <span className="envelope-flap" />
        <span className="envelope-front" />
        <span className="envelope-seal" aria-hidden="true">R<span>♡</span>S</span>
      </button>
      <div className="cover-copy">
        <p className="cover-invited">You're invited to celebrate the wedding of</p>
        <h1>Ritu Raj &amp; Sourav Kumar</h1>
        <p className="hindi">आप सपरिवार सादर आमंत्रित हैं</p>
        <p className="cover-hint">
          <span>Tap the envelope to open</span>
          <span className="hindi">लिफ़ाफ़ा खोलें</span>
        </p>
      </div>
      <p className="cover-footer">Made with love &amp; blessings</p>
      <div className="confetti-layer" aria-hidden="true">
        {confetti.map((piece) => (
          <span
            className={`confetti-piece${piece.id % 7 === 0 ? ' is-round' : ''}${piece.id % 5 === 0 ? ' is-ribbon' : ''}`}
            key={piece.id}
            style={{
              '--left': piece.left,
              '--top': piece.top,
              '--color': piece.color,
              '--dx': piece.dx,
              '--dy': piece.dy,
              '--rotation': piece.rotation,
              '--delay': piece.delay,
            }}
          />
        ))}
      </div>
    </section>
  );
}

function SiteHeader({ musicOn, onToggleMusic }) {
  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Ritu and Sourav wedding invitation home">
        {/* <span className="brand-caption">The wedding of</span> */}
        <span className="brand-monogram">R<span>&amp;</span>S</span>
      </a>
      <nav className="main-nav" aria-label="Main navigation">
        <a href="#couple">The couple</a>
        <a href="#events">Events</a>
        <a href="#gallery">Gallery</a>
        <a href="#venue">Venue</a>
      </nav>
      <div className="header-actions">
        <button className="music-button" type="button" onClick={onToggleMusic} aria-pressed={musicOn}>
          <span aria-hidden="true">{musicOn ? '♫' : '♪'}</span>{musicOn ? 'Music on' : 'Play music'}
        </button>
      </div>
    </header>
  );
}

function HeroSection() {
  return (
    <section className="hero-section" id="home">
      <span className="hero-ornament hero-ornament-left" aria-hidden="true">✿</span>
      <span className="hero-ornament hero-ornament-right" aria-hidden="true">❀</span>
      <p className="section-kicker">Together with their families</p>
      <p className="hero-hindi hindi">दो दिल, एक खूबसूरत शुरुआत</p>
      <h2 className="hero-names"><span>Ritu Raj</span><span className="hero-ampersand">&amp;</span><span>Sourav Kumar</span></h2>
      <span className="ornamental-divider" aria-hidden="true">✦</span>
      <p className="hero-copy">Joyfully invite you to celebrate the beginning of their forever.</p>
      <p className="hero-copy hindi">इस शुभ अवसर पर आपकी उपस्थिति हमारे लिए सौभाग्य होगी।</p>
      <div className="hero-date">
        <span />
        <div><small>Save the date</small><strong>20 November 2026</strong><span className="hindi">शुक्रवार, 20 नवम्बर 2026</span></div>
        <span />
      </div>
      <a className="scroll-cue" href="#couple"><span aria-hidden="true">↓</span>Scroll to explore</a>
    </section>
  );
}

function CoupleSection() {
  const people = [
    {
      name: 'Ritu Raj',
      role: 'The bride',
      family: 'Daughter of Smt. Mamta Devi & Shri Kundan Kumar',
      image: brideImage,
      alt: 'Ritu Raj, the bride',
      message: 'Ready for their beautiful forever',
    },
    {
      name: 'Sourav Kumar',
      role: 'The groom',
      family: 'Son of Smt. Neelam Devi & Shri Sunil Kumar',
      image: groomImage,
      alt: 'Sourav Kumar, the groom',
      message: 'Ready for a lifetime of memories',
    },
  ];

  return (
    <section className="page-section couple-section" id="couple">
      <SectionHeading eyebrow="Meet the couple" title="Two souls," accent="one destiny" hindi="दो दिल, एक खूबसूरत शुरुआत" />
      <div className="couple-grid">
        {people.map((person) => (
          <article className="couple-card" key={person.role}>
            <div className="portrait-frame"><img src={person.image} alt={person.alt} loading="lazy" /></div>
            <p className="portrait-role">{person.role}</p>
            <h3>{person.name}</h3>
            <p className="family-line">{person.family}</p>
            <p>{person.message}</p>
          </article>
        ))}
      </div>
      <p className="section-intro">With the blessings of our families, we invite you to celebrate our wedding.</p>
    </section>
  );
}

function CountdownSection() {
  const [remaining, setRemaining] = useState(() => getTimeRemaining());

  useEffect(() => {
    const timer = window.setInterval(() => setRemaining(getTimeRemaining()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="page-section countdown-section" id="story">
      <SectionHeading eyebrow="The countdown begins" title="Until our" accent="forever" suffix="begins" hindi="शुभ दिन आने में अब" />
      <div className="countdown-grid" aria-label="Time until the wedding">
        {[
          ['Days', 'दिन', remaining.days],
          ['Hours', 'घंटे', remaining.hours],
          ['Minutes', 'मिनट', remaining.minutes],
          ['Seconds', 'सेकंड', remaining.seconds],
        ].map(([label, hindi, value]) => (
          <div className="countdown-unit" key={label}>
            <strong>{String(value).padStart(2, '0')}</strong>
            <span>{label}</span>
            <small className="hindi">{hindi}</small>
          </div>
        ))}
      </div>
      <p className="countdown-note">Counting down to the wedding day · विवाह के शुभ दिन तक</p>
      <blockquote className="blessing-card">
        <span className="quote-mark" aria-hidden="true">“</span>
        <p>Two families, two journeys, one beautiful promise.</p>
        <p className="hindi">प्रेम, विश्वास और साथ के नए सफ़र की शुरुआत।</p>
        <cite>With the blessings of our families</cite>
      </blockquote>
    </section>
  );
}

function getTimeRemaining() {
  const totalSeconds = Math.max(0, Math.floor((weddingDate.getTime() - Date.now()) / 1000));
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

function ScratchCard({ onComplete }) {
  const canvasRef = useRef(null);
  const [revealed, setRevealed] = useState(false);
  const [surfaceReady, setSurfaceReady] = useState(false);
  const [surfaceError, setSurfaceError] = useState(false);
  const revealedRef = useRef(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d', { willReadFrequently: true });
    if (!canvas || !context || revealed) return undefined;

    let isScratching = false;
    const logo = new Image();

    const resize = () => {
      const { width, height } = canvas.getBoundingClientRect();
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
      const foil = context.createLinearGradient(0, 0, width, height);
      foil.addColorStop(0, '#8d2944');
      foil.addColorStop(0.48, '#76213a');
      foil.addColorStop(1, '#54172b');
      context.globalCompositeOperation = 'source-over';
      context.fillStyle = foil;
      context.fillRect(0, 0, width, height);
      if (logo.complete && logo.naturalWidth > 0) {
        const logoWidth = Math.min(width * 0.76, 340);
        const logoHeight = logoWidth * logo.height / logo.width;
        context.drawImage(
          logo,
          (width - logoWidth) / 2,
          (height - logoHeight) / 2,
          logoWidth,
          logoHeight,
        );
      }
      context.globalCompositeOperation = 'destination-out';
    };

    function checkScratchProgress() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      const step = Math.max(1, Math.round(12 * ratio));
      const pixels = context.getImageData(0, 0, canvas.width, canvas.height).data;
      let checkedPixels = 0;
      let clearedPixels = 0;

      for (let y = Math.floor(step / 2); y < canvas.height; y += step) {
        for (let x = Math.floor(step / 2); x < canvas.width; x += step) {
          const alphaIndex = (y * canvas.width + x) * 4 + 3;
          checkedPixels += 1;
          if (pixels[alphaIndex] < 24) clearedPixels += 1;
        }
      }

      if (clearedPixels / checkedPixels >= 0.34 && !revealedRef.current) {
        revealedRef.current = true;
        setRevealed(true);
        onComplete();
      }
    }

    function scratch(event) {
      const bounds = canvas.getBoundingClientRect();
      const x = event.clientX - bounds.left;
      const y = event.clientY - bounds.top;
      context.lineTo(x, y);
      context.stroke();
    }

    function start(event) {
      if (!logo.complete || logo.naturalWidth === 0) return;
      isScratching = true;
      canvas.setPointerCapture(event.pointerId);
      const bounds = canvas.getBoundingClientRect();
      context.beginPath();
      context.moveTo(event.clientX - bounds.left, event.clientY - bounds.top);
      context.lineWidth = 46;
      context.lineCap = 'round';
      context.lineJoin = 'round';
      scratch(event);
    }

    function move(event) {
      if (isScratching) scratch(event);
    }

    function stop() {
      if (!isScratching) return;
      isScratching = false;
      context.closePath();
      checkScratchProgress();
    }

    const observer = new ResizeObserver(resize);
    observer.observe(canvas);
    canvas.addEventListener('pointerdown', start);
    canvas.addEventListener('pointermove', move);
    canvas.addEventListener('pointerup', stop);
    canvas.addEventListener('pointercancel', stop);
    logo.onload = () => {
      resize();
      setSurfaceReady(true);
    };
    logo.onerror = () => {
      setSurfaceError(true);
    };
    logo.src = scratchLogo;

    return () => {
      observer.disconnect();
      canvas.removeEventListener('pointerdown', start);
      canvas.removeEventListener('pointermove', move);
      canvas.removeEventListener('pointerup', stop);
      canvas.removeEventListener('pointercancel', stop);
      logo.onload = null;
      logo.onerror = null;
    };
  }, [onComplete, revealed]);

  return (
    <section className="page-section scratch-section" id="scratch-date">
      <SectionHeading eyebrow="Save the date" title="Finally," accent="it's happening!" />
      <p className="section-subtitle">Scratch to reveal our special day · हमारी शादी की तारीख देखें</p>
      <div className={`scratch-card${revealed ? ' is-revealed' : ''}`}>
        <div className="scratch-reveal-content">
          <small>The grand wedding date</small>
          <strong>20 November 2026</strong>
          <span className="hindi">शुभ विवाह · आपका स्वागत है</span>
          <p>We can't wait to celebrate with you.</p>
        </div>
        {!revealed && (
          <canvas
            ref={canvasRef}
            className={surfaceReady ? 'is-ready' : ''}
            aria-label={surfaceReady ? 'Scratch the wine-colored card to reveal the wedding date' : 'Loading scratch card'}
          />
        )}
      </div>
      <p className={`scratch-instruction${surfaceError ? ' is-error' : ''}`} aria-live="polite">
        {surfaceError
          ? 'The scratch card could not load. Please refresh the page to try again.'
          : revealed
            ? 'The date is revealed — we can’t wait to celebrate with you!'
            : surfaceReady
              ? 'Scratch away at least a third of the card to reveal the date and the rest of the invitation.'
              : 'Preparing your scratch card…'}
      </p>
    </section>
  );
}

function EventSection() {
  return (
    <section className="page-section events-section" id="events">
      <SectionHeading eyebrow="Celebrate with us" title="The wedding" accent="festivities" hindi="आपका साथ इन पलों को और भी खास बनाएगा" />
      <p className="section-intro">Every ritual, every smile, every memory — made more special with you.</p>
      <div className="event-grid">
        {events.map((event) => (
          <article className={`event-card${event.featured ? ' event-card-featured' : ''}`} key={event.title}>
            <img src={event.image} alt={`${event.title} celebration`} loading="lazy" />
            <div className="event-card-content">
              <span className="event-number">{event.number}</span>
              <h3>{event.title}</h3>
              <p className="event-tagline">{event.tagline}</p>
              <p className="event-quote">“{event.quote}”</p>
              <dl className="event-details">
                <div><dt>Date</dt><dd>{event.date}</dd></div>
                <div><dt>Time</dt><dd>{event.time}</dd></div>
                <div><dt>Venue</dt><dd>{venueName}, Jugsalai</dd></div>
                <div><dt>Dress code</dt><dd>{event.dressCode}</dd></div>
              </dl>
              <a className="calendar-link" href={calendarUrl(event)} target="_blank" rel="noreferrer">Add to Calendar ↗</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function calendarUrl(event) {
  const params = new URLSearchParams({
    action: 'TEMPLATE',
    text: `${event.title} - Ritu & Sourav`,
    dates: `${event.start}/${event.end}`,
    details: event.quote,
    location: venueAddress,
  });
  return `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function FamilySection() {
  return (
    <section className="page-section family-section" id="family-invitation">
      <SectionHeading eyebrow="Cordial invitation" title="Awaiting your noble presence" />
      <p className="family-with-love">With love, <strong>the families</strong></p>
      <div className="family-letter">
        <p className="family-letter-quote">
          “As Ritu and Sourav begin a sacred new chapter of their lives, we would be deeply honoured by your gracious presence and heartfelt blessings on this auspicious occasion. Your warmth and prayers will make their celebration truly eternal.”
        </p>
        <div className="family-grid">
          <article><small>Bride’s family</small><h3>Daughter of Smt. Mamta Devi &amp; Shri Kundan Kumar</h3></article>
          <article><small>Groom’s family</small><h3>Son of Smt. Neelam Devi &amp; Shri Sunil Kumar</h3></article>
        </div>
        <p className="family-closing">♥ We look forward to celebrating together ♥</p>
      </div>
    </section>
  );
}

function GallerySection({ onOpenPhoto }) {
  return (
    <section className="page-section gallery-section" id="gallery">
      <SectionHeading eyebrow="Moments & memories" title="A little" accent="love story" hindi="कुछ प्यारी यादें, और अनगिनत आने वाले पल" />
      <p className="section-intro">A few frames for a lifetime of memories.</p>
      <div className="gallery-grid">
        {galleryPhotos.map((photo, index) => (
          <button className="gallery-photo" type="button" key={photo.title} onClick={() => onOpenPhoto(index)} aria-label={`View ${photo.title}`}>
            <img src={photo.image} alt="" loading="lazy" />
            <span className="gallery-shade" />
            <span className="gallery-caption"><small>Frame {String(index + 1).padStart(2, '0')}</small><strong>{photo.title}</strong><em>{photo.caption}</em></span>
          </button>
        ))}
      </div>
    </section>
  );
}

function VenueSection({ onCopy }) {
  const mapUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venueAddress)}`;
  return (
    <section className="page-section venue-section" id="venue">
      <SectionHeading eyebrow="Save the date" title="Meet us at" accent="the mandap" hindi="आपकी प्रतीक्षा रहेगी" />
      <article className="venue-card">
        <div className="venue-copy">
          <span className="venue-pin" aria-hidden="true">⌖</span>
          <p className="section-kicker">The wedding venue</p>
          <h3>{venueName}</h3>
          <p>{venueAddress}</p>
          <div className="venue-meta">
            <span><small>Wedding date</small><strong>20 November 2026</strong></span>
            <span><small>Muhurat</small><strong>08:15 PM</strong></span>
          </div>
          <div className="venue-actions">
            <a className="button button-primary" href={mapUrl} target="_blank" rel="noreferrer">Get directions ↗</a>
            <button className="button button-outline" type="button" onClick={onCopy}>Copy address</button>
          </div>
        </div>
        <VenueMap />
      </article>
    </section>
  );
}

function VenueMap() {
  return (
    <div className="venue-map" role="img" aria-label={`Illustrated map near ${venueName}`}>
      <svg viewBox="0 0 900 430" aria-hidden="true">
        <rect width="900" height="430" fill="#f4efdf" />
        <path d="M-20 75C160 110 220 20 390 70S650 135 930 55M80-20C125 100 85 190 160 250S250 350 220 460M420-20C380 85 475 145 430 220S390 340 465 460M-20 330C150 280 280 360 430 320S680 280 930 350M625-20L590 95 665 180 625 280 710 460" fill="none" stroke="#fff" strokeWidth="32" />
        <path d="M-20 75C160 110 220 20 390 70S650 135 930 55M80-20C125 100 85 190 160 250S250 350 220 460M420-20C380 85 475 145 430 220S390 340 465 460M-20 330C150 280 280 360 430 320S680 280 930 350M625-20L590 95 665 180 625 280 710 460" fill="none" stroke="#dfd8c5" strokeWidth="2" />
        <g fill="#dce4cd"><rect x="245" y="105" width="110" height="54" rx="10" /><rect x="500" y="95" width="64" height="80" rx="9" /><rect x="270" y="250" width="88" height="44" rx="8" /><rect x="720" y="190" width="100" height="60" rx="9" /></g>
        <g transform="translate(452 205)"><path d="M0 48C-12 28-34 8-34-15a34 34 0 1 1 68 0C34 8 12 28 0 48Z" fill="#8b1d3d" stroke="#fff5dc" strokeWidth="5" /><circle cy="-15" r="12" fill="#fff5dc" /><text x="0" y="-11" textAnchor="middle" fontFamily="Georgia,serif" fontSize="10" fontWeight="bold" fill="#8b1d3d">R&amp;S</text></g>
        <text x="590" y="280" fill="#635546" fontFamily="Arial,sans-serif" fontSize="18">Jugsalai · Jamshedpur</text>
      </svg>
      <span className="map-caption">{venueName}</span>
    </div>
  );
}

function Footer() {
  return (
    <footer className="site-footer">
      <span>Ritu Raj &amp; Sourav Kumar</span>
      <small>Made with love &amp; blessings</small>
    </footer>
  );
}

function PhotoDialog({ photoIndex, onClose, onChange }) {
  const photo = galleryPhotos[photoIndex];

  useEffect(() => {
    function handleKeys(event) {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowRight') onChange(1);
      if (event.key === 'ArrowLeft') onChange(-1);
    }
    window.addEventListener('keydown', handleKeys);
    return () => window.removeEventListener('keydown', handleKeys);
  }, [onChange, onClose]);

  return (
    <div className="dialog-backdrop lightbox-backdrop" onMouseDown={(event) => event.target === event.currentTarget && onClose()}>
      <section className="lightbox" role="dialog" aria-modal="true" aria-label="Photo viewer">
        <button className="dialog-close" type="button" onClick={onClose} aria-label="Close photo viewer">×</button>
        <img src={photo.image} alt={photo.title} />
        <div className="lightbox-caption"><strong>{photo.title}</strong><span>{photoIndex + 1} / {galleryPhotos.length}</span></div>
        <div className="lightbox-controls">
          <button type="button" onClick={() => onChange(-1)} aria-label="Previous photo">‹</button>
          <button type="button" onClick={() => onChange(1)} aria-label="Next photo">›</button>
        </div>
      </section>
    </div>
  );
}

function Toast({ message, onDismiss }) {
  useEffect(() => {
    if (!message) return undefined;
    const timeout = window.setTimeout(onDismiss, 4500);
    return () => window.clearTimeout(timeout);
  }, [message, onDismiss]);

  if (!message) return null;
  return (
    <div className="toast" role="status">
      <span>{message}</span>
      <button type="button" onClick={onDismiss} aria-label="Dismiss notification">×</button>
    </div>
  );
}

function FloatingPetals() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas?.getContext('2d');
    if (!canvas || !context) return undefined;

    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let width = 0;
    let height = 0;
    let frame = 0;
    const petals = Array.from({ length: 38 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: 3 + Math.random() * 5,
      speed: 0.12 + Math.random() * 0.28,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.5 ? '#b38b48' : '#8b1d3d',
    }));

    function resize() {
      const ratio = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.round(width * ratio);
      canvas.height = Math.round(height * ratio);
      context.setTransform(ratio, 0, 0, ratio, 0, 0);
    }

    function render(time = 0) {
      context.clearRect(0, 0, width, height);
      petals.forEach((petal) => {
        const drift = Math.sin(time * 0.0003 + petal.phase) * 14;
        context.save();
        context.globalAlpha = 0.36;
        context.fillStyle = petal.hue;
        context.beginPath();
        context.ellipse(
          petal.x * width + drift,
          petal.y * height,
          petal.size * 0.55,
          petal.size,
          petal.phase,
          0,
          Math.PI * 2,
        );
        context.fill();
        context.restore();
        if (!reduceMotion) {
          petal.y -= petal.speed / Math.max(height, 1);
          if (petal.y < -0.02) petal.y = 1.02;
        }
      });
      if (!reduceMotion) frame = window.requestAnimationFrame(render);
    }

    resize();
    window.addEventListener('resize', resize, { passive: true });
    if (reduceMotion) render();
    else frame = window.requestAnimationFrame(render);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas className="floating-petals" ref={canvasRef} aria-hidden="true" />;
}

export default function App() {
  const [coverVisible, setCoverVisible] = useState(true);
  const [scratchComplete, setScratchComplete] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(null);
  const [toastMessage, setToastMessage] = useState('');
  const [musicOn, setMusicOn] = useState(false);
  const audioRef = useRef(null);

  const completeScratch = useCallback(() => setScratchComplete(true), []);
  const dismissToast = () => setToastMessage('');
  const changePhoto = (direction) => {
    setPhotoIndex((current) => (current + direction + galleryPhotos.length) % galleryPhotos.length);
  };

  useEffect(() => {
    document.body.classList.toggle('modal-open', photoIndex !== null);
    function handleEscape(event) {
      if (event.key === 'Escape') {
        setPhotoIndex(null);
      }
    }
    window.addEventListener('keydown', handleEscape);
    return () => {
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleEscape);
    };
  }, [photoIndex]);

  async function startMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      await audio.play();
      setMusicOn(true);
    } catch (error) {
      setMusicOn(false);
      if (error.name !== 'NotAllowedError') {
        setToastMessage(`Unable to play wedding music: ${error.message}`);
      }
    }
  }

  async function toggleMusic() {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await startMusic();
    } else {
      audio.pause();
      setMusicOn(false);
    }
  }

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;

    audio.volume = 0.4;
    audio.play().then(() => setMusicOn(true)).catch((error) => {
      setMusicOn(false);
      if (error.name !== 'NotAllowedError') {
        setToastMessage(`Unable to play wedding music: ${error.message}`);
      }
    });

    return () => {
      audio.pause();
      audio.currentTime = 0;
    };
  }, []);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return undefined;
    const updatePlaybackState = () => setMusicOn(!audio.paused);
    audio.addEventListener('play', updatePlaybackState);
    audio.addEventListener('pause', updatePlaybackState);
    audio.addEventListener('error', updatePlaybackState);
    return () => {
      audio.removeEventListener('play', updatePlaybackState);
      audio.removeEventListener('pause', updatePlaybackState);
      audio.removeEventListener('error', updatePlaybackState);
    };
  }, []);

  async function copyVenue() {
    try {
      await navigator.clipboard.writeText(venueAddress);
      setToastMessage('Venue address copied.');
    } catch {
      setToastMessage(`Clipboard access failed. Copy the venue address: ${venueAddress}`);
    }
  }

  return (
    <>
      <audio ref={audioRef} src={weddingMusic} loop preload="auto" />
      <FloatingPetals />
      {coverVisible && <InvitationCover onOpen={() => setCoverVisible(false)} onStartMusic={startMusic} />}
      <SiteHeader musicOn={musicOn} onToggleMusic={toggleMusic} />
      <main>
        <HeroSection />
        <CoupleSection />
        <CountdownSection />
        <ScratchCard onComplete={completeScratch} />
        {scratchComplete && (
          <>
            <EventSection />
            <FamilySection />
            <GallerySection onOpenPhoto={setPhotoIndex} />
            <VenueSection onCopy={copyVenue} />
          </>
        )}
      </main>
      {scratchComplete && <Footer />}
      {photoIndex !== null && <PhotoDialog photoIndex={photoIndex} onClose={() => setPhotoIndex(null)} onChange={changePhoto} />}
      <Toast message={toastMessage} onDismiss={dismissToast} />
    </>
  );
}
