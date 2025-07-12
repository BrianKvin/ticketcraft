import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Edit, MapPin, Calendar, Trophy } from "lucide-react";

const ProfileCard = ({
  name,
  title,
  company,
  location,
  avatar,
  eventsAttended,
  eventsCreated,
}) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md border-white/20 overflow-hidden">
      <CardHeader className="text-center pb-2">
        <div className="relative inline-block">
          <Avatar className="w-24 h-24 mx-auto border-4 border-white/30">
            <AvatarImage src={avatar} alt={name} />
            <AvatarFallback className="bg-gradient-to-br from-purple-500 to-blue-500 text-white text-2xl font-bold">
              {name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
        </div>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-white">{name}</h2>
          <p className="text-purple-200 font-medium">{title}</p>
          <p className="text-white/70">{company}</p>
        </div>

        <div className="flex items-center justify-center mt-2 text-white/60">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{location}</span>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-2">
                <Calendar size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                {eventsAttended}
              </div>
              <div className="text-xs text-white/60">Events Attended</div>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mb-2">
                <Trophy size={20} className="text-white" />
              </div>
              <div className="text-2xl font-bold text-white">
                {eventsCreated}
              </div>
              <div className="text-xs text-white/60">Events Created</div>
            </div>
          </div>
        </div>

        <Button className="w-full bg-white/20 hover:bg-white/30 text-white border-white/30">
          <Edit size={16} className="mr-2" />
          Edit Profile
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProfileCard;
