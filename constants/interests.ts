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
import { ComponentType } from "react";
import { colors } from "./index";

export type InterestIconName =
  // Travel & Exploration
  | "compass"
  | "account-group-outline"
  | "school"
  | "festival"
  // Sports
  | "hiking"
  | "tent"
  | "shoe-sneaker"
  | "football"
  | "baseball-bat-ball"
  | "basketball-hoop-outline"
  | "sports-tennis"
  | "badminton"
  | "golf-course"
  | "pedal-bike"
  | "arm-flex-outline"
  | "meditation"
  | "pool"
  | "surfing"
  | "rollerblade"
  | "mountains"
  // Lifestyle
  | "movie"
  | "headphones"
  | "game-controller-outline"
  | "book-open"
  | "camera"
  | "color-palette-outline"
  | "chef-hat"
  | "baguette"
  | "local-cafe"
  | "bookshelf"
  | "face-woman-shimmer"
  | "hanger"
  // Food
  | "bowl-rice"
  | "cake"
  | "beer-outline"
  // Korean Culture & Community
  | "tv"
  | "silverware-fork-knife"
  | "plane"
  | "place"
  | "language";

export interface InterestProps {
  id: string;
  icon: {
    library: ComponentType<any>;
    name: InterestIconName;
    color: string;
  };
  label: string;
}

export interface InterestCategory {
  title: string;
  interests: InterestProps[];
}

type InterestCategoryKey =
  | "travel"
  | "sports"
  | "lifestyle"
  | "food"
  | "korean_culture";

export const INTEREST_CATEGORIES: Record<
  InterestCategoryKey,
  InterestCategory
> = {
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
        icon: {
          library: Ionicons,
          name: "beer-outline",
          color: colors.BLUE,
        },
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
export const getAllInterests = (): InterestProps[] => {
  return Object.values(INTEREST_CATEGORIES).flatMap(
    (category) => category.interests
  );
};

export const getInterestsByCategory = (
  categoryKey: InterestCategoryKey
): InterestProps[] => {
  return INTEREST_CATEGORIES[categoryKey].interests;
};

export const getCategoryNames = (): InterestCategoryKey[] => {
  return Object.keys(INTEREST_CATEGORIES) as InterestCategoryKey[];
};
