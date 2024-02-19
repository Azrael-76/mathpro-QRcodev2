import React from 'react';
import QRGenerator from './QRGenerator';
import QRScanner from './QRScanner';

function App() {
  return (
    <html>
      <body>
        <div className="App">
          <h1>欢迎使用QR功能</h1>
          <QRGenerator /> {/* 渲染 QR 生成器组件 */}
          <QRScanner />   {/* 渲染 QR 扫描器组件 */}
        </div>
      </body>
    </html>
  );
}

export default App;