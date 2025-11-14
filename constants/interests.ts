import {
  AntDesign,
  Feather,
  FontAwesome,
  FontAwesome5,
  FontAwesome6,
  Fontisto,
  Foundation,
  Ionicons,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import { colors } from "./index";

export interface Interest {
  id: string;
  icon: {
    library:
      | typeof AntDesign
      | typeof MaterialIcons
      | typeof Feather
      | typeof Ionicons
      | typeof MaterialCommunityIcons
      | typeof FontAwesome
      | typeof FontAwesome5
      | typeof FontAwesome6
      | typeof Fontisto
      | typeof Foundation;
    name: string;
    color: string;
  };
  label: string;
}

export const INTEREST_CATEGORIES = {
  travel: {
    title: "Travel & Exploration",
    interests: [
      {
        id: "exploring_new_city",
        icon: { library: AntDesign, name: "compass", color: colors.YELLOW },
        label: "Exploring new city",
      },
      {
        id: "student_clubs",
        icon: {
          library: MaterialCommunityIcons,
          name: "account-group-outline",
          color: colors.GREEN,
        },
        label: "Student Clubs",
      },
      {
        id: "campus_events",
        icon: {
          library: FontAwesome5,
          name: "school",
          color: colors.TEAL,
        },
        label: "Campus Events",
      },
      {
        id: "festivals_events",
        icon: {
          library: MaterialIcons,
          name: "festival",
          color: colors.PURPLE,
        },
        label: "Festivals & Events",
      },
    ],
  },

  sports: {
    title: "Sports",
    interests: [
      {
        id: "hiking",
        icon: { library: MaterialIcons, name: "hiking", color: colors.ORANGE },
        label: "Hiking",
      },
      {
        id: "camping",
        icon: { library: Fontisto, name: "tent", color: colors.BROWN },
        label: "Camping",
      },
      {
        id: "running",
        icon: {
          library: MaterialCommunityIcons,
          name: "shoe-sneaker",
          color: colors.RED,
        },
        label: "Running",
      },
      {
        id: "football",
        icon: {
          library: Ionicons,
          name: "football",
          color: colors.BLUE,
        },
        label: "Football",
      },
      {
        id: "baseball",
        icon: {
          library: FontAwesome6,
          name: "baseball-bat-ball",
          color: colors.YELLOW,
        },
        label: "Baseball",
      },
      {
        id: "basketball",
        icon: {
          library: MaterialCommunityIcons,
          name: "basketball-hoop-outline",
          color: colors.GREEN,
        },
        label: "Basketball",
      },
      {
        id: "tennis",
        icon: {
          library: MaterialIcons,
          name: "sports-tennis",
          color: colors.TEAL,
        },
        label: "Tennis",
      },
      {
        id: "badminton",
        icon: {
          library: MaterialCommunityIcons,
          name: "badminton",
          color: colors.PURPLE,
        },
        label: "Badminton",
      },
      {
        id: "golf",
        icon: {
          library: MaterialIcons,
          name: "golf-course",
          color: colors.ORANGE,
        },
        label: "Golf",
      },
      {
        id: "cycling",
        icon: {
          library: MaterialIcons,
          name: "pedal-bike",
          color: colors.BROWN,
        },
        label: "Cycling",
      },
      {
        id: "gym_fitness",
        icon: {
          library: MaterialCommunityIcons,
          name: "arm-flex-outline",
          color: colors.RED,
        },
        label: "Gym & Fitness",
      },
      {
        id: "yoga",
        icon: {
          library: MaterialCommunityIcons,
          name: "meditation",
          color: colors.BLUE,
        },
        label: "Yoga",
      },
      {
        id: "swimming",
        icon: { library: MaterialIcons, name: "pool", color: colors.GREEN },
        label: "Swimming",
      },
      {
        id: "surfing",
        icon: {
          library: MaterialCommunityIcons,
          name: "surfing",
          color: colors.TEAL,
        },
        label: "Surfing",
      },
      {
        id: "skating",
        icon: {
          library: MaterialCommunityIcons,
          name: "rollerblade",
          color: colors.YELLOW,
        },
        label: "Skating",
      },
      {
        id: "climbing",
        icon: {
          library: Foundation,
          name: "mountains",
          color: colors.PURPLE,
        },
        label: "Climbing",
      },
    ],
  },

  lifestyle: {
    title: "Lifestyle",
    interests: [
      {
        id: "movies",
        icon: { library: MaterialIcons, name: "movie", color: colors.BROWN },
        label: "Movies",
      },
      {
        id: "music",
        icon: {
          library: Feather,
          name: "headphones",
          color: colors.ORANGE,
        },
        label: "Music",
      },
      {
        id: "gaming",
        icon: {
          library: Ionicons,
          name: "game-controller-outline",
          color: colors.GREEN,
        },
        label: "Gaming",
      },
      {
        id: "reading",
        icon: {
          library: Feather,
          name: "book-open",
          color: colors.YELLOW,
        },
        label: "Reading",
      },
      {
        id: "photography",
        icon: {
          library: Feather,
          name: "camera",
          color: colors.BLUE,
        },
        label: "Photography",
      },
      {
        id: "drawing",
        icon: {
          library: Ionicons,
          name: "color-palette-outline",
          color: colors.RED,
        },
        label: "Drawing",
      },
      {
        id: "cooking",
        icon: {
          library: MaterialCommunityIcons,
          name: "chef-hat",
          color: colors.TEAL,
        },
        label: "Cooking",
      },
      {
        id: "baking",
        icon: {
          library: MaterialCommunityIcons,
          name: "baguette",
          color: colors.BROWN,
        },
        label: "Baking",
      },
      {
        id: "cafes",
        icon: {
          library: MaterialIcons,
          name: "local-cafe",
          color: colors.PURPLE,
        },
        label: "Cafes",
      },
      {
        id: "comics",
        icon: {
          library: MaterialCommunityIcons,
          name: "bookshelf",
          color: colors.RED,
        },
        label: "Comics",
      },
      {
        id: "beauty",
        icon: {
          library: MaterialCommunityIcons,
          name: "face-woman-shimmer",
          color: colors.GREEN,
        },
        label: "Beauty",
      },
      {
        id: "fashion",
        icon: {
          library: MaterialCommunityIcons,
          name: "hanger",
          color: colors.ORANGE,
        },
        label: "Fashion",
      },
    ],
  },

  food: {
    title: "Food",
    interests: [
      {
        id: "trying_korean_food",
        icon: {
          library: FontAwesome6,
          name: "bowl-rice",
          color: colors.BROWN,
        },
        label: "Trying Korean Food",
      },
      {
        id: "cafe_dessert",
        icon: {
          library: MaterialIcons,
          name: "cake",
          color: colors.ORANGE,
        },
        label: "Cafe & Dessert",
      },
      {
        id: "drink_chill",
        icon: { library: Ionicons, name: "beer-outline", color: colors.BLUE },
        label: "Drink & Chill",
      },
    ],
  },

  korean_culture: {
    title: "Korean Culture & Community",
    interests: [
      {
        id: "kpop",
        icon: {
          library: Feather,
          name: "headphones",
          color: colors.GREEN,
        },
        label: "Kpop",
      },
      {
        id: "k_drama",
        icon: { library: Feather, name: "tv", color: colors.YELLOW },
        label: "K-Drama",
      },
      {
        id: "korean_food",
        icon: {
          library: MaterialCommunityIcons,
          name: "silverware-fork-knife",
          color: colors.BROWN,
        },
        label: "Korean Food",
      },
      {
        id: "traditional_culture",
        icon: {
          library: FontAwesome,
          name: "plane",
          color: colors.GRAY_600,
        },
        label: "Traditional Culture",
      },
      {
        id: "local_travel",
        icon: { library: MaterialIcons, name: "place", color: colors.RED },
        label: "Local Travel",
      },
      {
        id: "korean_language",
        icon: { library: FontAwesome, name: "language", color: colors.BLUE },
        label: "Korean Language",
      },
      {
        id: "language_exchange",
        icon: {
          library: MaterialIcons,
          name: "language",
          color: colors.PURPLE,
        },
        label: "Language Exchange",
      },
    ],
  },
};

// 유틸리티 함수들
export const getAllInterests = (): Interest[] => {
  return Object.values(INTEREST_CATEGORIES).flatMap(
    (category) => category.interests
  );
};

export const getInterestsByCategory = (
  categoryKey: keyof typeof INTEREST_CATEGORIES
): Interest[] => {
  return INTEREST_CATEGORIES[categoryKey].interests;
};

export const getCategoryNames = () => {
  return Object.keys(
    INTEREST_CATEGORIES
  ) as (keyof typeof INTEREST_CATEGORIES)[];
};
