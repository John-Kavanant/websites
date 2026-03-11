
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface ReimbursementItem {
  code: string;
  description: string;
  amount: string;
  frequency: string;
}

interface ReimbursementTableProps {
  title: string;
  items: ReimbursementItem[];
  className?: string;
}

const ReimbursementTable = ({ title, items, className }: ReimbursementTableProps) => {
  return (
    <div className={className}>
      <h3 className="heading-sm mb-4">{title}</h3>
      <div className="border rounded-md overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="bg-iza-blue-light text-iza-gray-dark">CPT Code</TableHead>
              <TableHead className="bg-iza-blue-light text-iza-gray-dark">Description</TableHead>
              <TableHead className="bg-iza-blue-light text-iza-gray-dark">Amount*</TableHead>
              <TableHead className="bg-iza-blue-light text-iza-gray-dark">Frequency</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {items.map((item, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{item.code}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell>{item.amount}</TableCell>
                <TableCell>{item.frequency}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <p className="text-xs text-iza-gray mt-2">*Average Medicare reimbursement. Actual amounts may vary by location and Medicare Administrative Contractor.</p>
    </div>
  );
};

export default ReimbursementTable;
