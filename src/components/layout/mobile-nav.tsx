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
    <nav className="md:hidden fixed bottom-4 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-sm bg-card/90 backdrop-blur-sm rounded-full shadow-lg z-50 p-2">
      <div className="flex justify-around items-center h-12">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                'flex flex-col items-center justify-center text-xs w-16 h-12 rounded-full transition-colors',
                isActive
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-accent'
              )}
            >
              <item.icon className="h-5 w-5 mb-0.5" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
