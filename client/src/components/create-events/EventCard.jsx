import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { CalendarDays, MapPin, Users, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const EventCard = ({
  id,
  title,
  date,
  location,
  attendees,
  price,
  image,
  category,
}) => {
  return (
    <Card className="group overflow-hidden bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
      <CardHeader className="p-0">
        <div className="relative h-48 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
          />
          <div className="absolute top-3 left-3">
            <span className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
              {category}
            </span>
          </div>
          <div className="absolute top-3 right-3">
            <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm font-medium">
              ${price}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-200 transition-colors">
          {title}
        </h3>

        <div className="space-y-2 text-white/80">
          <div className="flex items-center space-x-2">
            <CalendarDays size={16} className="text-purple-300" />
            <span className="text-sm">{date}</span>
          </div>
          <div className="flex items-center space-x-2">
            <MapPin size={16} className="text-purple-300" />
            <span className="text-sm">{location}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Users size={16} className="text-purple-300" />
            <span className="text-sm">{attendees} attending</span>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Link to={`/event/${id}`} className="w-full">
          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 transition-all duration-200">
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
