import React, {useContext} from 'react'
import BreadcrumbSection from '../breadcrumb/BreadcrumbSection'
import CheckoutSection from '../checkout/CheckoutSection'
import { FarzaaContext } from "../../context/FarzaaContext";

import styled from 'styled-components';

const ReceiptContainer = styled.div`
  width: 1000px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  background-color: #fff;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  margin: 0;
  font-size: 24px;
  color: #333;
`;

const Subtitle = styled.p`
  margin: 0;
  font-size: 14px;
  color: #777;
`;

const Section = styled.div`
  margin-bottom: 20px;
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  margin-bottom: 10px;
  color: #444;
`;

const Info = styled.p`
  margin: 5px 0;
  font-size: 16px;
  color: #333;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
`;

const TableHeader = styled.th`
  border-bottom: 1px solid #ccc;
  text-align: left;
  padding: 10px;
  background-color: #f7f7f7;
`;

const TableCell = styled.td`
  padding: 10px;
  border-bottom: 1px solid #eee;
`;

const Footer = styled.div`
  text-align: right;
  margin-top: 20px;
  font-size: 18px;
  font-weight: bold;
`;



const DetailSaleMain = () => {

  const { cartItems} = useContext(FarzaaContext);
  console.log(cartItems)

   // Datos de ejemplo para el recibo
   const farmacia = {
    nombre: 'Farmacia Amparan',
    direccion: 'Av. Principal 123, Ciudad XYZ',
    telefono: '(123) 456-7890',
  };

  const cliente = {
    nombre: 'Jhael Kuno Bustos',
    direccion: 'Calle Secundaria 456, Ciudad XYZ',
    telefono: '(098) 765-4321',
  };

  const productos = [
    { id: 1, nombre: 'Paracetamol', cantidad: 2, precio: 5.0 },
    { id: 2, nombre: 'Ibuprofeno', cantidad: 1, precio: 8.0 },
    { id: 3, nombre: 'Jarabe para la tos', cantidad: 1, precio: 12.0 },
  ];

  const total = cartItems.reduce((acc, item) => acc + item.quantity * item.price, 0);

  return (
    <ReceiptContainer>
      <Header>
        <Title>{farmacia.nombre}</Title>
        <Subtitle>{farmacia.direccion} | Tel: {farmacia.telefono}</Subtitle>
      </Header>

      <Section>
        <SectionTitle>Detalles del Cliente</SectionTitle>
        <Info><strong>Nombre:</strong> {cliente.nombre}</Info>
        <Info><strong>Dirección:</strong> {cliente.direccion}</Info>
        <Info><strong>Teléfono:</strong> {cliente.telefono}</Info>
      </Section>

      <Section>
        <SectionTitle>Productos</SectionTitle>
        <Table>
          <thead>
            <tr>
              <TableHeader>Producto</TableHeader>
              <TableHeader>Cantidad</TableHeader>
              <TableHeader>Precio</TableHeader>
              <TableHeader>Total</TableHeader>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((producto) => (
              <tr key={producto.id}>
                <TableCell>{producto.name}</TableCell>
                <TableCell>{producto.quantity}</TableCell>
                <TableCell>{producto.price.toFixed(2)}Bs</TableCell>
                <TableCell>{(producto.quantity * producto.price).toFixed(2)}Bs</TableCell>
              </tr>
            ))}
          </tbody>
        </Table>
      </Section>

      <Footer>
        Total: {total.toFixed(2)}Bs
      </Footer>
    </ReceiptContainer>
  );
}

export default DetailSaleMain