import WORDLES from "./wordles.json";

const PREVIOUS_WORDLES = 10;

const getWordleIndex = function () {
  return (
    Math.round(
      (new Date().setHours(0, 0, 0, 0) -
        new Date(2021, 5, 19, 0, 0, 0, 0).setHours(0, 0, 0, 0)) /
        86400000
    ) % WORDLES.length
  );
};

const index = getWordleIndex();

const wotd = WORDLES[index];

for (let i = 0; i < wotd.length; i++) {
  document.querySelector(`#wordle_${i + 1}`).innerText = wotd[i];
}

for (
  let i = 1, prevIndex = index - 1;
  i <= PREVIOUS_WORDLES;
  i++, prevIndex--
) {
  if (prevIndex < 0) {
    prevIndex += WORDLES.length;
  }
  const date = new Date().setHours(0, 0, 0, 0);
  const li = document.createElement("li");
  li.innerText = `${WORDLES[prevIndex]}`;
  document.querySelector("#previous").appendChild(li);
}
