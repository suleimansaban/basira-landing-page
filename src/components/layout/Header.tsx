'use client';
import { useState } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { twMerge } from 'tailwind-merge';
import Button from '../ui/button';

interface HeaderMenuItemProps {
  text: string;
  href: string;
  isActive?: boolean;
  onClick?: () => void;
}

const HeaderMenuItem = ({ text, href, isActive = false, onClick }: HeaderMenuItemProps) => {
  return (
    <Link
      href={href}
      role="menuitem"
      onClick={onClick}
      className={twMerge(
        'text-base font-lato font-bold leading-lg transition-colors duration-200 hover:text-header-accent focus:outline-none focus:text-header-accent',
        isActive ? 'text-header-accent' : 'text-header-text'
      )}
    >
      {text}
    </Link>
  )
}

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'About Us', href: '/about' },
    { text: 'Services', href: '/services' },
    { text: 'Contact Us', href: '/contact' },
  ]

  const handleMenuItemClick = () => {
    setIsMenuOpen(false) // Close mobile menu on item click
  }

  const handleBookConsultation = (): void => {
    const contactSection = document.getElementById('contact-section')
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' })
    } else {
      // If contact section doesn't exist, navigate to home and then scroll
      window.location.href = '/#contact-section'
    }
  }

  const isActiveRoute = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  return (
    <header className="w-full bg-header-background">
      {/* Container with max-width constraint */}
      <div className="w-full max-w-[1440px] mx-auto">
        {/* Header content */}
        <div className="px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between w-full">
            
            {/* Logo and Company Name Section */}
            <div className="flex items-center gap-3">

              <div className="flex flex-col">
                <img src="/images/logo.png" alt="" />
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="block lg:hidden p-2 rounded-md hover:bg-background-light focus:outline-none focus:ring-2 focus:ring-primary-background"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6 text-header-text" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center justify-center flex-1" role="navigation">
              <div className="flex items-center gap-8 lg:gap-12">
                {menuItems.map((item, index) => (
                  <HeaderMenuItem
                    key={index}
                    text={item.text}
                    href={item.href}
                    isActive={isActiveRoute(item.href)}
                    onClick={handleMenuItemClick}
                  />
                ))}
              </div>
            </nav>
            
            {/* CTA Button */}
            <div className="hidden lg:block">
              <Button
                text="Book Consultation"
                text_font_size="text-sm"
                text_font_family="Inter"
                text_font_weight="font-bold"
                text_line_height="leading-sm"
                text_text_align="center"
                text_color="text-button-text"
                fill_background_color="bg-button-secondary-bg"
                border_border_radius="rounded-md"
                padding="t=12px,r=28px,b=12px,l=28px"
                onClick={handleBookConsultation}
                className="hover:scale-105 active:scale-95 transition-transform duration-200"
              />
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          <nav
            className={`${isMenuOpen ? 'block' : 'hidden'} lg:hidden mt-4 pt-4 border-t border-input-border`}
            role="navigation"
          >
            <div className="flex flex-col space-y-3">
              {menuItems.map((item, index) => (
                <HeaderMenuItem
                  key={index}
                  text={item.text}
                  href={item.href}
                  isActive={isActiveRoute(item.href)}
                  onClick={handleMenuItemClick}
                />
              ))}
              
              {/* Mobile CTA Button */}
              <div className="pt-3 border-t border-input-border">
                <Button
                  text="Book Consultation"
                  text_font_size="text-sm"
                  text_font_family="Inter"
                  text_font_weight="font-bold"
                  text_line_height="leading-sm"
                  text_text_align="center"
                  text_color="text-button-text"
                  fill_background_color="bg-button-secondary-bg"
                  border_border_radius="rounded-md"
                  padding="t=12px,r=28px,b=12px,l=28px"
                  layout_width="100%"
                  onClick={handleBookConsultation}
                  className="hover:scale-105 active:scale-95 transition-transform duration-200"
                />
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header