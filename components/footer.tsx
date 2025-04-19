"use client"

import Link from "next/link"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Facebook, Twitter, Instagram, Linkedin, ArrowUp } from "lucide-react"

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="bg-green-50 mt-12">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <Link href="/" className="inline-block">
              <Image src="https://i.ibb.co/ZRyL2N1Y/Screenshot-2025-04-19-151007-removebg-preview.png" alt="Univents Logo" width={150} height={50} className="h-auto w-auto" />
            </Link>
            <p className="mt-4 text-sm text-gray-600">Providing high-quality services tailored to meet your needs.</p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <div className="h-1 w-full bg-green-500 mb-4"></div>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-green-600">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-green-600">
                  About
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-600 hover:text-green-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 hover:text-green-600">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
            <div className="h-1 w-full bg-green-500 mb-4"></div>
            <div className="flex items-center space-x-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <a href="mailto:support@Univents.az" className="text-gray-600 hover:text-green-600">
                support@univents.az
              </a>
            </div>
          </div>

          {/* Subscribe */}
          <div className="md:col-span-1">
            <h3 className="mb-4 text-lg font-semibold">Subscribe</h3>
            <div className="h-1 w-full bg-green-500 mb-4"></div>
            <div className="flex flex-col space-y-2">
              <Input type="email" placeholder="Enter your email" className="bg-white" />
              <Button className="bg-green-600 hover:bg-green-700">Subscribe</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between border-t border-gray-200 pt-8 md:flex-row">
          <p className="text-sm text-gray-600">© 2025 Univents. All rights reserved.</p>

          <div className="mt-4 flex space-x-4 md:mt-0">
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Facebook className="h-5 w-5" />
              <span className="sr-only">Facebook</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Twitter className="h-5 w-5" />
              <span className="sr-only">Twitter</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Instagram className="h-5 w-5" />
              <span className="sr-only">Instagram</span>
            </a>
            <a href="#" className="text-gray-600 hover:text-green-600">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 rounded-full bg-green-500 p-3 text-white shadow-lg transition-all hover:bg-green-600"
        aria-label="Back to top"
      >
        <ArrowUp className="h-6 w-6" />
      </button>
    </footer>
  )
}
