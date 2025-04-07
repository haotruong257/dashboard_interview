// components/DataTable.tsx
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  { stt: 1, source: "Chỉ Cotton", unit: "Cuộn", quantity: 8 },
  { stt: 2, source: "Vải lụa", unit: "Mét", quantity: 8 },
  { stt: 3, source: "Vải lót", unit: "Mét", quantity: 8 },
  { stt: 4, source: "Chỉ thêu thô", unit: "Mét", quantity: 8 },
  { stt: 5, source: "Vải ni", unit: "Mét", quantity: 8 },
];

export const DataTable: React.FC = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>STT</TableHead>
          <TableHead>Nguồn vật liệu</TableHead>
          <TableHead>Đơn vị tính</TableHead>
          <TableHead>Số lượng</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <TableRow key={row.stt}>
            <TableCell>{row.stt}</TableCell>
            <TableCell>{row.source}</TableCell>
            <TableCell>{row.unit}</TableCell>
            <TableCell>{row.quantity}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
