import React, { useState } from 'react';
import { QrReader } from 'react-qr-reader';

function QRScanner() {
  const [result, setResult] = useState('No result');

  const handleScan = (data) => {
    if (data) {
      // 在这里调用手机相册选择图片的功能
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = 'image/*';
      input.onchange = (e) => {
        const file = e.target.files[0];
        // 将选择的图片上传到电脑本地，这里可以使用fetch或其他方法将图片上传到服务器
        console.log('Selected file:', file);
        setResult(`Selected file: ${file.name}`);
      };
      input.click();
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div>
      <QrReader
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: '100%' }}
      />
      <p>{result}</p>
    </div>
  );
}

export default QRScanner;