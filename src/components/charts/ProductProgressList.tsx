import { ProductProgress } from "@/interfaces/product-progress";

interface ProductProgressProps {
  ProductProgress: ProductProgress[];
}

export default function ProductProgressList({
  ProductProgress,
}: ProductProgressProps) {
  return (
    <div className="">
      <div className="space-y-4">
        {ProductProgress != null && ProductProgress.length > 0
          ? ProductProgress.map((item, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">{item.name}</span>
                  <span className="text-sm text-gray-500">
                    <span className="text-black">{item.quantity} cái</span> (
                    {item.percentage}%)
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${item.percentage}%` }}
                  />
                </div>
              </div>
            ))
          : Array.from({ length: 7 }).map((_, index) => (
              <div key={index}>
                <div className="flex justify-between items-center mb-1">
                  <span className="font-medium">Chưa có mặt hàng</span>
                  <span className="text-sm text-gray-500">
                    <span className="text-black"></span> -
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-500 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `0%` }}
                  />
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
