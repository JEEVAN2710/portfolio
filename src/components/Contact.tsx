import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    
    try {
      // Replace these with your actual EmailJS credentials
      const result = await emailjs.send(
        'service_i4zpgkk',     // Your EmailJS service ID
        'template_2zt9xej',    // Your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'patiljeevan2710@gmail.com'
        },
        'RDtG4Z0wQCDnEAQ1x'   // Your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 3000);
    } catch (error) {
      console.error('Email send failed:', error);
      setError('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-orbitron text-3xl md:text-4xl font-bold mb-4">
            <span className="text-pink-400">PING</span>
            <span className="text-white ml-2">ME</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="bg-gray-900/50 border border-gray-700/50 rounded-xl p-8 backdrop-blur-sm">
          <div className="mb-8">
            <h3 className="font-orbitron text-xl font-bold text-white mb-4">INITIATE TRANSMISSION</h3>
            <p className="text-gray-300">
              Ready to collaborate or discuss opportunities? Send a message and I'll respond within 24 hours.
            </p>
            <div className="mt-4 space-y-2">
              <p className="text-cyan-400 font-mono text-sm">
                📧 patiljeevan2710@gmail.com
              </p>
              <p className="text-cyan-400 font-mono text-sm">
                📱 +91 9359334430
              </p>
              <div className="flex space-x-4 mt-3">
                <a href="https://github.com/JEEVAN2710" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 font-mono text-sm">
                  🔗 GitHub
                </a>
                <a href="http://www.linkedin.com/in/jeevanpatil27" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-mono text-sm">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg">
              <p className="text-red-400 font-mono text-sm">{error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  {'>'} Your ID
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-sm font-mono text-gray-400 mb-2">
                  {'>'} Transmission Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                    className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-mono text-gray-400 mb-2">
                {'>'} Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-4 text-cyan-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Describe your project or idea..."
                  className="w-full bg-gray-800/50 border border-gray-600/50 rounded-lg pl-12 pr-4 py-3 text-white placeholder-gray-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 transition-all duration-300 font-mono resize-none"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`w-full font-orbitron font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                isSubmitted
                  ? 'bg-green-500/20 border-2 border-green-500/50 text-green-400'
                  : isSubmitting
                  ? 'bg-yellow-500/20 border-2 border-yellow-500/50 text-yellow-400'
                  : 'bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white'
              }`}
            >
              {isSubmitted ? (
                <>
                  <CheckCircle className="w-5 h-5" />
                  <span>TRANSMISSION SENT</span>
                </>
              ) : isSubmitting ? (
                <>
                  <div className="w-5 h-5 border-2 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
                  <span>UPLOADING DATA PACKET</span>
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  <span>SEND TRANSMISSION</span>
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;