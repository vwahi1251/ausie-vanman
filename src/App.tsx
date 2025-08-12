import React, { useEffect, useState } from 'react';

const App: React.FC = () => {
  // Form state
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Lock scroll when modal is visible
  useEffect(() => {
    if (showSuccess) {
      document.body.style.overflow = 'hidden';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [showSuccess]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);
    setSubmitting(true);

    try {
      const payload = { name, email, phone, message };

      const res = await fetch('/api/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }, // normal JSON now
        body: JSON.stringify(payload),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setShowSuccess(true);
    } catch (err) {
      console.error(err);
      setErrorMsg('Couldn’t submit just now. Please try again in a moment.');
    } finally {
      setSubmitting(false);
    }
  };

  // Shared responsive input styles
  const fieldStyle: React.CSSProperties = {
    padding: '12px',
    width: 'min(92vw, 360px)',
    borderRadius: '10px',
    border: '1px solid #d7d7d7',
    marginBottom: '12px',
    fontSize: '16px',
  };

  return (
    <div
      style={{
        fontFamily: 'Poppins, Arial, sans-serif',
        background: 'linear-gradient(to bottom right, #FFEB3B, #FF9800)',
        minHeight: '100vh',
        color: '#333',
      }}
    >
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '32px 16px' }}>
        <img
          src="/VanMan.jpg"
          alt="Aussie VanMan Logo"
          style={{
            width: 'min(60vw, 240px)',
            borderRadius: '16px',
            boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
          }}
        />
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 48px)', marginTop: 16, color: '#0D47A1' }}>
          Aussie VanMan
        </h1>
        <p style={{ fontSize: 'clamp(14px, 3.6vw, 20px)', color: '#333' }}>
          Reliable • Affordable • Friendly Moving Services
        </p>
        <p style={{ fontSize: 'clamp(14px, 3.6vw, 18px)', marginTop: 8, color: '#444' }}>
          📞 Call Us:{' '}
          <a href="tel:+61431092322" style={{ color: '#0D47A1', fontWeight: 700, textDecoration: 'none' }}>
            0431 092 322
          </a>
        </p>
      </header>

      {/* Contact Form */}
      <section
        id="contact"
        style={{
          backgroundColor: '#fff',
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          padding: '32px 16px 40px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ color: '#0D47A1', marginBottom: 16, fontSize: 'clamp(20px, 5vw, 28px)' }}>
          Get a Free Quote
        </h2>

        <form onSubmit={handleSubmit} style={{ marginTop: 8 }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={fieldStyle}
            autoComplete="name"
          />
          <br />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={fieldStyle}
            autoComplete="email"
            inputMode="email"
          />
          <br />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={fieldStyle}
            autoComplete="tel"
            inputMode="tel"
            pattern="^(\+?61|0)\d{8,12}$"
            title="Use an Australian number like 0431 234 567 or +61431 234 567"
          />
          <br />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ ...fieldStyle, height: 110, resize: 'vertical' }}
          />
          <br />
          <button
            type="submit"
            disabled={submitting}
            style={{
              padding: '14px 28px',
              backgroundColor: submitting ? '#ffb74d' : '#FF9800',
              color: '#fff',
              border: 'none',
              borderRadius: 28,
              fontWeight: 700,
              cursor: submitting ? 'not-allowed' : 'pointer',
              width: 'min(92vw, 360px)',
              fontSize: 16,
              transition: 'transform 120ms ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.98)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            {submitting ? 'Sending…' : '🚚 Send Request'}
          </button>

          {errorMsg && (
            <div
              role="alert"
              style={{
                margin: '12px auto 0',
                width: 'min(92vw, 360px)',
                background: '#FFEBEE',
                color: '#B71C1C',
                borderRadius: 10,
                padding: '10px 12px',
                textAlign: 'center',
              }}
            >
              {errorMsg}
            </div>
          )}
        </form>
      </section>

      {/* Services */}
      <section id="services" style={{ padding: '28px 16px 40px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#0D47A1', fontSize: 'clamp(20px, 5vw, 28px)' }}>Our Services</h2>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 16,
            maxWidth: 900,
            margin: '20px auto 0',
          }}
        >
          <div style={{ backgroundColor: '#FFE082', padding: 20, borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#BF360C', marginTop: 0 }}>🏠 House Moves</h3>
            <p style={{ margin: 0 }}>Stress-free house moving anywhere in Melbourne.</p>
          </div>
          <div style={{ backgroundColor: '#81D4FA', padding: 20, borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#01579B', marginTop: 0 }}>🏢 Office Relocations</h3>
            <p style={{ margin: 0 }}>Quick and efficient office moves with minimal disruption.</p>
          </div>
          <div style={{ backgroundColor: '#A5D6A7', padding: 20, borderRadius: 16, boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#1B5E20', marginTop: 0 }}>📦 Small Deliveries</h3>
            <p style={{ margin: 0 }}>Furniture, appliances, or single-item deliveries—fast & affordable.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: '#0D47A1',
          color: '#fff',
          textAlign: 'center',
          padding: 14,
        }}
      >
        © 2025 Aussie VanMan. All Rights Reserved.
      </footer>

      {/* Success Modal */}
      {showSuccess && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setShowSuccess(false)}
          style={{
            position: 'fixed',
            inset: 0,
            background: 'rgba(0,0,0,0.5)',
            display: 'grid',
            placeItems: 'center',
            zIndex: 1000,
            padding: 16,
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              background: '#fff',
              borderRadius: 16,
              maxWidth: 420,
              width: 'min(92vw, 420px)',
              padding: '24px 20px',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
            }}
          >
            <div style={{ fontSize: 40, lineHeight: 1, marginBottom: 8 }}>✅</div>
            <h3 style={{ margin: '8px 0 6px', color: '#0D47A1' }}>Query sent!</h3>
            <p style={{ margin: 0, color: '#444' }}>We’ll contact you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
              style={{
                marginTop: 16,
                padding: '10px 18px',
                background: '#FF9800',
                color: '#fff',
                border: 'none',
                borderRadius: 999,
                fontWeight: 700,
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
