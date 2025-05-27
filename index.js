import fetch from "node-fetch";


const argumentos = process.argv.slice(2);


const [comando1,comando6,comando3,comando4,comando5,comando7] = argumentos;

switch(comando1){
    case "GET":
        fetch("https://fakestoreapi.com/products")
 .then(res => {
  if (!res.ok) { 
     throw new Error("Error en la respuesta de la API");
   }
  return res.json(); 
 })
 .then(data => {
   console.log("Productos",  data); 
 })
 .catch(error => {
   console.error("Error al obtener productos", error);
 });
  break

    case "POST":
        
        const product = { title: comando3, price: comando4, description:comando5};
        fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
          })

       .then(response => response.json())
       .then(data => console.log(data));


  break

   /* case "PRODUCTO_ID":
        
       fetch(`https://fakestoreapi.com/products/${comando6}`) //npm run start PRODUCTO_ID "ACA IRIA EL ID QUE SE QUIERE BUSCAR"
      .then(response =>response.json())
      .then(data => console.log("Id Producto seleccionado",  data))




break*/

/*  case "DELETE":
    fetch(`https://fakestoreapi.com/products/${comando7}`, {
     method: 'DELETE'})

  .then(response => response.json())
  .then(data => console.log("el producto ha sido eliminado correctamente"));

break*/


}










