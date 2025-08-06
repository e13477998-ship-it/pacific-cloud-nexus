
import { Car, Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Car className="h-6 w-6 text-primary" />
              <span className="text-lg font-bold">Pacifique Drive Hub</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted partner for quality pre-owned vehicles. We've been serving the Pacific region with excellence for over a decade.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Quick Links</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="/inventory" className="hover:text-foreground transition-colors">View Inventory</a></li>
              <li><a href="/financing" className="hover:text-foreground transition-colors">Financing</a></li>
              <li><a href="/trade-in" className="hover:text-foreground transition-colors">Trade-In</a></li>
              <li><a href="/services" className="hover:text-foreground transition-colors">Services</a></li>
              <li><a href="/about" className="hover:text-foreground transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Vehicle Sales</li>
              <li>Auto Financing</li>
              <li>Trade-In Appraisal</li>
              <li>Extended Warranties</li>
              <li>Vehicle Inspection</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Contact Us</h4>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>123 Pacific Drive, Ocean City, CA 90210</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>(555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>info@pacifiquedrivehub.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 mt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 Pacifique Drive Hub. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
