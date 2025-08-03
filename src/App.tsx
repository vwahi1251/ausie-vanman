import React from 'react';

const App: React.FC = () => {
  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: 'linear-gradient(to bottom right, #FFEB3B, #FF9800)', minHeight: '100vh', color: '#333' }}>
      
      {/* Header with Logo */}
      <header style={{ textAlign: 'center', padding: '40px 20px' }}>
        <img src="/VanMan.jpg" alt="Aussie VanMan Logo" style={{ width: '220px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} />
        <h1 style={{ fontSize: '3rem', marginTop: '20px', color: '#0D47A1' }}>Aussie VanMan</h1>
        <p style={{ fontSize: '1.4rem', color: '#333' }}>Reliable • Affordable • Friendly Moving Services</p>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', color: '#444' }}>📞 Call Us: <strong>0400 123 456</strong></p>
      </header>

      {/* Contact Form */}
      <section id="contact" style={{ backgroundColor: '#fff', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#0D47A1', marginBottom: '20px' }}>Get a Free Quote</h2>
        <form onSubmit={(e) => { e.preventDefault(); alert('Thank you! We’ll contact you soon.'); }} style={{ marginTop: '20px' }}>
          <input type="text" placeholder="Your Name" required style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }} /><br />
          <input type="email" placeholder="Your Email" required style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }} /><br />
          <textarea placeholder="Your Message" required style={{ padding: '12px', width: '300px', height: '100px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}></textarea><br />
          <button type="submit" style={{ padding: '12px 30px', backgroundColor: '#FF9800', color: '#fff', border: 'none', borderRadius: '25px', fontWeight: 'bold', cursor: 'pointer' }}>
            🚚 Send Request
          </button>
        </form>
      </section>

      {/* Services Section */}
      <section id="services" style={{ padding: '40px 20px', backgroundColor: '#fff', textAlign: 'center' }}>
        <h2 style={{ color: '#0D47A1' }}>Our Services</h2>
        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px', marginTop: '30px' }}>
          <div style={{ backgroundColor: '#FFE082', padding: '20px', borderRadius: '16px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#BF360C' }}>🏠 House Moves</h3>
            <p>Stress-free house moving anywhere in Melbourne.</p>
          </div>
          <div style={{ backgroundColor: '#81D4FA', padding: '20px', borderRadius: '16px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#01579B' }}>🏢 Office Relocations</h3>
            <p>Quick and efficient office relocations with minimal disruption.</p>
          </div>
          <div style={{ backgroundColor: '#A5D6A7', padding: '20px', borderRadius: '16px', width: '250px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
            <h3 style={{ color: '#1B5E20' }}>📦 Small Deliveries</h3>
            <p>Furniture, appliances, or single-item deliveries—fast & affordable.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0D47A1', color: '#fff', textAlign: 'center', padding: '15px', marginTop: '40px' }}>
        © 2025 Aussie VanMan. All Rights Reserved.
      </footer>

    </div>
  );
};

export default App;
