// Dynamic Gallery Portfolio Data for Cana Event Management
// Scans asset folders dynamically using Vite's glob import

const localImages = import.meta.glob('/src/assets/images/*/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true, import: 'default' });

const categoriesMap = {
  corporate: "Corporate",
  college: "College & School",
  weddings: "Weddings",
  photoshoots: "Photography",
  gallery: "Other Events"
};

// Generates items based on files that are actually found
const getGalleryItems = () => {
  const items = [];
  let id = 1;

  Object.entries(localImages).forEach(([filePath, imageSrc]) => {
    // Determine category from folder name
    const pathParts = filePath.split('/');
    const folderName = pathParts[pathParts.length - 2].toLowerCase(); // e.g. "corporate", "weddings"
    const fileName = pathParts[pathParts.length - 1]; // e.g. "wedding-01.jpg"

    if (categoriesMap[folderName] && !fileName.startsWith('.')) {
      // Clean name for display, e.g. "wedding-01" -> "Wedding Event"
      const nameCapitalized = folderName.charAt(0).toUpperCase() + folderName.slice(1);
      const fileIndex = fileName.split('-')[1]?.split('.')[0] || "";
      
      items.push({
        id: id++,
        title: `${nameCapitalized} Work ${fileIndex ? `#${fileIndex}` : ""}`.trim(),
        category: categoriesMap[folderName],
        image: imageSrc,
        originalPath: filePath
      });
    }
  });

  // If no local images exist in any folders, provide a clean mock/fallback structure using Hero images
  if (items.length === 0) {
    const heroImages = import.meta.glob('/src/assets/images/hero/*.{png,jpg,jpeg,webp,PNG,JPG,JPEG,WEBP}', { eager: true, import: 'default' });
    const heroList = Object.values(heroImages);

    const categories = ["Weddings", "Corporate", "College & School", "Photography", "Celebrations", "Other Events"];
    
    categories.forEach((cat, index) => {
      items.push({
        id: id++,
        title: `Premium ${cat}`,
        category: cat,
        // Fallback to one of the hero images if they exist, otherwise a safe gradient fallback
        image: heroList[index % heroList.length] || "/src/assets/images/hero_bg_1.png"
      });
    });
  }

  return items;
};

export const galleryData = getGalleryItems();
