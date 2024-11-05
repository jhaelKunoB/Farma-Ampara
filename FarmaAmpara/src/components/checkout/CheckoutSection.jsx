import React, { useContext } from 'react'
import { useNavigate } from "react-router-dom";
import { Form } from 'react-bootstrap'
import { FarzaaContext } from '../../context/FarzaaContext'
import { Link } from 'react-router-dom'
//import { loadStripe } from '@stripe/stripe-js';
const CheckoutSection = () => {
    const {subTotal, shipping, coupon, finalPrice} = useContext(FarzaaContext)


    // const makePayment = async() => {
    //     const stripe = await loadStripe("pk_test_51Px0c1P6Txxz77QcYFUI90gsMLlWIB9zUi06ZLybImxvNXddSAmdnBYx4BOzYcFCWaLGcmXTJWFEyY6ZuP2FqNKF00afiJPyWO");
    //     const body = {
    //         products: cart
    //     }

    //     const headres = {
    //         "Content-Type":"application/json"
    //     }

    //     const response = await fetch(`$(apiURL)/create-checkout-session`,{
    //         method:"POST",
    //         headers:headers,
    //         body:JSON.stringify(body)
    //     })

    //     const session = await response.json();
    //     const result = stripe.redirectToCheckout({
    //         sessionId:session.id
    //     });
    //     if(result.error){
    //         console.log(result.error)
    //     }


    // }

    const navigate = useNavigate(); // Initialize the useNavigate hook
     // Function to close the modal and navigate
  const closeAndNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="container">
        <div className="fz-checkout">
            <form action="#" className="checkout-form">
                <div className="fz-billing-details">
                    <div className="row gy-0 gx-3 gx-md-4">
                        <h3 className="fz-checkout-title">Detalles de facturación</h3>
                        <div className="col-6 col-xxs-12">
                            <input type="text" name="first-name" id="checkout-first-name" placeholder="First Name"/>
                        </div>
                        <div className="col-6 col-xxs-12">
                            <input type="text" name="last-name" id="checkout-last-name" placeholder="Last Name"/>
                        </div>
                        <div className="col-12">
                            <input type="text" name="company-name" id="checkout-company-name" placeholder="Company Name"/>
                        </div>

                        <div className="col-12">
                            <Form.Select className='country-select' name="country" id="checkout-country">
                                <option value="Nepal">Bolivia</option>
                            </Form.Select>
                        </div>

                        <div className="col-12">
                            <input type="text" name="house-street-number" id="checkout-house-street-number" placeholder="Numero de Casa y Nombre de Calle"/>
                        </div>

                        <div className="col-12">
                            <input type="text" name="apartment-name" id="checkout-apartment-name" placeholder="Apartamento, Suite, etc. (opcional)"/>
                        </div>

                        <div className="col-12">
                            <input type="text" name="city-name" id="checkout-city-name" placeholder="Pueblo / Ciudad"/>
                        </div>

                        {/* <div className="col-6 col-xxs-12">
                            <Form.Select className='state-select' name="states" id="checkout-states">
                                <option value="Alabama">Alabama</option>
                                <option value="Alaska">Alaska</option>
                                <option value="California">California</option>
                                <option value="Delaware">Delaware</option>
                                <option value="Florida">Florida</option>
                                <option value="Georgia">Georgia</option>
                                <option value="Hawaii">Hawaii</option>
                                <option value="Idaho">Idaho</option>
                            </Form.Select>
                        </div> */}

                        <div className="col-6 col-xxs-12">
                            <input type="text" name="zip-code" id="checkout-zip-code" placeholder="Código postal"/>
                        </div>

                        <div className="col-6 col-xxs-12">
                            <input type="number" name="phone-number" id="checkout-phone-number" placeholder="Numero de telefono"/>
                        </div>

                        <div className="col-6 col-xxs-12">
                            <input type="email" name="email-address" id="checkout-email-address" placeholder="Email"/>
                        </div>

                        {/* <div className="col">
                            <input type="checkbox" name="create-account" id="checkout-create-account"/>
                            <label className='create-acc-lebel' htmlFor="checkout-create-account">Create an Account</label>
                        </div> */}

                        <div className="col-12 additional-info">
                            <label htmlFor="checkout-additional-info" className="fz-checkout-title">Información adicional</label>
                            <textarea name="additional-info" id="checkout-additional-info" placeholder="Notas sobre su pedido, p.e. notas especiales para la entrega"></textarea>
                        </div>
                    </div>
                </div>

                <div className="fz-checkout-sidebar">
                    <div className="billing-summery">
                        <h4 className="fz-checkout-title">Resumen de facturación</h4>
                        <div className="cart-checkout-area">
                            <ul className="checkout-summary">
                                <li>
                                    <span className="checkout-summary__key">Subtotal</span>
                                    <span className="checkout-summary__value">{subTotal}<span>Bs</span></span>
                                </li>

                                <li>
                                    <span className="checkout-summary__key">Envío</span>
                                    <span className="checkout-summary__value">{shipping}<span>Bs</span></span>
                                </li>

                                <li>
                                    <span className="checkout-summary__key">Cupón de descuento</span>
                                    <span className="checkout-summary__value">-{coupon}<span>Bs</span></span>
                                </li>

                                <li className="cart-checkout-total">
                                    <span className="checkout-summary__key">Total</span>
                                    <span className="checkout-summary__value">{finalPrice}<span></span>Bs</span>
                                </li>
                            </ul>

                            <Link to="/cart" className="fz-1-banner-btn cart-checkout-btn">Editar orden</Link>
                        </div>
                    </div>

                    <div className="payment-info">
                        <h4 className="fz-checkout-title">Información de pago</h4>

                        <div className="d-flex payment-area align-items-center">
                            <input type="text" name="card-number" id="checkout-card-number" placeholder="Número de tarjeta (xxxx xxxx xxxx xxxx)" required />
                            <i className="fa-light fa-credit-card"></i>
                        </div>

                        <div className="d-flex payment-area align-items-center mt-2">
                            <input type="text" name="card-holder-name" id="checkout-card-holder-name" placeholder="Nombre en la tarjeta" required />
                            <i className="fa-light fa-user"></i>
                        </div>

                        <div className="d-flex payment-area align-items-center mt-2">
                            <input type="text" name="cvv" id="checkout-cvv" placeholder="CVV (Código de seguridad)" required />
                        </div>
                        <div className="d-flex payment-area align-items-center mt-2">
                            <input type="text" name="expiry-date" id="checkout-expiry-date" placeholder="MM/AA (Vencimiento)" required />
                        </div>

                        {/* <div >
                            <div className="payment-area col-6 col-md-4 mx-3">
                                <input type="text" name="expiry-date" id="checkout-expiry-date" placeholder="MM/AA (Vencimiento)" required />
                            </div>
                            <div className="payment-area col-6 col-md-4">
                                <input type="text" name="cvv" id="checkout-cvv" placeholder="CVV (Código de seguridad)" required />
                            </div>
                        </div> */}

                        <p className="checkout-payment-descr">
                            Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y para otros fines descritos en nuestra 
                            <a href="#">política de privacidad</a>.
                        </p>

                        <button type="submit" className="fz-1-banner-btn cart-checkout-btn checkout-form-btn"  onClick={() => closeAndNavigate("/detailSale")}>Realizar pedido</button>
                  
                        {/* <button
                            className="fz-1-banner-btn update-cart-btn"
                            onClick={() => closeAndNavigate("/detailSale")}
                        >
                        Pagar
                        </button> */}
                  
                    </div>

                </div>
            </form>
        </div>
    </div>
  )
}

export default CheckoutSection


