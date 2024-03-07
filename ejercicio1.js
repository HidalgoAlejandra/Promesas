//https://jsonplaceholder.typicode.com/photos
function promesatiempo() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Informacion Enviada: ");
    }, 3000);
  });
}

const getDatos = async () => {
  const url = "https://jsonplaceholder.typicode.com/photos";
  try {
    const response = await fetch(url);
    //console.log("Response: ", response);
    if (response.status !== 404) {
      const datos = await response.json();
      for (let x of datos.slice(0, 20)) {
        console.log("Album: ", x.id, " Titulo: ", x.title);
      }
      //Promise(
      const resultado = await Promise.all([promesatiempo()]);
      console.log("Resultado Final: ", resultado);
    } else {
      throw new Error("404!!!");
    }
  } catch (err) {
    console.log(err);
  }
};

getDatos();
