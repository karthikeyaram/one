import React from 'react';
import { useSelector } from 'react-redux';

const Payment = () => {
  // Select the language from the Redux store
  const { language } = useSelector((state) => state.language);

  // Dynamic translations based on the language
  const heading = language === 'tamil' ? 'கட்டண முறைகள் - ஆன்லைன்' : 'Payment Mode - Online';

  return (
    <div style={{ padding: '20px 0' }}> {/* Add padding above and below the card */}
      <div
        style={{
          backgroundColor: '#d7f3d7',
          border: '1px solid #b5ddb5',
          borderRadius: '5px',
          padding: '15px',
          fontFamily: 'Arial, sans-serif',
          maxWidth: '500px',
          margin: 'auto',
        }}
      >
        <h3 style={{ color: '#336633', marginBottom: '10px' }}>{heading}</h3>
        <p style={{ margin: '0', fontWeight: 'bold', color: '#336633' }}>Tamil Isai Sangam</p>
        <p style={{ margin: '0', color: '#336633' }}>City Union Bank</p>
        <p style={{ margin: '0', color: '#336633' }}>Abiramapuram</p>
        <p style={{ margin: '0', color: '#336633' }}>ODAD512120020010460</p>
        <p style={{ margin: '0', color: '#336633' }}>IFC CIUB0000339</p>
        <p style={{ margin: '0', color: '#336633' }}>
          Number: 94449 25880 (G-pay, Paytm, Phonepe)
        </p>
      </div>
    </div>
  );
};

export default Payment;
