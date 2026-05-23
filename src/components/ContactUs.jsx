'use client';
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";
import { Mail, MapPin, Send, Loader2 } from 'lucide-react';

const ContactSection = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
  const [submit, setSubmit] = useState(false);

  const inputOnChange = (name, value) => {
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      setSubmit(true);
      const options = { method: 'POST', body: JSON.stringify(data) };
      let res = await (await fetch("/api/contact", options)).json();
      setSubmit(false);
      setData({ name: "", email: "", phone: "", message: "" });
      res['status'] === "success" ? SuccessToast("Thanks! I'll get back to you soon.") : ErrorToast("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 bg-[#030712] text-white">
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-green-500/5 rounded-full blur-[120px] -z-0" />

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto"
      >
        <div className="text-center mb-16">
          <h2 className="text-sm font-mono text-green-500 tracking-widest uppercase mb-2">Let's Connect</h2>
          <h3 className="text-4xl sm:text-5xl font-extrabold text-white">Ready to bring your project to life?</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md">
              <h4 className="text-2xl font-bold mb-6">Get in touch</h4>
              <div className="flex items-center gap-4 mb-6 text-gray-400">
                <div className="p-3 bg-white/5 rounded-full text-green-400"><Mail /></div>
                <a href="mailto:mdwasimu015@gmail.com" className="hover:text-green-400 transition-colors">mdwasimu015@gmail.com</a>
              </div>
              <div className="flex items-center gap-4 text-gray-400">
                <div className="p-3 bg-white/5 rounded-full text-green-400"><MapPin /></div>
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>

          {/* Form */}
          <motion.form 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            onSubmit={(e) => { e.preventDefault(); formSubmit(); }} 
            className="space-y-4 bg-white/5 p-8 rounded-3xl border border-white/10 backdrop-blur-md"
          >
            <div className="grid grid-cols-1 gap-4">
              <input value={data.name} onChange={(e) => inputOnChange('name', e.target.value)} type="text" placeholder="Your Name" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-500/50 outline-none transition-colors" required />
              <input value={data.email} onChange={(e) => inputOnChange('email', e.target.value)} type="email" placeholder="Your Email" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-500/50 outline-none transition-colors" required />
              <input value={data.phone} onChange={(e) => inputOnChange('phone', e.target.value)} type="tel" placeholder="Phone Number" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-500/50 outline-none transition-colors" required />
              <textarea value={data.message} onChange={(e) => inputOnChange('message', e.target.value)} rows="4" placeholder="Your Message" className="w-full px-6 py-4 rounded-xl bg-white/5 border border-white/10 focus:border-green-500/50 outline-none transition-colors" required></textarea>
            </div>
            
            <button
              disabled={submit}
              type="submit"
              className="w-full flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-gray-950 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(34,197,94,0.3)] disabled:opacity-50"
            >
              {submit ? <Loader2 className="animate-spin" /> : <>Send Message <Send className="w-4 h-4" /></>}
            </button>
          </motion.form>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactSection;
