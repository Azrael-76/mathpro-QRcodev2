// import React from 'react';
// import QRCode from 'react-qr-code';

// function QRGenerator() {
//   return (
//     <div>
//       <QRCode value="https://www.example.com" />
//     </div>
//   );
// }

// export default QRGenerator;

import React, { useState } from 'react';
import QRCode from 'react-qr-code';

function QRGenerator() {
  const [showQR, setShowQR] = useState(false);

  const handleButtonClick = () => {
    setShowQR(true);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>显示二维码</button>
      {showQR && <QRCode value="https://www.example.com" />}
    </div>
  );
}

export default QRGenerator;