import { ProductType } from "@/lib/ProductType";

type ProductProps = {
    product: ProductType;
}
export default function Product({ product }: ProductProps) {
    return (
        <div className="flex flex-col shadow-lg h-96 bg-slate-950 p-5 text-gray-300">
            <div className="relative max-h-72 flex-1">IMG</div>
            <div className="flex justify-between front-bold my-3">{product.title}</div>
            <div className="rounded-md bg-teal-600 text-white px-3.5 py-2.5 text-sm text-center">Adicionar ao Carrinho</div>
        </div>
    )
}