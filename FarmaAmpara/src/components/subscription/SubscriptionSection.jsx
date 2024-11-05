import React from 'react'

const SubscriptionSection = () => {
  return (
    <div className="subs-section">
        <div className="container">
            <div className="row gy-4 align-items-center">
                <div className="col-lg-6">
                    <div className="subs-section__txt">
                        <h2>Suscríbete!</h2>
                        <h3>Recibe las Ofertas de Medicamentos</h3>
                    </div>
                </div>

                <div className="col-lg-6">
                    <div className="subs-section__form">
                        <form action="#">
                            <input type="email" name="subs-mail" id="subs-mail-input" placeholder="Ingresa tu Email"/>
                            <button className="subs-form-btn">Suscríbete</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SubscriptionSection