// Centralized Instagram Reels data for Cana Event Management
// Contains all 15 official Instagram Reel URLs and handles dynamic embed urls resolution

const getEmbedUrl = (url) => {
  const cleanUrl = url.split("?")[0];
  const formatted = cleanUrl.endsWith("/") ? cleanUrl : `${cleanUrl}/`;
  return `${formatted}embed/`;
};

const instagramReels = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DVhww06k8IF/?igsh=eWFydG05dHpjNWUw&igsi=eWFydG05dHpjNWUw",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVhww06k8IF/"),
    title: "Elite Corporate Event"
  },
  {
    id: 2,
    url: "https://www.instagram.com/reel/DVkOqvfE0Mx/?igsh=MTNqcDNueTlreHk1bQ==&igsi=MTNqcDNueTlreHk1bQ==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVkOqvfE0Mx/"),
    title: "School & College Fest"
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DVlrlG8k8Ts/?igsh=cDVyZTQ2bWQxYjlj&igsi=cDVyZTQ2bWQxYjlj",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVlrlG8k8Ts/"),
    title: "Grand Dream Wedding"
  },
  {
    id: 4,
    url: "https://www.instagram.com/reel/DVoLvTSk704/?igsh=MWluN3k4YnUzeHZ0ZQ==&igsi=MWluN3k4YnUzeHZ0ZQ==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVoLvTSk704/"),
    title: "Premium Photography"
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DVoViJUgCEt/?igsh=a20yeDloajNuNndi&igsi=a20yeDloajNuNndi",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVoViJUgCEt/"),
    title: "Exquisite Celebrations"
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DVq1Padk-2l/?igsh=ZDR0dDg0bnp2NXIx&igsi=DVq1Padk-2l",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVq1Padk-2l/"),
    title: "Corporate Elegance"
  },
  {
    id: 7,
    url: "https://www.instagram.com/reel/DVsDQO1E6vP/?igsh=MXNjOGlrcjdyMTQzbA==&igsi=MXNjOGlrcjdyMTQzbA==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DVsDQO1E6vP/"),
    title: "Grand Concert Fest"
  },
  {
    id: 8,
    url: "https://www.instagram.com/reel/DV06PEKE-Fg/?igsh=dHIzZzRvOXR3ZXV0&igsi=dHIzZzRvOXR3ZXV0",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DV06PEKE-Fg/"),
    title: "Luxury Event Sangeeth"
  },
  {
    id: 9,
    url: "https://www.instagram.com/reel/DX8HQ7uTyH2/?igsh=MWZidm43N3hiMm9jOQ==&igsi=MWZidm43N3hiMm9jOQ==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DX8HQ7uTyH2/"),
    title: "Haldi & Celebrations"
  },
  {
    id: 10,
    url: "https://www.instagram.com/reel/DYGnyikT0eU/?igsh=cXZ6MGoyOG45bTdp&igsi=cXZ6MGoyOG45bTdp",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DYGnyikT0eU/"),
    title: "Bride & Groom Entry"
  },
  {
    id: 11,
    url: "https://www.instagram.com/reel/DViZgWhCbrO/?igsh=MXRpam0xZGY5d21rbQ==&igsi=MXRpam0xZGY5d21rbQ==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DViZgWhCbrO/"),
    title: "Premium Launch Showcase"
  },
  {
    id: 12,
    url: "https://www.instagram.com/reel/DW0V4QjE36e/?igsh=OWF3ZjB6bnRtbGwz&igsi=DW0V4QjE36e",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DW0V4QjE36e/"),
    title: "Product Reveal"
  },
  {
    id: 13,
    url: "https://www.instagram.com/reel/DaTAGGZzbw4/?igsh=MW43c3h2anR2am42bA==&igsi=DaTAGGZzbw4",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DaTAGGZzbw4/"),
    title: "Pool Party Production"
  },
  {
    id: 14,
    url: "https://www.instagram.com/reel/DW3TTpxDnqD/?igsh=MWc4dGMwNWpmd3A3dw==&igsi=DW3TTpxDnqD",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DW3TTpxDnqD/"),
    title: "Sound & Stage setup"
  },
  {
    id: 15,
    url: "https://www.instagram.com/reel/DW5O-c9E5wj/?igsh=MWpzdm52d3Fyd3gxdg==&igsi=MWpzdm52d3Fyd3gxdg==",
    embedUrl: getEmbedUrl("https://www.instagram.com/reel/DW5O-c9E5wj/"),
    title: "Professional Catering Showcase"
  }
];

export default instagramReels;
