export const pizzas = [
  {
    id: 'P001', 
    nombre: 'Napolitana', 
    precio: 5950,
    ingredientes: ['mozzarella', 'tomates', 'jamón', 'orégano'], 
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c', // Cambiado de 'img' a 'imagen'
  },
  {
    id: 'P002',
    nombre: 'Española',
    precio: 6950,
    ingredientes: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
  },
  {
    id: 'P003',
    nombre: 'Pepperoni', 
    precio: 6950, 
    ingredientes: ['mozzarella', 'pepperoni', 'orégano'], 
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
  },
  {
    id: 'P004', 
    nombre: 'Barbacoa',
    precio: 7500,
    ingredientes: ['pollo', 'cebolla', 'salsa barbacoa', 'mozzarella'],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxfFkJPae7zH_am7RoaYgspQBNaCmeZV5GiQ&s',
  },
  {
    id: 'P005', 
    nombre: 'Hawaiana',
    precio: 6200,
    ingredientes: ['piña', 'jamón', 'mozzarella'],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiiJqlsPN_U9HEU4fHs8l87QRTuHrh2THSqA&s',
  },
  {
    id: 'P006', 
    nombre: 'Vegetariana',
    precio: 6500,
    ingredientes: ['pimientos', 'cebolla', 'champiñones', 'tomate', 'mozzarella'],
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0MCmMNOkIMEdJwAVSu8UkrqdaFWyPqBM4JQ&s',
  },
];

export const pizzaCart = [
  {
    id: 'P001',
    nombre: 'Napolitana', 
    precio: 5950,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_cl.jpg?alt=media&token=6a9a33da-5c00-49d4-9080-784dcc87ec2c', // Cambiado de 'img' a 'imagen'
    cantidad: 1, 
  },
  {
    id: 'P002',
    nombre: 'Española',
    precio: 7250,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fcheese-164872_640_com.jpg?alt=media&token=18b2b821-4d0d-43f2-a1c6-8c57bc388fab',
    cantidad: 1,
  },
  {
    id: 'P003',
    nombre: 'Salame',
    precio: 5990,
    imagen: 'https://firebasestorage.googleapis.com/v0/b/apis-varias-mias.appspot.com/o/pizzeria%2Fpizza-1239077_640_com.jpg?alt=media&token=e7cde87a-08d5-4040-ac54-90f6c31eb3e3',
    cantidad: 1,
  },
];