import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Shield, Award, Users, Heart, ArrowRight } from 'lucide-react';
const About = () => {
  const values = [{
    icon: Shield,
    title: 'Quality Assurance',
    description: 'Every vehicle undergoes rigorous inspection to ensure premium quality and reliability.'
  }, {
    icon: Heart,
    title: 'Customer First',
    description: 'Your satisfaction is our priority. We provide personalized service every step of the way.'
  }, {
    icon: Award,
    title: 'Expert Service',
    description: '15+ years of experience in the automotive industry with certified professionals.'
  }];
  const stats = [{
    label: 'Years in Business',
    value: '15+'
  }, {
    label: 'Vehicles Sold',
    value: '10,000+'
  }, {
    label: 'Customer Satisfaction',
    value: '99%'
  }, {
    label: 'Service Awards',
    value: '25+'
  }];
  return <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                Our Story
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold">
                Excellence in
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Automotive</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                For over 15 years, V8 Wide Technologies has been your trusted partner in 
                premium vehicle solutions, delivering unmatched quality and service.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Statement */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                    We believe everyone deserves access to premium vehicles backed by exceptional service. 
                    Our mission is to revolutionize the car buying experience through transparency, 
                    quality, and genuine care for our customers.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    From the moment you walk through our doors to long after your purchase, 
                    we're committed to building lasting relationships based on trust and satisfaction.
                  </p>
                </div>
                
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-3xl md:text-4xl font-bold">Our Values</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that drive everything we do
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => <div key={index} className="text-center space-y-4 p-6 bg-background rounded-xl shadow-sm">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-accent rounded-3xl p-12 text-center text-primary-foreground">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Experience the Difference</h2>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've found their perfect vehicle with us.
              </p>
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Visit Our Showroom <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;