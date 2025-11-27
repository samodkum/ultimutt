'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Logo } from '@/components/logo';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Boarding' },
  { href: '/services#daycare', label: 'Daycare' },
  { href: '/services#grooming', label: 'Grooming' },
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
          <Button asChild className="hidden sm:inline-flex">
            <Link href="/booking">Book a Stay</Link>
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
            <Button asChild className="w-full mt-2">
                <Link href="/booking">Book a Stay</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
