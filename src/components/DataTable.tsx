// components/DataTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import ProductIcon from "./icons/product-icon";
import { DataProductTable } from "./../interfaces/data-product-table";
import NoDataTable from "./icons/no-data-table";

interface DataTableRow {
  DataProductTable: DataProductTable[]; // hoặc bất kỳ kiểu dữ liệu nào bạn đang dùng
}

const style = "fs-12 font-semibold light-gray-color-3";

export const DataTable = ({ DataProductTable }: DataTableRow) => {
  return (
    <Table>
      <TableHeader>
        <TableRow style={{ background: "#F3F3F4" }}>
          <TableHead className={`text-center ${style}`}>STT</TableHead>
          <TableHead className={style}>Nguồn vật liệu</TableHead>
          <TableHead className={`text-right ${style}`}>Đơn vị tính</TableHead>
          <TableHead className={`text-center ${style}`}>Số lượng</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {DataProductTable != null && DataProductTable.length > 0 ? (
          DataProductTable.map((row) => (
            <TableRow className="text-center" key={row.stt}>
              <TableCell>{row.stt}</TableCell>
              <TableCell>
                <div className="flex items-start space-x-2">
                  <ProductIcon />
                  <div className="flex flex-col items-start">
                    <span className="fs-14 font-semibold">{row.source}</span>
                    <span className="fs-10 light-gray-color-2">(none)</span>
                    <span className="fs-10 font-normal light-blue-color-2">
                      {row.prodCode}
                    </span>
                  </div>
                </div>
              </TableCell>
              <TableCell>
                <span className="ml-4 fs-14 font-semibold">{row.unit}</span>
              </TableCell>
              <TableCell>
                <span className="fs-14 font-semibold">{row.quantity}</span>
              </TableCell>
            </TableRow>
          ))
        ) : (
          <TableRow>
            <TableCell colSpan={4} className="text-center">
              <div className="flex flex-col items-center justify-center">
                <NoDataTable />
                <p>Chưa có dữ liệu</p>
              </div>
            </TableCell>
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
};
