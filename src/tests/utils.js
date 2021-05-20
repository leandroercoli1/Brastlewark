export const mockGnomes = [
  {
    id: 0,
    name: "Tobus Quickwhistle",
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/10000/nahled/thinking-monkey-11282237747K8xB.jpg",
    age: 306,
    weight: 39.065952,
    height: 107.75835,
    hair_color: "Pink",
    professions: [
      "Metalworker",
      "Woodcarver",
      "Stonecarver",
      " Tinker",
      "Tailor",
      "Potter",
    ],
    friends: ["Cogwitz Chillwidget", "Tinadette Chillbuster"],
  },
  {
    id: 1,
    name: "Fizkin Voidbuster",
    thumbnail:
      "http://www.publicdomainpictures.net/pictures/120000/nahled/white-hen.jpg",
    age: 288,
    weight: 35.279167,
    height: 110.43628,
    hair_color: "Green",
    professions: [
      "Brewer",
      "Medic",
      "Prospector",
      "Gemcutter",
      "Mason",
      "Tailor",
    ],
    friends: [],
  },
];

export const longListOfGnomes = [...Array(1000)].map((el, idx) => ({
  ...mockGnomes[0],
  id: idx,
}));
