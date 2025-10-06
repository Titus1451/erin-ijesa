export type Highlight = {
  title: string;
  description: string;
  image?: string;
};

export type TravelTip = {
  title: string;
  description: string;
};

export type GalleryItem = {
  id: string;
  src: string;
  alt: string;
};

export type Attraction = {
  title: string;
  description: string;
  image: string;
};

export type SiteContent = {
  hero: {
    title: string;
    subtitle: string;
    image: string;
    video: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  overview: {
    title: string;
    description: string;
    highlights: string[];
  };
  culture: {
    title: string;
    description: string;
    timeline: Highlight[];
  };
  attractions: Attraction[];
  experiences: {
    title: string;
    description: string;
    items: Highlight[];
  };
  planning: {
    title: string;
    description: string;
    tips: TravelTip[];
  };
  gallery: {
    title: string;
    description: string;
    items: GalleryItem[];
  };
  footer: {
    contactEmail: string;
    address: string;
    social: { platform: string; url: string }[];
  };
};

export const defaultContent: SiteContent = {
  hero: {
    title: "Erin Ijesa",
    subtitle:
      "Discover the soul of Osun State at the Olumirin Waterfalls—where lush forests, cascading waters, and rich Yoruba heritage converge to create Nigeria's most enchanting highland escape.",
    image: "https://upload.wikimedia.org/wikipedia/commons/7/71/Erin_Ijesha_Waterfalls.jpg",
    video:
      "https://res.cloudinary.com/da6hlzz0s/video/upload/v1689870760/samples/landscapes/forest-waterfall.mp4",
    ctaPrimary: "Plan Your Adventure",
    ctaSecondary: "Explore the Waterfalls",
  },
  overview: {
    title: "A Cascading Oasis in the Yoruba Highlands",
    description:
      "Tucked within the undulating ridges that separate Erin-Oke and Erin-Ijesa, the Olumirin Waterfalls descend in seven dramatic tiers, each unveiling a new plunge pool, a new vista, and a new story. Since its first recorded sighting in 1140 AD by hunters from Ile-Ife, the falls have been revered as a sacred sanctuary where nature and spirituality flow together.",
    highlights: [
      "Seven-level waterfalls enveloped by evergreen forest canopies.",
      "Gateway to the ancient trade routes of the Ijesa people.",
      "Hub for eco-tourism, adventure hiking, and cultural immersion.",
    ],
  },
  culture: {
    title: "Living Culture & Heritage",
    description:
      "Erin Ijesa is more than its waterfalls—it is a living museum of Yoruba customs. From annual festivals honouring the river goddess to the melodious rhythms of talking drums echoing through the valleys, the community keeps centuries-old traditions vibrantly alive.",
    timeline: [
      {
        title: "Origins in the 12th Century",
        description:
          "Legend narrates that Olumirin, the waterfall spirit, guided migrants from Ile-Ife to settle around the cascading waters, founding Erin Ijesa as a place of refuge and renewal.",
      },
      {
        title: "Royal Connections",
        description:
          "The town maintains deep ties with the Owa Obokun of Ijesaland, and palace ceremonies often commence with libations at the waterfalls to invoke blessings.",
      },
      {
        title: "Festivals of Light",
        description:
          "During the annual Olumirin Festival, the community adorns the terraces with lanterns, drumming, and dance, transforming the falls into a glowing amphitheatre of culture.",
      },
    ],
  },
  attractions: [
    {
      title: "Olumirin Waterfalls",
      description:
        "Ascend through seven waterfalls, each with its own crystal-clear plunge pool and cooling mist. The third level offers panoramic views of the Ijesa countryside, while the seventh rewards daring hikers with tranquil silence.",
      image: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Erin_Ijesha_Waterfalls_steps.jpg",
    },
    {
      title: "Sacred Grove Trails",
      description:
        "Follow forest paths lined with medicinal plants, silk-cotton trees, and shrines where priestesses offer prayers to Olumirin. Guided tours share the ecological and spiritual significance of the grove.",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e",
    },
    {
      title: "Ijesa Culinary Evenings",
      description:
        "Savour farm-to-table delicacies like pounded yam, egusi, and locally fermented palm wine at twilight markets hosted by Erin Ijesa's women cooperatives.",
      image: "https://images.unsplash.com/photo-1555992336-cbf3cd1b79d3",
    },
  ],
  experiences: {
    title: "Why Travellers Love Erin Ijesa",
    description:
      "Whether you seek adrenaline, cultural immersion, or mindful restoration, Erin Ijesa curates unforgettable experiences with the warmth of Yoruba hospitality.",
    items: [
      {
        title: "Adventure & Wellness",
        description:
          "Guided cliff hikes, rainforest yoga, and waterfall hydrotherapy sessions create holistic retreats that refresh body and spirit.",
        image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
      },
      {
        title: "Community Homestays",
        description:
          "Stay with artisan families, learn indigo dyeing, and join moonlit storytelling circles where elders share myths of Olumirin.",
        image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da",
      },
      {
        title: "Birdwatching Haven",
        description:
          "Spot rare species like the white-throated bee-eater and African paradise flycatcher fluttering across the canyons at dawn.",
        image: "https://images.unsplash.com/photo-1444464666168-49d633b86797",
      },
    ],
  },
  planning: {
    title: "Plan Your Journey",
    description:
      "Navigate your trip with insider insights from local guides. Erin Ijesa welcomes explorers all year round, with cascading intensity peaking after the rains.",
    tips: [
      {
        title: "Best Time to Visit",
        description:
          "July to October offers the fullest waterfalls, while November to February delivers cooler hikes and clear sunrise views.",
      },
      {
        title: "Getting There",
        description:
          "Located 2.5 hours from Lagos and 45 minutes from Osogbo. Private shuttles from Akure Airport can be arranged with community tour operators.",
      },
      {
        title: "What to Pack",
        description:
          "Lightweight hiking gear, water shoes for the pools, eco-friendly insect repellent, and a camera to capture the golden hour glow.",
      },
    ],
  },
  gallery: {
    title: "Postcards from Erin Ijesa",
    description:
      "A visual diary of misty mornings, radiant smiles, and the emerald embrace of Osun State's highlands.",
    items: [
      {
        id: "gallery-1",
        src: "https://upload.wikimedia.org/wikipedia/commons/7/71/Erin_Ijesha_Waterfalls.jpg",
        alt: "Visitors at the base of Olumirin Waterfalls",
      },
      {
        id: "gallery-2",
        src: "https://upload.wikimedia.org/wikipedia/commons/d/dc/Erin_Ijesha_Waterfalls_steps.jpg",
        alt: "Stone steps leading through Erin Ijesa's lush forest",
      },
      {
        id: "gallery-3",
        src: "https://upload.wikimedia.org/wikipedia/commons/5/57/Olumirin_Waterfalls.jpg",
        alt: "Upper cascade of the Olumirin Waterfalls",
      },
      {
        id: "gallery-4",
        src: "https://images.unsplash.com/photo-1489515217757-5fd1be406fef",
        alt: "Sunlight breaking through a tropical forest canopy",
      },
    ],
  },
  footer: {
    contactEmail: "hello@erinijesaexperiences.com",
    address: "Olumirin Waterfalls Road, Erin Ijesa, Osun State, Nigeria",
    social: [
      { platform: "Instagram", url: "https://www.instagram.com/explore/tags/erinijesa/" },
      { platform: "YouTube", url: "https://www.youtube.com/results?search_query=erin+ijesa" },
      { platform: "Facebook", url: "https://www.facebook.com/hashtag/erinijesa" },
    ],
  },
};
