const input = document.querySelector("#inputSimuladorFgts");
const button = document.querySelector("#buttonSimuladorFgts");
console.log(button);
console.log(button.href);

function getMoney(str) {
  return parseInt(str.replace(/[\D]+/g, ""));
}
function formatReal(int) {
  var tmp = int + "";
  tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
  if (tmp.length > 6) tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

  return tmp;
}

input.addEventListener("input", (e) => {
  const passedValue = getMoney(e.target.value);
  if (passedValue >= 1) {
    const formattedValue = formatReal(Number(passedValue));
    input.value = formattedValue;
    const buttonHREF = `https://api.whatsapp.com/send/?phone=65996973605&text=Ol%C3%A1%2C+gostaria+de+simular+a+antecipa%C3%A7%C3%A3o+do+meu+FGTS.+Saldo+FGTS%3A+R%24+${formattedValue}&type=phone_number&app_absent=0`;
    button.href = buttonHREF;
  } else {
    const formattedValue = formatReal(0);
    input.value = formattedValue;
  }
});
