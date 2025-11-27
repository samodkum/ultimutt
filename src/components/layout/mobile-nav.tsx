'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Sparkles, BedDouble, Sun, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

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
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-card/90 backdrop-blur-sm rounded-full shadow-lg z-50">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={cn(
              'flex flex-col items-center justify-center gap-1 text-muted-foreground w-16 h-16 transition-colors',
              pathname === item.href && 'text-primary'
            )}
          >
            <item.icon className="w-6 h-6" />
            <span className="text-[10px] font-medium">{item.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
