import React, { useState } from "react";
import {
  User,
  Mail,
  Building,
  Phone,
  MapPin,
  Calendar,
  Edit,
  Save,
  X,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const OrganizerProfile = ({ organizer }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [profileData, setProfileData] = useState({
    name: organizer.name,
    email: organizer.email,
    company: organizer.company || "",
    phone: organizer.phone || "",
    location: organizer.location || "",
    bio: organizer.bio || "",
  });

  const handleSave = () => {
    // In a real app, this would save to the backend
    console.log("Saving profile data:", profileData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setProfileData({
      name: organizer.name,
      email: organizer.email,
      company: organizer.company || "",
      phone: organizer.phone || "",
      location: organizer.location || "",
      bio: organizer.bio || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">My Profile</h1>
        <p className="text-gray-600">
          Manage your organizer profile and account settings
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Profile Card */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader className="text-center">
              <div className="flex justify-center mb-4">
                <Avatar className="h-24 w-24">
                  <AvatarImage src="/placeholder.svg" alt={organizer.name} />
                  <AvatarFallback className="text-2xl bg-green-500 text-white">
                    {organizer.initials}
                  </AvatarFallback>
                </Avatar>
              </div>
              <CardTitle className="text-xl">{organizer.name}</CardTitle>
              <p className="text-gray-600">
                {organizer.company || "Event Organizer"}
              </p>
              <div className="flex items-center justify-center gap-1 text-sm text-gray-500 mt-2">
                <Calendar className="h-4 w-4" />
                <span>Member since {organizer.joinDate}</span>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-sm">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">{organizer.email}</span>
                </div>
                {organizer.phone && (
                  <div className="flex items-center gap-2 text-sm">
                    <Phone className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{organizer.phone}</span>
                  </div>
                )}
                {organizer.location && (
                  <div className="flex items-center gap-2 text-sm">
                    <MapPin className="h-4 w-4 text-gray-500" />
                    <span className="text-gray-600">{organizer.location}</span>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Quick Stats */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle className="text-lg">Quick Stats</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Events</span>
                  <span className="font-semibold">2</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Attendees</span>
                  <span className="font-semibold">187</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Total Revenue</span>
                  <span className="font-semibold">$51,045</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Avg. Rating</span>
                  <span className="font-semibold">4.8/5</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Information */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="flex items-center gap-2">
                  <User className="h-5 w-5" />
                  Profile Information
                </CardTitle>
                {!isEditing ? (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setIsEditing(true)}
                  >
                    <Edit className="h-4 w-4 mr-2" />
                    Edit Profile
                  </Button>
                ) : (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" onClick={handleCancel}>
                      <X className="h-4 w-4 mr-2" />
                      Cancel
                    </Button>
                    <Button
                      size="sm"
                      onClick={handleSave}
                      className="bg-green-500 hover:bg-green-600"
                    >
                      <Save className="h-4 w-4 mr-2" />
                      Save Changes
                    </Button>
                  </div>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    {isEditing ? (
                      <Input
                        id="name"
                        value={profileData.name}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            name: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">
                        {profileData.name}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    {isEditing ? (
                      <Input
                        id="email"
                        type="email"
                        value={profileData.email}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            email: e.target.value,
                          })
                        }
                        className="mt-1"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">
                        {profileData.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="company">Company/Organization</Label>
                    {isEditing ? (
                      <Input
                        id="company"
                        value={profileData.company}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            company: e.target.value,
                          })
                        }
                        className="mt-1"
                        placeholder="Your company name"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">
                        {profileData.company || "Not specified"}
                      </p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    {isEditing ? (
                      <Input
                        id="phone"
                        value={profileData.phone}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            phone: e.target.value,
                          })
                        }
                        className="mt-1"
                        placeholder="Your phone number"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">
                        {profileData.phone || "Not specified"}
                      </p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="location">Location</Label>
                    {isEditing ? (
                      <Input
                        id="location"
                        value={profileData.location}
                        onChange={(e) =>
                          setProfileData({
                            ...profileData,
                            location: e.target.value,
                          })
                        }
                        className="mt-1"
                        placeholder="City, State/Country"
                      />
                    ) : (
                      <p className="mt-1 text-sm text-gray-900">
                        {profileData.location || "Not specified"}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <Label htmlFor="bio">Bio</Label>
                  {isEditing ? (
                    <Textarea
                      id="bio"
                      value={profileData.bio}
                      onChange={(e) =>
                        setProfileData({ ...profileData, bio: e.target.value })
                      }
                      className="mt-1"
                      rows={4}
                      placeholder="Tell us about yourself and your event organizing experience..."
                    />
                  ) : (
                    <p className="mt-1 text-sm text-gray-900">
                      {profileData.bio || "No bio provided yet."}
                    </p>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card className="mt-6">
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-medium">Email Notifications</h4>
                    <p className="text-xs text-gray-600">
                      Get notified about new registrations and updates
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Configure
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-medium">Payment Settings</h4>
                    <p className="text-xs text-gray-600">
                      Manage your payment methods and payouts
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-medium">Privacy Settings</h4>
                    <p className="text-xs text-gray-600">
                      Control who can see your profile information
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Update
                  </Button>
                </div>
                <div className="flex items-center justify-between py-2">
                  <div>
                    <h4 className="text-sm font-medium">Change Password</h4>
                    <p className="text-xs text-gray-600">
                      Update your account password
                    </p>
                  </div>
                  <Button variant="outline" size="sm">
                    Change
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OrganizerProfile;
