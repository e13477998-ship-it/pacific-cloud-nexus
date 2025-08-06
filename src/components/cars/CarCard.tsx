
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
    <Card className="group overflow-hidden bg-card/60 backdrop-blur-sm border-border/40 hover:bg-card/80 hover:shadow-xl transition-all duration-500 hover:scale-[1.02]">
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
        
        <div className="absolute top-3 right-3">
          <Badge variant="secondary" className="font-bold text-lg bg-background/90 backdrop-blur-sm">
            {formatPrice(car.price)}
          </Badge>
        </div>

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

      <CardContent className="p-4 bg-gradient-to-b from-transparent to-muted/20">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Gauge className="h-4 w-4 text-primary" />
            <span>{formatMileage(car.mileage)} miles</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Fuel className="h-4 w-4 text-primary" />
            <span>{car.fuelType}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{car.year}</span>
          </div>
          <div className="flex items-center space-x-2 text-muted-foreground">
            <Palette className="h-4 w-4 text-primary" />
            <span>{car.color}</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1 mt-3">
          {car.features.slice(0, 2).map((feature, index) => (
            <Badge key={index} variant="outline" className="text-xs bg-background/50">
              {feature}
            </Badge>
          ))}
          {car.features.length > 2 && (
            <Badge variant="outline" className="text-xs bg-background/50">
              +{car.features.length - 2}
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1 bg-background/50 backdrop-blur-sm hover:bg-primary hover:text-primary-foreground"
          onClick={() => onViewDetails?.(car.id)}
        >
          View Details
        </Button>
        <Button className="flex-1 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90">
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
