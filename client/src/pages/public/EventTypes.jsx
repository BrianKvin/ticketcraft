import React from "react";

const EventTypes = () => {
  const eventTypes = [
    {
      name: "Food & Drinks",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ),
    },
    { 
      name: "Music", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ) 
    },
    {
      name: "Nightlife",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4z"/>
        </svg>
      ),
    },
    {
      name: "Performing & Visual Arts",
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ),
    },
    { 
      name: "Holidays", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z"/>
        </svg>
      ) 
    },
    { 
      name: "Dating", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
        </svg>
      ) 
    },
    { 
      name: "Hobbies", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      ) 
    },
    { 
      name: "Business", 
      icon: (
        <svg className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
        </svg>
      ) 
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Perfect for Every Event Type
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            From music festivals to business conferences, our platform adapts to
            your unique event needs
          </p>
        </div>

        {/* Event types grid - all in one row with uniform spacing */}
        <div className="flex justify-center items-start space-x-8 md:space-x-12 lg:space-x-16">
          {eventTypes.map((type, index) => (
            <div
              key={index}
              className="group flex flex-col items-center cursor-pointer transition-all duration-300 transform hover:scale-110 flex-shrink-0"
            >
              {/* Circle with icon */}
              <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full border-2 border-gray-300 flex items-center justify-center transition-all duration-300 group-hover:border-green-500 group-hover:bg-green-50 group-hover:shadow-lg">
                <div className="text-gray-600 transition-all duration-300 group-hover:scale-110 group-hover:text-green-600">
                  {type.icon}
                </div>
              </div>
              
              {/* Text below circle with wrapping */}
              <span className="text-xs md:text-sm lg:text-base font-medium text-gray-700 text-center mt-3 transition-all duration-300 group-hover:text-green-600 group-hover:font-semibold max-w-20 md:max-w-24 lg:max-w-28 leading-tight">
                {type.name}
              </span>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 text-lg">
            And many more event categories to explore!
          </p>
        </div>
      </div>
    </section>
  );
};

export default EventTypes;
