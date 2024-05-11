import { ServicesCardLink } from "@/types";

export const HOME_PAGE = [
  {
    id: 1,
    title: "Discussion",
    description: "Discussion about the latest tech and coding problems",
    img: "/assets/home-page/question-discuss.png",
  },
  {
    id: 2,
    title: "Community",
    description: "Create communities among similar minds",
    img: "/assets/home-page/community.png",
  },
  {
    id: 3,
    title: "AI powered",
    description: "Give AI generated answers",
    img: "/assets/home-page/ai-answer.png",
  },
  {
    id: 4,
    title: "Badging",
    description: "Give answers, post questions and get badges",
    img: "/assets/home-page/badge-system.png",
  },
];

export const cardsData: ServicesCardLink[] = [
  {
    id: 1,
    imgURL: "/assets/icons/home.svg",
    route: "/question-dashboard",
    label: "Ask Questions",
  },
  {
    id: 2,
    imgURL: "/assets/icons/users.svg",
    route: "/community",
    label: "Build community",
  },
  {
    id: 3,
    imgURL: "/assets/icons/suitcase.svg",
    route: "/jobs",
    label: "Find Jobs",
  },
  {
    id: 4,
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Treding Topics",
  },
  {
    id: 5,
    imgURL: "/assets/icons/tag.svg",
    route: "/tags",
    label: "Get AI answer",
  },
];
