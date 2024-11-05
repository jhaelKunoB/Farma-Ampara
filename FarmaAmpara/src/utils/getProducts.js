// /firebase/firestoreQueries.js
import { collection, getDocs } from "firebase/firestore";
import { db } from './fireBase';

// Función para obtener productos de la colección "productos"
export const obtenerProductos = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productosArray = [];
    querySnapshot.forEach((doc) => {
      productosArray.push({ id: doc.id, ...doc.data() });
    });
    return productosArray; // Devuelve el array de productos
  } catch (error) {
    console.error("Error al obtener productos: ", error);
    throw error;
  }
};