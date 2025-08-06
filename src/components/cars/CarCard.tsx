
import { Car } from '@/types/car';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Fuel, Gauge, Calendar, Palette } from 'lucide-react';

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
    <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative">
        <img
          src={car.images[0]}
          alt={`${car.year} ${car.make} ${car.model}`}
          className="w-full h-48 object-cover"
        />
        {car.isFeatured && (
          <Badge className="absolute top-2 left-2">Featured</Badge>
        )}
        <div className="absolute top-2 right-2">
          <Badge variant="secondary" className="font-bold">
            {formatPrice(car.price)}
          </Badge>
        </div>
      </div>

      <CardContent className="p-4">
        <div className="space-y-3">
          <div>
            <h3 className="font-bold text-lg">
              {car.year} {car.make} {car.model}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {car.description}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-2 text-sm">
            <div className="flex items-center space-x-1">
              <Gauge className="h-4 w-4 text-muted-foreground" />
              <span>{formatMileage(car.mileage)} miles</span>
            </div>
            <div className="flex items-center space-x-1">
              <Fuel className="h-4 w-4 text-muted-foreground" />
              <span>{car.fuelType}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="h-4 w-4 text-muted-foreground" />
              <span>{car.year}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Palette className="h-4 w-4 text-muted-foreground" />
              <span>{car.color}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-1">
            {car.features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="outline" className="text-xs">
                {feature}
              </Badge>
            ))}
            {car.features.length > 3 && (
              <Badge variant="outline" className="text-xs">
                +{car.features.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex gap-2">
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={() => onViewDetails?.(car.id)}
        >
          View Details
        </Button>
        <Button className="flex-1">
          Contact Us
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CarCard;
