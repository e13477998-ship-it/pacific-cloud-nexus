
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Phone, Mail } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'Inventory', href: '/inventory' },
    { name: 'Services', href: '/services' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/848ecb84-9967-43b4-8b28-37dd36bf63d7.png" 
              alt="V8 Wide Technologies" 
              className="h-10 w-auto"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors relative after:content-[''] after:absolute after:w-0 after:h-0.5 after:bottom-[-4px] after:left-0 after:bg-primary after:transition-all hover:after:w-full"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <Phone className="h-4 w-4 text-primary" />
              <span>(555) 123-4567</span>
            </div>
            <Button className="bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
              Get Quote
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                <img 
                  src="/lovable-uploads/848ecb84-9967-43b4-8b28-37dd36bf63d7.png" 
                  alt="V8 Wide Technologies" 
                  className="h-8 w-auto mb-4"
                />
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-2 py-2 text-lg font-medium text-foreground hover:text-primary transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="border-t pt-4 space-y-3">
                  <div className="flex items-center space-x-2 px-2 text-muted-foreground">
                    <Phone className="h-4 w-4 text-primary" />
                    <span>(555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-2 px-2 text-muted-foreground">
                    <Mail className="h-4 w-4 text-primary" />
                    <span>info@v8tech.com</span>
                  </div>
                  <Button className="mx-2 mt-4 bg-gradient-to-r from-primary to-accent">
                    Get Quote
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
