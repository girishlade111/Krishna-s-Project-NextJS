import Link from 'next/link';
import { Search, Menu, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { TumLogo } from '@/components/icons/tum-logo';

const navLinks = [
  { href: '#news', label: 'News & Events' },
  { href: '#studies', label: 'Studies' },
  { href: '#research', label: 'Research' },
  { href: '#community', label: 'Community' },
  { href: '#about', label: 'About TUM' },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex h-20 items-center justify-between">
        <div className="flex items-center gap-6">
            <Link href="/" className="flex items-center">
                <TumLogo className="h-8 w-auto text-white"/>
            </Link>
            <nav className="hidden lg:flex items-center space-x-6 text-sm font-medium text-gray-300">
                {navLinks.map(({ href, label }) => (
                <Link
                    key={label}
                    href={href}
                    className="transition-colors hover:text-white"
                >
                    {label}
                </Link>
                ))}
            </nav>
        </div>
        
        <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-4">
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                    <Input
                        type="search"
                        placeholder="Search..."
                        className="pl-9 w-40 md:w-64 bg-card border-border"
                    />
                </div>
                <div className="flex items-center gap-2 text-sm font-medium">
                    <span className="text-gray-300">DE</span>
                    <Globe className="h-4 w-4 text-gray-300" />
                </div>
            </div>

            <div className="lg:hidden">
                <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="icon" className="text-white hover:text-white">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Toggle Menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-background border-border w-[300px] sm:w-[400px]">
                    <div className="flex flex-col h-full">
                        <div className="p-6">
                            <Link href="/" className="flex items-center mb-8">
                                <TumLogo className="h-8 w-auto text-white"/>
                            </Link>
                            <nav className="grid gap-4">
                            {navLinks.map(({ href, label }) => (
                                <Link
                                key={label}
                                href={href}
                                className="text-lg font-medium text-gray-300 p-2 rounded-md hover:bg-card hover:text-white"
                                >
                                {label}
                                </Link>
                            ))}
                            </nav>
                        </div>
                        <div className="mt-auto p-6 border-t border-border">
                            <div className="relative mb-4">
                                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                                <Input
                                    type="search"
                                    placeholder="Search..."
                                    className="pl-9 w-full bg-card border-border"
                                />
                            </div>
                            <div className="flex items-center gap-2 text-sm font-medium">
                                <Globe className="h-4 w-4 text-gray-300" />
                                <span className="text-gray-300">Deutsch</span>
                            </div>
                        </div>
                    </div>
                </SheetContent>
                </Sheet>
            </div>
        </div>
      </div>
    </header>
  );
}
