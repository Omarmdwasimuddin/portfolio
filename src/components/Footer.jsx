'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import { ErrorToast, IsEmail, SuccessToast } from "@/utility/FormHelper";
import { Mail, ArrowRight, Loader2 } from 'lucide-react';

const Footer = () => {
  const [data, setData] = useState({ email: "" });
  const [submit, setSubmit] = useState(false);

  const formSubmit = async () => {
    if (IsEmail(data.email)) {
      ErrorToast("Valid Email Address Required!");
    } else {
      setSubmit(true);
      const options = { method: 'POST', body: JSON.stringify(data) };
      let res = await (await fetch("/api/newsletter", options)).json();
      setSubmit(false);
      setData({ email: "" });
      res['status'] === "success" 
        ? SuccessToast("Thanks for subscribing!") 
        : ErrorToast("Email Already Subscribed!");
    }
  };

  const socialLinks = [
    { icon: FaFacebookF, href: "https://www.facebook.com/wasim.mdwasimuddin" },
    { icon: FaTwitter, href: "https://twitter.com" },
    { icon: FaLinkedinIn, href: "https://www.linkedin.com/in/mwasimuddin/" },
    { icon: FaGithub, href: "https://github.com/Omarmdwasimuddin" }
  ];

  return (
    <footer className="relative bg-[#030712] border-t border-white/5 pt-20 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Wasim.</h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              Building high-performance digital experiences with passion and precision. Let's create something extraordinary.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, i) => (
                <Link key={i} href={link.href} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-green-500 hover:text-gray-950 transition-all">
                  <link.icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Navigate</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              {['About', 'Portfolio', 'Blog', 'Contact'].map(link => (
                <li key={link}><Link href={`#${link.toLowerCase()}`} className="hover:text-green-400 transition-colors">{link}</Link></li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Services</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li>Next.js Development</li>
              <li>Shopify & WordPress</li>
              <li>SEO Audit</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-lg font-bold text-white">Newsletter</h3>
            <div className="relative">
              <Mail className="absolute left-3 top-3.5 w-5 h-5 text-gray-500" />
              <input 
                value={data.email} 
                onChange={(e) => setData({email: e.target.value})}
                type="email" 
                placeholder="Enter email" 
                className="w-full bg-white/5 border border-white/10 rounded-xl py-3 pl-10 pr-4 text-sm focus:border-green-500 outline-none"
              />
            </div>
            <button 
              onClick={formSubmit}
              disabled={submit}
              className="w-full bg-green-500 text-gray-950 py-3 rounded-xl font-bold text-sm hover:bg-green-400 flex items-center justify-center gap-2 transition-all"
            >
              {submit ? <Loader2 className="animate-spin" /> : <>Subscribe <ArrowRight className="w-4 h-4" /></>}
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 text-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Md Wasim Uddin Omar. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
