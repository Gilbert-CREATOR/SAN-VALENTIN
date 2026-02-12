let selectedPerson = "";

const secrets = {
    mami: "aAmor",
    papi: "Amor",
    gibelina: "Galia",
    gilandy: "Hierro",
    pamela: "Camila",
    gilary: "Diente",
    oscar: "Profesor"
  };

  const messages = {
    mami: "Gracias por tu amor, tu paciencia y por estar siempre. Este detalle es pequeño comparado con todo lo que das, pero viene del corazón ❤️",
  
    papi: "Gracias por el ejemplo, el apoyo y la fuerza. Todo lo que soy tiene algo de ti. Siempre agradecido 🙏",
  
    gibelina: "Más que una hermana, compañera de vida. Gracias por estar en las buenas y en las malas. La familia es más fuerte contigo 💪",
  
    gilandy: "Tenerte como hermano es una bendición. Siempre firme, siempre real. Aquí estamos, familia primero 🤝",
  
    gilary: "Hermana de sangre y de corazón. Gracias por cada risa, cada apoyo y cada momento. Esto es familia de verdad ❤️",
  
    oscar: "Gracias por ser parte de la familia y por el respeto y el apoyo de siempre. Esto también es para ti 💙",
  
    pamela: "Gracias por tu cariño y buena energía. La familia se siente mejor contigo. Este detalle es con aprecio 💕"
  };

document.getElementById("btnStep1").addEventListener("click", () => {
  const select = document.getElementById("personSelect");
  selectedPerson = select.value;

  if (!selectedPerson) return;

  document.getElementById("step1").classList.add("hidden");
  document.getElementById("step2").classList.remove("hidden");
});

document.getElementById("btnStep2").addEventListener("click", () => {
  const input = document.getElementById("secretInput").value;
  const errorMsg = document.getElementById("errorMsg");

  if (input === secrets[selectedPerson]) {
    document.getElementById("step2").classList.add("hidden");
    document.getElementById("step3").classList.remove("hidden");

    const nameFormatted =
      selectedPerson.charAt(0).toUpperCase() + selectedPerson.slice(1);

    document.getElementById("finalTitle").innerText =
      `Para ti, ${nameFormatted} 💘`;

    document.getElementById("finalMessage").innerText =
      messages[selectedPerson];
  } else {
    errorMsg.innerText = "Esa no es la palabra correcta 👀";
  }
});