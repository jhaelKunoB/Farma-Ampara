import React, { useState, useEffect } from "react";
import Layout from "../components/layout/Layout";
import DetailSaleMain from "../components/main/DetailSaleMain";
import "./detail.css";




const DetailSale = () => {
  const [loading, setLoading] = useState(true); // Estado de carga


  
  useEffect(() => {
    // Simular una espera de 5 segundos
    const timer = setTimeout(() => {
      setLoading(false); // Dejar de cargar después de 5 segundos
    }, 5000);

    // Limpiar el temporizador cuando el componente se desmonte
    return () => clearTimeout(timer);
  }, []);

  return (
    <Layout>
      {loading ? (
        <div className="loading">Cargando...</div> // Muestra el loading mientras se espera
      ) : (
        <DetailSaleMain /> // Muestra el contenido después de 5 segundos
      )}
    </Layout>
  );
};

export default DetailSale;

