
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="relative bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 py-20">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="container mx-auto px-4 relative">
            <div className="text-center space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Contact Us
              </h1>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-medium">
                Get in touch with our team for any inquiries about our vehicles or services
              </p>
            </div>
          </div>
        </section>

        {/* Contact Info & Form */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Contact Information */}
              <div className="space-y-8">
                <div className="text-center lg:text-left">
                  <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Get In Touch
                  </h2>
                  <p className="text-foreground/70 mb-8 text-lg">
                    We're here to help you find the perfect vehicle. Contact us through any of the following methods:
                  </p>
                </div>

                <div className="grid gap-6">
                  <Card className="group bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <MapPin className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">Location</h3>
                          <p className="text-foreground/80 font-medium">KABEZA, KIGALI</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <Phone className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">Phone</h3>
                          <p className="text-foreground/80 font-medium">+250 788 411 606</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <Mail className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">Email</h3>
                          <p className="text-foreground/80 font-medium">njpat1991@gmail.com</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="group bg-card/80 backdrop-blur-md border-2 border-primary/20 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="flex items-center space-x-6">
                        <div className="bg-gradient-to-br from-primary/20 to-accent/20 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                          <Clock className="h-8 w-8 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-bold text-lg text-foreground">Business Hours</h3>
                          <p className="text-foreground/80 font-medium">Mon - Sat: 8:00 AM - 6:00 PM</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <Card className="bg-card/80 backdrop-blur-md border-2 border-primary/20 shadow-2xl shadow-primary/10">
                <CardHeader className="pb-8">
                  <CardTitle className="text-2xl font-bold text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">First Name</label>
                      <Input 
                        placeholder="Your first name" 
                        className="bg-background/70 border-2 border-primary/30 focus:border-primary/60 text-foreground"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-semibold mb-3 block text-foreground">Last Name</label>
                      <Input 
                        placeholder="Your last name" 
                        className="bg-background/70 border-2 border-primary/30 focus:border-primary/60 text-foreground"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Email</label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com" 
                      className="bg-background/70 border-2 border-primary/30 focus:border-primary/60 text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Phone</label>
                    <Input 
                      placeholder="Your phone number" 
                      className="bg-background/70 border-2 border-primary/30 focus:border-primary/60 text-foreground"
                    />
                  </div>
                  
                  <div>
                    <label className="text-sm font-semibold mb-3 block text-foreground">Message</label>
                    <Textarea 
                      placeholder="Tell us about your requirements..." 
                      rows={5}
                      className="bg-background/70 border-2 border-primary/30 focus:border-primary/60 text-foreground resize-none"
                    />
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white font-semibold py-3 h-auto shadow-lg hover:shadow-xl transition-all duration-300">
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
