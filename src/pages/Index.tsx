
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
  ArrowRight
} from 'lucide-react';

const Index = () => {
  const featuredCars = mockCars.filter(car => car.isFeatured).slice(0, 3);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 via-accent/5 to-background py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center space-y-8">
              <Badge variant="secondary" className="mb-4 bg-primary/10 text-primary border-primary/20">
                Premium Vehicle Solutions
              </Badge>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                Drive Your
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"> Dreams</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Experience excellence with our curated selection of premium vehicles. 
                Quality guaranteed, service unmatched.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
                <Button size="lg" className="text-lg px-10 py-6 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
                  Browse Vehicles <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-10 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Schedule Visit
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center space-y-2">
                <Car className="h-8 w-8 text-primary mx-auto" />
                <div className="text-3xl font-bold">200+</div>
                <div className="text-sm text-muted-foreground">Premium Cars</div>
              </div>
              <div className="text-center space-y-2">
                <Users className="h-8 w-8 text-primary mx-auto" />
                <div className="text-3xl font-bold">5000+</div>
                <div className="text-sm text-muted-foreground">Happy Clients</div>
              </div>
              <div className="text-center space-y-2">
                <Shield className="h-8 w-8 text-primary mx-auto" />
                <div className="text-3xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Cars - Reduced to 3 */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl md:text-5xl font-bold">Featured Collection</h2>
              <p className="text-muted-foreground max-w-xl mx-auto">
                Handpicked premium vehicles, inspected for excellence.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>

            <div className="text-center">
              <Button variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                View All Inventory <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Simple CTA */}
        <section className="py-20 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4 text-center space-y-8">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Drive?</h2>
            <p className="text-xl opacity-90 max-w-xl mx-auto">
              Connect with our expert team for personalized service.
            </p>
            <Button size="lg" variant="secondary" className="text-lg px-10 py-6">
              Contact Us Today
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
