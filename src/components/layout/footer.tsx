import { Logo } from '@/components/logo';
import { WaveDivider } from '@/components/wave-divider';
import Link from 'next/link';
import { Instagram, Facebook } from 'lucide-react';

const footerLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/booking', label: 'Boarding' },
  { href: '/services#daycare', label: 'Daycare' },
  { href: '/services#grooming', label: 'Grooming' },
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
              Premium dog boarding & daycare in Gurgaon, providing safe, fun,
              and loving care for your furry family members.
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
              <p>123 Puppy Lane, Gurgaon, India</p>
              <p>Phone: +91 9315435356</p>
              <p>WhatsApp: +91 9315435356</p>
              <p>Email: contact@ultimutt.com</p>
            </address>
          </div>
          <div>
            <h3 className="font-headline text-lg font-semibold text-foreground">
              Follow Us
            </h3>
            <div className="flex mt-4 space-x-4">
              <a
                href="#"
                aria-label="Instagram"
                className="text-muted-foreground hover:text-primary"
              >
                <Instagram />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="text-muted-foreground hover:text-primary"
              >
                <Facebook />
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Ultimutt Pet Resort. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
