'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Menu, X, Phone, MessageSquare } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Boarding' },
  { href: '/services#daycare', label: 'Daycare' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled || isMobileMenuOpen
          ? 'bg-background/90 shadow-md backdrop-blur-sm'
          : 'bg-transparent'
      )}
    >
      <div className="container mx-auto flex h-20 max-w-[1400px] items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Button asChild className="hidden sm:inline-flex" variant="outline">
            <a href="https://wa.me/918595993867" target="_blank" rel="noopener noreferrer">
              <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
            </a>
          </Button>
           <Button asChild className="hidden sm:inline-flex">
            <a href="tel:+918069061326">
              <Phone className="mr-2 h-4 w-4" /> Call Us
            </a>
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="flex flex-col items-start gap-2 p-4">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                className="w-full rounded-md p-2 text-base font-medium text-foreground/80 transition-colors hover:bg-accent hover:text-primary"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className='w-full flex flex-col gap-2 mt-2'>
              <Button asChild className="w-full" variant="outline">
                 <a href="https://wa.me/918595993867" target="_blank" rel="noopener noreferrer">
                  <MessageSquare className="mr-2 h-4 w-4" /> WhatsApp
                </a>
              </Button>
              <Button asChild className="w-full">
                <a href="tel:+918069061326">
                  <Phone className="mr-2 h-4 w-4" /> Call Us
                </a>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
