// ── View: Contact ──
import React from 'react';
import { siteConfig } from '../data';
import { useContact } from '../hooks/useContact';
import { useReveal } from '../hooks/useReveal';
import './Contact.css';

export default function Contact() {
  const ref = useReveal();
  const { form, status, error, formRef, handleChange, handleSubmit, resetStatus } = useContact();

  return (
    <section className="section contact-section" id="contact" ref={ref}>
      <div className="section-inner container">
        <div className="contact__inner">
          {/* Left */}
          <div className="contact__left reveal">
            <p className="s-num">05 — Let's talk</p>
            <h2 className="contact__title">
              Open to great<br/><em>opportunities</em>
            </h2>
            <p className="contact__sub">{siteConfig.availableFor}.</p>

            <div className="contact__links">
              <a href={`mailto:${siteConfig.email}`} className="contact__link">
                <span className="contact__link-icon">✉</span>
                <div>
                  <p className="contact__link-label">Email</p>
                  <p className="contact__link-val">{siteConfig.email}</p>
                </div>
              </a>
              <a href={siteConfig.linkedin} target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-icon">in</span>
                <div>
                  <p className="contact__link-label">LinkedIn</p>
                  <p className="contact__link-val">View profile →</p>
                </div>
              </a>
              <a href={siteConfig.github} target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-icon">gh</span>
                <div>
                  <p className="contact__link-label">GitHub</p>
                  <p className="contact__link-val">View projects →</p>
                </div>
              </a>
              <div className="contact__link contact__link--static">
                <span className="contact__link-icon">📍</span>
                <div>
                  <p className="contact__link-label">Location</p>
                  <p className="contact__link-val">{siteConfig.location} · {siteConfig.locationNote}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="contact__right">
            {status === 'success' ? (
              <div className="contact__success">
                <span className="contact__success-icon">✓</span>
                <h3>Message sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <button className="btn btn-teal" onClick={resetStatus}>Send another</button>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="contact__form" noValidate>
                <div className="contact__form-row">
                  <div className="contact__field">
                    <label htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text"
                      placeholder="Your name"
                      value={form.name} onChange={handleChange}
                    />
                  </div>
                  <div className="contact__field">
                    <label htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email"
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="contact__field">
                  <label htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text"
                    placeholder="What's this about?"
                    value={form.subject} onChange={handleChange}
                  />
                </div>
                <div className="contact__field">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" rows={5}
                    placeholder="Tell me about the opportunity..."
                    value={form.message} onChange={handleChange}
                  />
                </div>

                {error && <p className="contact__error">{error}</p>}

                <button
                  type="submit"
                  className="btn btn-teal"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Sending…' : 'Send message →'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
