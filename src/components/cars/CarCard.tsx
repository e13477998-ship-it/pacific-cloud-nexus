
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Fuel, Gauge, Calendar, Palette, Star } from 'lucide-react';

interface CarCardProps {
  car: Car;
  onViewDetails?: (carId: string) => void;
}

const CarCard = ({ car, onViewDetails }: CarCardProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const formatMileage = (mileage: number) => {
    return new Intl.NumberFormat('en-US').format(mileage);
  };

  return (
    <Card className="group overflow-hidden bg-card/70 backdrop-blur-md border-border/30 hover:bg-card/90 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01] focus-within:ring-2 focus-within:ring-primary/50">
      <div className="relative overflow-hidden">
        <img
          src={car.images[0]}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay with badges */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
        {car.isFeatured && (
          <Badge className="absolute top-3 left-3 bg-accent text-accent-foreground">
            <Star className="h-3 w-3 mr-1" />
            Popular
          </Badge>
        )}
        

        {/* Bottom overlay with car name */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="font-bold text-lg mb-1">
            {car.year} {car.make} {car.model}
          </h3>
          <p className="text-sm opacity-90 line-clamp-2">
            {car.description}
          </p>
        </div>
      </div>

      <CardContent className="p-5 bg-gradient-to-b from-transparent to-muted/10">
        <div className="grid grid-cols-2 gap-4 text-sm mb-4">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Gauge className="h-4 w-4 text-primary/80" />
            <span className="font-medium">{formatMileage(car.mileage)} miles</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Fuel className="h-4 w-4 text-primary/80" />
            <span className="font-medium">{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary/80" />
            <span className="font-medium">{car.year}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Palette className="h-4 w-4 text-primary/80" />
            <span className="font-medium">{car.color}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {car.features.slice(0, 3).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-background/60 border-primary/20 hover:bg-primary/10 transition-colors">
              {feature}
            </Badge>
          ))}
          {car.features.length > 3 && (
            <Badge variant="outline" className="text-xs bg-background/60 border-primary/20">
              +{car.features.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-5 pt-0 flex gap-3">
        <Button 
          variant="outline" 
          className="flex-1 bg-background/60 backdrop-blur-sm hover:bg-primary/90 hover:text-primary-foreground border-primary/30 transition-all duration-200"
          onClick={() => onViewDetails?.(car.id)}
        >
          View Details
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-primary/90 to-accent/90 hover:from-primary hover:to-accent transition-all duration-200">
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
