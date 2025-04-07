import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-blue-900 text-white p-4 flex justify-between items-center">
      <div className="text-lg font-bold">FMRP</div>
      <nav className="flex space-x-4">
        <a href="#" className="hover:underline">
          Danh mục
        </a>
        <a href="#" className="hover:underline">
          Bán & Xuất hàng
        </a>
        <a href="#" className="hover:underline">
          Mua & Nhập hàng
        </a>
        <a href="#" className="hover:underline">
          Kho & Sản xuất
        </a>
        <a href="#" className="hover:underline">
          Kế toán
        </a>
        <a href="#" className="hover:underline">
          Báo cáo & Thống kê
        </a>
        <a href="#" className="hover:underline">
          Tiền tệ
        </a>
      </nav>
      <div className="flex items-center space-x-4">
        <input
          type="text"
          placeholder="Tìm kiếm"
          className="p-2 rounded text-black"
        />
        <div className="flex space-x-2">
          <button className="p-2">⚙️</button>
          <button className="p-2">🔔</button>
          <button className="p-2">👤</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
