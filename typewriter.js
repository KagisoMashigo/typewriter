
const animation = function(str) {
let timer = 0
  for (const char of str) {
    setTimeout(() => {process.stdout.write(char)}, timer); // <= 1s delay to make it noticeable. Can dial it down later.
    timer += 50;
  }
  setTimeout(() => {process.stdout.write("\n")}, timer);
};

animation("hello there from lighthouse labs, c'est moi");

