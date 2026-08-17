// Centralized services list for Cana Event Management

export const servicesData = {
  categories: [
    {
      id: "weddings-celebrations",
      name: "Weddings & Celebrations",
      services: [
        { id: "marriages", name: "Marriages" },
        { id: "destination-weddings", name: "Destination Weddings" },
        { id: "sangeeth", name: "Sangeeth Ceremony" },
        { id: "haldi", name: "Haldi" },
        { id: "bride-groom-entry", name: "Bride & Groom Entry" },
        { id: "pool-party", name: "Pool Party" },
        { id: "anniversary", name: "Anniversary" },
        { id: "birthday-party", name: "Birthday Party" },
        { id: "family-reunions", name: "Family Reunions" }
      ]
    },
    {
      id: "corporate-institutional",
      name: "Corporate & Institutional",
      services: [
        { id: "corporate-events", name: "Corporate Events" },
        { id: "product-launches", name: "Product Launches" },
        { id: "school-college-functions", name: "Schools & Colleges Functions" }
      ]
    },
    {
      id: "event-services",
      name: "Event Services",
      services: [
        { id: "photography", name: "Photography" },
        { id: "live-streaming", name: "Live Streaming" },
        { id: "sound-system", name: "Sound System" },
        { id: "catering", name: "Catering Services" }
      ]
    }
  ]
};

// Flattened list of all services for dropdowns and validation
export const allServices = [
  ...servicesData.categories.flatMap(cat => cat.services),
  { id: "custom-service", name: "Custom Service" }
];
