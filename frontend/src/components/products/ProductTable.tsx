import type { Product } from "../../types/product";


type Props = {

  products: Product[];

  onEdit:(product:Product)=>void;

  onDelete:(product:Product)=>void;

};



export default function ProductTable({

  products,

  onEdit,

  onDelete,

}:Props){


return (

<table className="w-full border">


<thead>

<tr className="border">


<th className="p-3">
Name
</th>


<th className="p-3">
SKU
</th>


<th className="p-3">
Price
</th>


<th className="p-3">
Stock
</th>


<th className="p-3">
Actions
</th>


</tr>

</thead>



<tbody>


{
products.map((product)=>(


<tr
key={product.id}
className="border"
>


<td className="p-3">
{product.name}
</td>


<td className="p-3">
{product.sku}
</td>


<td className="p-3">
₹ {product.price}
</td>


<td className="p-3">
{product.stock}
</td>



<td className="p-3 space-x-2">


<button

onClick={()=>onEdit(product)}

className="rounded bg-yellow-500 px-3 py-1 text-white"

>
Edit
</button>



<button

onClick={()=>onDelete(product)}

className="rounded bg-red-600 px-3 py-1 text-white"

>
Delete
</button>



</td>



</tr>


))

}


</tbody>


</table>

);


}