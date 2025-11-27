import { Logo } from '@/components/logo';
import { WaveDivider } from '@/components/wave-divider';
import Link from 'next/link';
import { Instagram, Phone, MessageSquare } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Boarding' },
  { href: '/services#daycare', label: 'Daycare' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground relative pt-24 pb-8">
      <WaveDivider
        position="top"
        colorClassName="text-secondary"
        className="transform scale-x-[-1]"
      />
      <div className="container max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Logo className="text-foreground" />
            <p className="mt-4 text-sm text-muted-foreground">
             A cage-free, leash-free daycare & boarding resort for dogs.
            </p>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Quick Links
            </h3>
            <ul className="mt-4 space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href + link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Contact Us
            </h3>
            <address className="mt-4 space-y-2 text-sm text-muted-foreground not-italic">
              <p>Faridabad – Gurgaon Rd, near CNG pump, Gwal Pahari, Gurugram, Bandhwari, Haryana 122003</p>
              <p>Contact for Booking:</p>
              <p className="flex items-center gap-2"><MessageSquare size={14} /> +91 8595993867</p>
              <p className="flex items-center gap-2"><Phone size={14}/> +91 8069061326</p>
            </address>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex mt-4 space-x-4">
              <a
                href="https://www.instagram.com/ultimutt_petservices?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            © 2024 ©Ultimutt. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
