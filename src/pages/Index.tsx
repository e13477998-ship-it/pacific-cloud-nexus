
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CarCard from '@/components/cars/CarCard';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { mockCars } from '@/data/cars';
import { 
  Car, 
  Shield, 
  DollarSign, 
  Users, 
  Star, 
  ArrowRight,
  CheckCircle,
  Award
} from 'lucide-react';

const Index = () => {
  const featuredCars = mockCars.filter(car => car.isFeatured).slice(0, 4);

  const stats = [
    { icon: Car, label: 'Vehicles in Stock', value: '250+' },
    { icon: Users, label: 'Happy Customers', value: '5000+' },
    { icon: Award, label: 'Years in Business', value: '15+' },
    { icon: Star, label: 'Average Rating', value: '4.9' },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All our vehicles undergo thorough inspection and come with warranty coverage.'
    },
    {
      icon: DollarSign,
      title: 'Best Prices',
      description: 'Competitive pricing and flexible financing options to fit your budget.'
    },
    {
      icon: Users,
      title: 'Expert Service',
      description: 'Our experienced team provides personalized service and expert advice.'
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <Badge variant="secondary" className="mb-4">
                Your Trusted Car Dealer Since 2009
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                Find Your Perfect
                <span className="text-primary"> Dream Car</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Discover premium pre-owned vehicles with guaranteed quality, competitive prices, 
                and exceptional service at Pacifique Drive Hub.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                <Button size="lg" className="text-lg px-8">
                  View Inventory <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  Get Pre-Approved
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center space-y-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <div className="text-3xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Cars Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Featured Vehicles</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Check out our handpicked selection of premium vehicles, 
                each inspected for quality and performance.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg">
                View All Vehicles <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                We're committed to providing you with the best car buying experience possible.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Find Your Car?</h2>
            <p className="text-xl opacity-90 max-w-2xl mx-auto">
              Browse our extensive inventory or contact our team for personalized assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Browse Inventory
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Contact Us Today
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
