import React from "react";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OmYgeGUnxyubwNLD3ZzraiAkOlMyX0KtaMxsfg2PQ3cUKAtag5cdD8g0fJ8AFm7uARtonQnm1Ii2ciwpwF8XWou00ieN94tsk"
);

const StripeOption = ({ order }) => {
  const handleClick = async () => {
    try {
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        lineItems: order.detailsProduct.map((detail) => ({
          price: detail.priceId,
          quantity: 1,
        })),
        mode: "payment",
        successUrl: "http://localhost:3000/successfulPayment",
        cancelUrl: "http://localhost:3000/DeniedPayment",
      });

      if (error) {
        console.error(
          "Si è verificato un errore durante il checkout:",
          error.message
        );
      }
    } catch (error) {
      console.error("Si è verificato un errore:", error.message);
    }
  };
  return (
    <button
      className="ms-3 px-4 py-1 pb-1 rounded fw-bold text-black "
      onClick={handleClick}
    >
      Checkout
    </button>
  );
};

export default StripeOption;