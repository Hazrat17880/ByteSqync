"use client"
import { useState, useEffect, useRef } from 'react';
import { MapPin, Phone, Clock, Globe, ExternalLink, Maximize2, Navigation, Plus, Minus } from 'lucide-react';
import HoverableText from '../common/HoverText';

export default function PremiumLocationCards() {
  const [activeLocation, setActiveLocation] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [mapZoom, setMapZoom] = useState(15);
  const mapRef = useRef(null);



  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, []);

  const locations = [
    {
      id: 1,
      city: 'Kabul',
      country: 'Afghanistan',
      address: 'Cinema Zainab Road, Shahr – Naw',
      coordinates: { lat: 34.5167, lng: 69.1833 },
      phone: '+93 78 168 0769',
      hours: 'Sun - Thu: 8:00 AM - 6:00 PM, Fri: 9:00 AM - 1:00 PM',
      timezone: 'Afghanistan Time (GMT+4:30)',
      googleMapsLink: 'https://goo.gl/maps/example-kabul',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d761.8052415673302!2d69.16835062848607!3d34.53101399830426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38d16f5598777621%3A0x692d8a3f66fbf435!2sPixi%20Creative!5e1!3m2!1sen!2sus!4v1757570991132!5m2!1sen!2sus'
    },
    {
      id: 2,
      city: 'Islamabad',
      country: 'Pakistan',
      address: 'Elanza Mall D-Block , Gulderberg Desidinca Islamabad',
      coordinates: { lat: 32.7950, lng: -116.9625 },
      phone: '+92 315 944 92 46',
      hours: 'Mon - Fri: 9:00 AM - 5:00 PM, Sat: 10:00 AM - 2:00 PM',
      timezone: 'Pacific Time (GMT-8)',
      googleMapsLink: 'https://goo.gl/maps/example-california',
      embedUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d53743.73822375402!2d-116.99972210136718!3d32.79580299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80d957608ab2ac6d%3A0x40712ac497ffb4e8!2sEl%20Cajon%2C%20CA%2C%20USA!5e0!3m2!1sen!2s!4v1740322320425!5m2!1sen!2s'
    }
  ];

  const openGoogleMaps = (link) => {
    window.open(link, '_blank');
  };

  const showDirections = (index) => {
    setActiveLocation(index);
  };

  const handleZoomIn = () => {
    setMapZoom(prev => Math.min(prev + 1, 20));
  };

  const handleZoomOut = () => {
    setMapZoom(prev => Math.max(prev - 1, 1));
  };

  const updateMapZoomParam = (url, zoom) => {
    // Simple function to update zoom parameter in Google Maps URL
    if (url.includes('!1m')) {
      return url.replace(/!1m\d+!2m\d+!3m\d+/, `!1m${zoom}!2m${zoom}!3m${zoom}`);
    }
    return url;
  };

  return (
    <div className="py-16 px-4 bg-gradient-to-b from-slate-50 to-slate-100 relative overflow-hidden mb-10">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-100 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-100 rounded-full translate-x-1/3 translate-y-1/3 opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
           <HoverableText text={' Our'} color='text-[#1f4668]'/> <span className="text-[#27AAE1]"><HoverableText text={'Global'} color='text-[#27AAE1]'/></span> <HoverableText text={'Presence'} color='text-[#1f4668]'/>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            With offices in multiple countries, we bring a unique blend of global expertise and local market insights.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Location Cards - Always visible */}
          <div className="lg:w-2/5 flex flex-col gap-6">
            {locations.map((location, index) => (
              <div 
                key={location.id} 
                className={`bg-white rounded-2xl overflow-hidden shadow-xl transform transition-all duration-300 hover:shadow-2xl cursor-pointer border ${activeLocation === index ? 'border-[#27AAE1]' : 'border-gray-200'}`}
                onClick={() => setActiveLocation(index)}
              >
                {/* Header with city and country */}
                <div className="p-6 pb-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-bold text-[#1f4668]">{location.city}</h3>
                      <p className="text-gray-600">{location.country}</p>
                    </div>
                    <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-medium">
                      Office {index + 1}
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6 pt-0">
                  <div className="flex items-start mb-4">
                    <div className="bg-[#1f4668] p-2 rounded-lg mr-4 flex-shrink-0">
                      <MapPin className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Address</h4>
                      <p className="text-gray-600 mt-1 text-sm">{location.address}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start mb-4">
                    <div className="bg-[#1f4668] p-2 rounded-lg mr-4 flex-shrink-0">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Phone</h4>
                      <p className="text-gray-600 mt-1 text-sm">{location.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-[#1f4668] p-2 rounded-lg mr-4 flex-shrink-0">
                      <Clock className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600 mt-1 text-sm">{location.hours}</p>
                      <p className="text-gray-500 text-xs mt-1">{location.timezone}</p>
                    </div>
                  </div>
                  
                  {/* Mobile only - Map redirect button */}
                  {isMobile && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        openGoogleMaps(location.googleMapsLink);
                      }}
                      className="mt-6 w-full bg-[#1f4668] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-[#15324c] hover:shadow-md"
                    >
                      Open in Maps
                      <ExternalLink className="h-4 w-4 ml-2" />
                    </button>
                  )}
                  
                  {/* Desktop - Show on map button */}
                  {!isMobile && (
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        showDirections(index);
                      }}
                      className="mt-6 w-full bg-[#1f4668] text-white py-3 px-4 rounded-lg font-medium flex items-center justify-center transition-all hover:bg-[#15324c] hover:shadow-md"
                    >
                      <Navigation className="h-4 w-4 mr-2" />
                      Show on Map
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          {/* Map Section - Visible on large screens */}
          {!isMobile && (
            <div className="lg:w-3/5">
              <div className="bg-white rounded-2xl overflow-hidden shadow-xl h-full border border-gray-200">
                <div className="relative h-full min-h-[600px]">
                  {/* Map header with location info */}
                  <div className="p-6 border-b border-gray-200">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-2xl font-bold text-[#1f4668] flex items-center">
                          <MapPin className="h-6 w-6 text-[#27AAE1] mr-2" />
                          {locations[activeLocation].city} Office
                        </h3>
                        <p className="text-gray-600 mt-1">{locations[activeLocation].address}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Map container */}
                  <div className="h-full w-full bg-gray-100 flex items-center justify-center relative">
                    {/* Actual Google Maps iframe */}
                    <iframe
                      ref={mapRef}
                      src={updateMapZoomParam(locations[activeLocation].embedUrl, mapZoom)}
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="absolute inset-0"
                    ></iframe>
                    
                    {/* Map controls overlay */}
                    <div className="absolute top-4 right-4 flex flex-col gap-2">
                      <button 
                        className="bg-white p-2 rounded-lg shadow-md hover:bg-gray-50 transition-colors"
                        onClick={() => {
                          const iframe = mapRef.current;
                          if (iframe && iframe.requestFullscreen) {
                            iframe.requestFullscreen();
                          }
                        }}
                      >
                        <Maximize2 className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Zoom controls */}
                    <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md overflow-hidden">
                      <button 
                        className="p-2 hover:bg-gray-50 border-b border-gray-100 transition-colors"
                        onClick={handleZoomIn}
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                      <button 
                        className="p-2 hover:bg-gray-50 transition-colors"
                        onClick={handleZoomOut}
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                    </div>
                    
                    {/* Location indicator */}
                    <div className="absolute top-4 left-4 bg-white rounded-lg shadow-lg p-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 rounded-full bg-[#27AAE1] mr-2 animate-pulse"></div>
                        <span className="text-sm font-medium">Current Location</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) }
        </div>
        
      
      </div>
    </div>
  );
}