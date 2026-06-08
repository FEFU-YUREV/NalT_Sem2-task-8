export type tTasks = {
    question: string;
    answer: string;
}[]

export type tQuizzes = {
    id: number,
    type: "M" | "S" | "SC" | "MC", // M - Matching, S - Sorting, SC - Single Choice, MC - Multiple Choice
    title: string,
    tasks?: tTasks, // for Matching, Sorting, SC and MC
    answer?: string | string[], // for Sorting
}[];

export const quiz: tQuizzes = [
  {
    id: 1,
    type: "M",
    title: "Сопоставьте ноутбук и его цену.",
    tasks: [
      {
        question: "MacBook Air M4",
        answer: "$1199"
      },
      {
        question: "Asus ROG Zephyrus G14",
        answer: "$2099"
      },
      {
        question: "Alienware Area-51m R2",
        answer: "$4999"
      },
      {
        question: "Huawei MateBook X Pro",
        answer: "$2199"
      },
    ]
  },
  {
    id: 2,
    type: "M",
    title: "Сопоставьте ноутбук и его основное назначение (тег).",
    tasks: [
      {
        question: "MacBook Pro M4",
        answer: "Работа"
      },
      {
        question: "Lenovo ThinkPad X1 Carbon",
        answer: "Бизнес"
      },
      {
        question: "Dell XPS 13",
        answer: "Компактный"
      },
      {
        question: "HP Spectre x360 14",
        answer: "2-в-1"
      },
      {
        question: "Surface Laptop Studio 2",
        answer: "Креатив"
      },
    ]
  },
  {
    id: 3,
    type: "S",
    title: "Расположите ноутбуки в порядке возрастания их цены (сверху - самый дешевый, снизу - самый дорогой).",
    answer: [
        "MacBook Air M4", 
        "MacBook Pro M4", 
        "Asus ROG Zephyrus G14", 
        "Samsung Galaxy Book4 Ultra"
    ],
    tasks: [
        { question: "MacBook Air M4 ($1199)", answer: "MacBook Air M4" },
        { question: "MacBook Pro M4 ($1599)", answer: "MacBook Pro M4" },
        { question: "Asus ROG Zephyrus G14 ($2099)", answer: "Asus ROG Zephyrus G14" },
        { question: "Samsung Galaxy Book4 Ultra ($2799)", answer: "Samsung Galaxy Book4 Ultra" },
    ]
  },
  {
    id: 4,
    type: "S",
    title: "Расположите ноутбуки по их оценке (от высшей к низшей).",
    answer: [
        "Alienware Area-51m R2",
        "Asus ROG Zephyrus G14",
        "MSI Stealth 16 AI Studio",
        "Huawei MateBook X Pro"
    ],
    tasks: [
        { question: "Alienware Area-51m R2", answer: "Alienware Area-51m R2" },
        { question: "Asus ROG Zephyrus G14", answer: "Asus ROG Zephyrus G14" },
        { question: "MSI Stealth 16 AI Studio", answer: "MSI Stealth 16 AI Studio" },
        { question: "Huawei MateBook X Pro", answer: "Huawei MateBook X Pro" },
    ]
  },
  {
    id: 5,
    type: "SC",
    title: "Какой из представленных ноутбуков имеет OLED-экран?",
    tasks: [
        { question: "MacBook Air M4", answer: "0" },
        { question: "Samsung Galaxy Book4 Ultra", answer: "1" },
        { question: "Lenovo ThinkPad X1 Carbon", answer: "0" },
        { question: "Dell XPS 13", answer: "0" }
    ]
  },
  {
    id: 6,
    type: "MC",
    title: "Выберите все игровые ноутбуки из списка.",
    tasks: [
        { question: "Asus ROG Zephyrus G14", answer: "1" },
        { question: "MacBook Air M4", answer: "0" },
        { question: "Alienware Area-51m R2", answer: "1" },
        { question: "Huawei MateBook X Pro", answer: "0" },
        { question: "MSI Stealth 16 AI Studio", answer: "1" }
    ]
  }
]
