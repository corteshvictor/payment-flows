type PSEPaymentProps = {
  paymentUrl: string;
};

export const PSEPayment = ({ paymentUrl }: PSEPaymentProps) => {
  return (
    <div>
      <iframe
        src={paymentUrl}
        title="PSE Payment"
        width="100%"
        height="600px"
        style={{ border: "none" }}
        sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
        allow="payment"
      />
    </div>
  );
};
