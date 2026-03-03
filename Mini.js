// “API simulada de usuarios”
function validarToken(token) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (token === "TOKEN_VALIDO") {
        resolve(true);
      } else {
        reject(new Error("Token inválido"));
      }
    }, 1000);
  });
}

async function testToken() {
  try {
    const valido = await validarToken("TOKEN_INVALIDO");
    console.log("Token válido:", valido);
  } catch (error) {
    console.error(error.message);
  }
}

testToken();

const usuarios = [
  { id: 1, nombre: "Ana" },
  { id: 2, nombre: "Carlos" },
  { id: 3, nombre: "Lucía" }
];