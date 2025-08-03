import React, { useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const payload = { name, email, phone, message };

    const response = await fetch('https://script.google.com/macros/s/AKfycbysu7rKrNyvhAL28pwVOGJf3O1FeX9mAvpCAtxldZFOfjxGvBD42ikNnJqcyqXR0_jM/exec', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });
      console.log(response)
    if (response.ok) {

      alert('✅ Enquiry submitted! We’ll contact you shortly.');
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
    } else {
      alert('⚠️ Something went wrong. Please try again.');
    }
  };

  return (
    <div style={{ fontFamily: 'Poppins, Arial, sans-serif', background: 'linear-gradient(to bottom right, #FFEB3B, #FF9800)', minHeight: '100vh', color: '#333' }}>
      {/* Header */}
      <header style={{ textAlign: 'center', padding: '40px 20px' }}>
        <img src="/VanMan.jpg" alt="Aussie VanMan Logo" style={{ width: '220px', borderRadius: '16px', boxShadow: '0 4px 10px rgba(0,0,0,0.2)' }} />
        <h1 style={{ fontSize: '3rem', marginTop: '20px', color: '#0D47A1' }}>Aussie VanMan</h1>
        <p style={{ fontSize: '1.4rem', color: '#333' }}>Reliable • Affordable • Friendly Moving Services</p>
        <p style={{ fontSize: '1.2rem', marginTop: '10px', color: '#444' }}>📞 Call Us: <strong>0431 092 322</strong></p>
      </header>

      {/* Contact Form */}
      <section id="contact" style={{ backgroundColor: '#fff', borderTopLeftRadius: '40px', borderTopRightRadius: '40px', padding: '40px 20px', textAlign: 'center' }}>
        <h2 style={{ color: '#0D47A1', marginBottom: '20px' }}>Get a Free Quote</h2>
        <form onSubmit={handleSubmit} style={{ marginTop: '20px' }}>
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
          /><br />
          <input
            type="email"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
          /><br />
          <input
            type="tel"
            placeholder="Your Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            style={{ padding: '12px', width: '300px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
          /><br />
          <textarea
            placeholder="Your Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
            style={{ padding: '12px', width: '300px', height: '100px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px' }}
          ></textarea><br />
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
