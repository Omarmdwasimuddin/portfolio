'use client'
import React, {useState} from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import {ErrorToast, IsEmail, SuccessToast} from "@/utility/FormHelper";
import Button from "@/components/Button";

const Footer = () => {

    let [data,setData]=useState({email:""})
    let [submit,setSubmit]=useState(false)

    const inputOnChange = (name,value) => {
      setData((data)=>({
              ...data,
              [name]: value
          }))
    }

    const formSubmit=async ()=>{
        if(IsEmail(data.email)){
            ErrorToast("Valid Email Address Required!")
        }else {
            setSubmit(true);
            const options={method:'POST', body:JSON.stringify(data)}
            let res=await (await fetch("/api/newsletter",options)).json();
            setSubmit(false);
            setData({email:""})

            res['status']==="success"?(
                SuccessToast("Thanks! You'll now get my latest updates.")
            ):(ErrorToast("Email Already Used ! "))


        }

    }

  return (
    <footer className="bg-gray-900 text-gray-300 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Column 1: Brand Info */}
        <div className="space-y-5">
          <div className="flex items-center">
            
            <h2 className="text-xl font-bold text-white">Md Wasim Uddin Omar</h2>
          </div>
          <p className="text-sm">
            Welcome to my professional portfolio. Let's build something amazing together!
          </p>
          <div className="flex gap-4 pt-2">
            <Link href="https://www.facebook.com/wasim.mdwasimuddin" target="_blank">
              <FaFacebookF className="text-lg text-white hover:text-blue-500 transition-colors cursor-pointer" />
            </Link>
            <Link href="https://twitter.com" target="_blank">
              <FaTwitter className="text-lg text-white hover:text-blue-400 transition-colors cursor-pointer" />
            </Link>
            <Link href="https:www.linkedin.com/in/mwasimuddin" target="_blank">
              <FaLinkedinIn className="text-lg text-white hover:text-blue-600 transition-colors cursor-pointer" />
            </Link>
            <Link href="https://github.com/Omarmdwasimuddin" target="_blank">
              <FaGithub className="text-lg text-white hover:text-gray-400 transition-colors cursor-pointer" />
            </Link>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Navigation</h3>
          <ul className="space-y-3">
            <li><Link href="#about" className="hover:text-green-500 transition-colors">About us</Link></li>
            <li><Link href="#contact" className="hover:text-green-500 transition-colors">Contact us</Link></li>
            <li><Link href="#portfolio" className="hover:text-green-500 transition-colors">Projects</Link></li>
            <li><Link href="#blog" className="hover:text-green-500 transition-colors">Recent Post</Link></li>
          </ul>
        </div>

        {/* Column 3: Services */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">All Services</h3>
          <ul className="space-y-3">
            <li><Link href="/" className="hover:text-green-500 transition-colors">Next.js Development</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition-colors">Shopify Design & Development</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition-colors">WordPress Design & Development</Link></li>
            <li><Link href="/" className="hover:text-green-500 transition-colors">SEO Optimization & Audit</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter */}
        <div className="space-y-5">
          <h3 className="text-lg font-semibold text-white">Newsletter</h3>
          <p className="text-sm">
            Subscribe to get updates about my latest projects and articles.
          </p>
          <div className="flex flex-col gap-3">
            <input 
              value={data.email} onChange={(e)=>{inputOnChange('email',e.target.value)}}
              type="email" 
              placeholder="Email Address *" 
              className="bg-gray-800 text-white px-4 py-2 rounded-sm focus:outline-none focus:ring-1 focus:ring-green-500"
            />
            <Button onClick={formSubmit} submit={submit} text="Submit" className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-sm transition-colors">
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm">
        <p>Copyright © {new Date().getFullYear()} Md Wasim Uddin. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;