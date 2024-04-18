const form = document.querySelector(".count-form");
const output = document.querySelector(".count-output");

const handleSubmit = (event) => {
  event.preventDefault();

  console.dir(event.target.elements);

  const { litrCount, oilType } = event.target.elements;

  console.log(litrCount.value, oilType.value);
  let outputCost = 0;

  switch (Number(oilType.value)) {
    case 1:
      outputCost = 4 * Number(litrCount.value);
      break;
    case 2:
      outputCost = 3.5 * Number(litrCount.value);
      break;

    default:
      break;
  }

  const outputText = `koszt paliwa wynosi ${outputCost} zł`;

  output.innerHTML = outputText;
};

form.addEventListener("submit", handleSubmit);
