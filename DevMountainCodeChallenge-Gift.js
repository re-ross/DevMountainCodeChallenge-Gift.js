const wishlist = [
  { name: "Mini Puzzle", size: "small", clatters: "yes", weight: "light" },
  { name: "Toy Car", size: "medium", clatters: "a bit", weight: "medium" },
  { name: "Card Game", size: "small", clatters: "no", weight: "light" },
];

const presents = [
  { size: "medium", clatters: "a bit", weight: "medium" },
  { size: "small", clatters: "yes", weight: "light" },
];

const guessGifts = (wishlist, presents) => {
  return wishlist
    .filter(function (x) {
      return presents.some(function (y) {
        return (
          x.size == y.size && x.clatters == y.clatters && x.weight == y.weight
        );
      });
    })
    .map(function (x) {
      return console.log(x.name);
    });
};

guessGifts(wishlist, presents);
