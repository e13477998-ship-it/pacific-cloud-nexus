
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CarCard from '@/components/cars/CarCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { mockCars } from '@/data/cars';
import { Search, Filter } from 'lucide-react';
import { useState } from 'react';

const Inventory = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [makeFilter, setMakeFilter] = useState('all');
  const [priceFilter, setPriceFilter] = useState('all');

  const uniqueMakes = Array.from(new Set(mockCars.map(car => car.make)));

  const filteredCars = mockCars.filter(car => {
    const matchesSearch = car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         car.model.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesMake = makeFilter === 'all' || car.make === makeFilter;
    const matchesPrice = priceFilter === 'all' || 
                        (priceFilter === 'under-30k' && car.price < 30000) ||
                        (priceFilter === '30k-50k' && car.price >= 30000 && car.price < 50000) ||
                        (priceFilter === 'over-50k' && car.price >= 50000);
    
    return matchesSearch && matchesMake && matchesPrice;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold">Vehicle Inventory</h1>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Explore our complete collection of premium vehicles
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              <div className="flex gap-4 w-full md:w-auto">
                <div className="relative flex-1 md:w-64">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    placeholder="Search vehicles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Select value={makeFilter} onValueChange={setMakeFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Makes</SelectItem>
                    {uniqueMakes.map(make => (
                      <SelectItem key={make} value={make}>{make}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Select value={priceFilter} onValueChange={setPriceFilter}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Price" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Prices</SelectItem>
                    <SelectItem value="under-30k">Under $30k</SelectItem>
                    <SelectItem value="30k-50k">$30k - $50k</SelectItem>
                    <SelectItem value="over-50k">Over $50k</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="text-sm text-muted-foreground">
                {filteredCars.length} vehicles found
              </div>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
            
            {filteredCars.length === 0 && (
              <div className="text-center py-16">
                <Filter className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">No vehicles found</h3>
                <p className="text-muted-foreground">Try adjusting your search filters</p>
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Inventory;
