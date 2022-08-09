const list = [1, 2, 3, 1250, 5, 6500, 700000, 8, 9, 70, 900];
let major = 0;
let second = 0;

for (let i = 0; i < list.length; i++) {
  if (list[i] > major) {
    major = list[i];
  }
  for (let i = 0; i < list.length; i++) {
    if (list[i] < major && list[i] > second) {
      second = list[i];
    }
  }
}

console.log(`El segundo mayor es ${second}`);