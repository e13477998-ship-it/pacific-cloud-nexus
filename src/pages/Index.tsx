import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CarCard from '@/components/cars/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { mockCars } from '@/data/cars';
import { Car, Shield, Users, Search, MapPin, Phone, Mail } from 'lucide-react';
import { useState } from 'react';
const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [makeFilter, setMakeFilter] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');

  const uniqueMakes = Array.from(new Set(mockCars.map(car => car.make)));

  // Filter cars based on search, make, and category
  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) || car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = makeFilter === 'all' || car.make === makeFilter;
    const matchesCategory = selectedCategory === 'all' || selectedCategory === 'featured' && car.isFeatured || selectedCategory === 'sedan' && car.bodyType === 'Sedan' || selectedCategory === 'suv' && car.bodyType === 'SUV' || selectedCategory === 'electric' && car.fuelType === 'Electric';
    return matchesSearch && matchesMake && matchesCategory;
  });

  // Sort cars
  const sortedCars = [...filteredCars].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'year-new':
        return b.year - a.year;
      case 'year-old':
        return a.year - b.year;
      default:
        return 0;
    }
  });
  const categories = [{
    id: 'all',
    label: 'All Cars',
    icon: Car
  }, {
    id: 'featured',
    label: 'Featured',
    icon: Shield
  }, {
    id: 'sedan',
    label: 'Sedan',
    icon: Car
  }, {
    id: 'suv',
    label: 'SUV',
    icon: Car
  }, {
    id: 'electric',
    label: 'Electric',
    icon: Car
  }];
  return <div className="min-h-screen flex flex-col bg-background">
      <Header />

      <main className="flex-1">
        {/* Hero Section with Background */}
        <section className="relative bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 py-20">
          <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
          <div className="absolute inset-0 bg-[url('/lovable-uploads/c77209e3-adcf-4188-a7ec-c435b42b5712.png')] bg-cover bg-center opacity-30 brightness-110 contrast-105" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center space-y-6">
              
              <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
                Premium Car Rental
              </h1>
              <p className="text-foreground/70 max-w-2xl mx-auto text-lg font-medium">
                Discover our premium collection of vehicles. Quality guaranteed, service unmatched.
              </p>
            </div>
          </div>
        </section>

        {/* Search and Filter Section */}
        <section className="py-8 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-foreground/70" />
                  <Input
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 bg-background/80 border-2 border-primary/30 focus:border-primary/60 text-foreground"
                  />
                </div>
                <Select value={makeFilter} onValueChange={setMakeFilter}>
                  <SelectTrigger className="w-32 bg-background/80 border-2 border-primary/30 text-foreground">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Makes</SelectItem>
                    {uniqueMakes.map(make => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-16 bg-gradient-to-b from-background to-muted/20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {sortedCars.map(car => <CarCard key={car.id} car={car} />)}
            </div>
            
            {sortedCars.length === 0 && <div className="text-center py-16">
                <Car className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No cars found</h3>
                <p className="text-muted-foreground">Try adjusting your search or filters</p>
              </div>}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-primary to-accent text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="flex flex-col items-center space-y-2">
                <MapPin className="h-8 w-8" />
                <h3 className="font-semibold">Location</h3>
                <p className="text-primary-foreground/90">KABEZA, KIGALI</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Mail className="h-8 w-8" />
                <h3 className="font-semibold">Email</h3>
                <p className="text-primary-foreground/90">njpat1991@gmail.com</p>
              </div>
              <div className="flex flex-col items-center space-y-2">
                <Phone className="h-8 w-8" />
                <h3 className="font-semibold">Phone</h3>
                <p className="text-primary-foreground/90">+250 788 411 606</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default Index;