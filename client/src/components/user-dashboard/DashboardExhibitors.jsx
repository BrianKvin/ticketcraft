import React from "react";
import { MapPin, MessageCircle, ExternalLink } from "lucide-react";
import Button from "../common/Button";

const DashboardExhibitors = ({
  eventData,
}) => {
  const exhibitors = [
    {
      id: 1,
      name: "TechSolutions Inc.",
      category: "Software Development",
      description:
        "Leading provider of enterprise software solutions and cloud services.",
      booth: "A-12",
      website: "www.techsolutions.com",
      logo: "/placeholder.svg",
      featured: true,
      products: ["Cloud Platform", "AI Analytics", "Security Suite"],
    },
    {
      id: 2,
      name: "InnovateLab",
      category: "Startup Accelerator",
      description:
        "Supporting the next generation of tech entrepreneurs and innovators.",
      booth: "B-08",
      website: "www.innovatelab.com",
      logo: "/placeholder.svg",
      featured: false,
      products: ["Incubation Program", "Mentorship", "Funding Support"],
    },
    {
      id: 3,
      name: "DataFlow Systems",
      category: "Data Analytics",
      description:
        "Advanced data processing and analytics solutions for modern businesses.",
      booth: "A-15",
      website: "www.dataflow.com",
      logo: "/placeholder.svg",
      featured: true,
      products: ["Real-time Analytics", "Data Visualization", "ML Platform"],
    },
    {
      id: 4,
      name: "CyberGuard Pro",
      category: "Cybersecurity",
      description:
        "Comprehensive cybersecurity solutions for enterprise and small business.",
      booth: "C-04",
      website: "www.cyberguard.com",
      logo: "/placeholder.svg",
      featured: false,
      products: ["Threat Detection", "Incident Response", "Security Training"],
    },
    {
      id: 5,
      name: "CloudBase Technologies",
      category: "Cloud Services",
      description: "Multi-cloud infrastructure and DevOps automation platform.",
      booth: "B-11",
      website: "www.cloudbase.com",
      logo: "/placeholder.svg",
      featured: false,
      products: [
        "Cloud Migration",
        "DevOps Tools",
        "Infrastructure Management",
      ],
    },
    {
      id: 6,
      name: "AI Dynamics",
      category: "Artificial Intelligence",
      description:
        "Cutting-edge AI solutions for business automation and intelligence.",
      booth: "A-20",
      website: "www.aidynamics.com",
      logo: "/placeholder.svg",
      featured: true,
      products: [
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
      ],
    },
  ];

  const featuredExhibitors = exhibitors.filter(
    (exhibitor) => exhibitor.featured
  );
  const allExhibitors = exhibitors;

  return (
    <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Event Exhibitors
        </h1>
        <p className="text-gray-600">
          Discover innovative companies and solutions at {eventData.title}
        </p>
      </div>

      {/* Featured Exhibitors */}
      <div className="mb-12">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          Featured Exhibitors
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {featuredExhibitors.map((exhibitor) => (
            <div
              key={exhibitor.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-l-green-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={exhibitor.logo}
                    alt={exhibitor.name}
                    className="w-12 h-12 object-cover rounded-lg"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {exhibitor.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {exhibitor.category}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {exhibitor.description}
                </p>

                <div className="mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                    <MapPin className="h-4 w-4" />
                    Booth {exhibitor.booth}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {exhibitor.products.slice(0, 2).map((product, index) => (
                      <span
                        key={index}
                        className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-2">
                  <Button className="bg-green-500 hover:bg-green-600 text-sm">
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                  <Button variant="outline" className="text-sm">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Visit
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* All Exhibitors */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">
          All Exhibitors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {allExhibitors.map((exhibitor) => (
            <div
              key={exhibitor.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="p-6">
                <div className="flex gap-4">
                  <img
                    src={exhibitor.logo}
                    alt={exhibitor.name}
                    className="w-16 h-16 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">
                          {exhibitor.name}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {exhibitor.category}
                        </p>
                      </div>
                      {exhibitor.featured && (
                        <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                          Featured
                        </span>
                      )}
                    </div>

                    <p className="text-gray-700 text-sm mb-3 leading-relaxed">
                      {exhibitor.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                      <MapPin className="h-4 w-4" />
                      Booth {exhibitor.booth}
                    </div>

                    <div className="flex flex-wrap gap-1 mb-3">
                      {exhibitor.products.map((product, index) => (
                        <span
                          key={index}
                          className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                        >
                          {product}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2">
                      <Button variant="outline" className="text-sm">
                        <MessageCircle className="h-4 w-4 mr-2" />
                        Contact
                      </Button>
                      <Button variant="outline" className="text-sm">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Website
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Exhibitor Map */}
      <div className="mt-12">
        <div className="bg-white rounded-lg shadow-md">
          <div className="p-4 border-b">
            <h3 className="font-semibold">Exhibition Hall Map</h3>
          </div>
          <div className="p-4">
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <p className="text-gray-600 mb-4">
                Interactive Exhibition Hall Map
              </p>
              <div className="bg-white rounded-lg p-6 inline-block">
                <p className="text-sm text-gray-500">
                  Map visualization would be displayed here
                </p>
                <Button className="mt-4 bg-green-500 hover:bg-green-600">
                  View Interactive Map
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardExhibitors;
