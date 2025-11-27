'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, BedDouble, Sun, Phone, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from '../ui/button';

const navItems = [
  { href: '/', icon: Home, label: 'Home' },
  { href: '/services', icon: Sparkles, label: 'Services' },
  { href: '/booking', icon: BedDouble, label: 'Boarding' },
  { href: '/gallery', icon: Sun, label: 'Gallery' },
  { href: '/contact', icon: Phone, label: 'Contact' },
];

export function MobileNav() {
  const pathname = usePathname();
  const isMobile = useIsMobile();

  if (!isMobile) {
    return null;
  }

  return (
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-card/90 backdrop-blur-sm rounded-full shadow-lg z-50 p-2">
      <div className="flex justify-around items-center h-16 gap-2">
        <Button asChild className="flex-1 h-full rounded-full flex-col gap-1 text-xs" variant="outline">
          <a href="https://wa.me/918717004236" target="_blank" rel="noopener noreferrer">
            <MessageSquare className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
         <Button asChild className="flex-1 h-full rounded-full flex-col gap-1 text-xs">
          <a href="tel:+918069061326">
            <Phone className="w-5 h-5" />
            Call
          </a>
        </Button>
      </div>
    </nav>
  );
}
