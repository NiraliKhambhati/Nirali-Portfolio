// ── Controller: useContact ──
// Manages contact form state and EmailJS submission logic

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { siteConfig } from '../data';

const INITIAL_FORM = { name: '', email: '', subject: '', message: '' };

export function useContact() {
  const [form, setForm] = useState(INITIAL_FORM);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    if (!form.name.trim()) return 'Please enter your name.';
    if (!form.email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) return 'Please enter a valid email.';
    if (!form.subject.trim()) return 'Please enter a subject.';
    if (!form.message.trim() || form.message.length < 10) return 'Message is too short.';
    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationError = validate();
    if (validationError) { setError(validationError); return; }

    setError('');
    setStatus('sending');

    try {
      await emailjs.sendForm(
        siteConfig.emailjs.serviceId,
        siteConfig.emailjs.templateId,
        formRef.current,
        siteConfig.emailjs.publicKey
      );
      setStatus('success');
      setForm(INITIAL_FORM);
    } catch (err) {
      console.error('EmailJS error:', err);
      setStatus('error');
      setError('Something went wrong. Please email me directly.');
    }
  };

  const resetStatus = () => setStatus('idle');

  return { form, status, error, formRef, handleChange, handleSubmit, resetStatus };
}
