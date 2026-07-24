type Props = {
  form: any;
  setForm: any;
};

export default function InvoiceForm({
  form,
  setForm,
}: Props) {
  return (
    <div className="space-y-4">

      <input
        className="w-full rounded border p-3"
        placeholder="Customer ID"
        value={form.customerId}
        onChange={(e)=>
          setForm({
            ...form,
            customerId:e.target.value,
          })
        }
      />

      <input
        type="number"
        className="w-full rounded border p-3"
        placeholder="Amount"
        value={form.total}
        onChange={(e)=>
          setForm({
            ...form,
            total:Number(e.target.value),
          })
        }
      />

    </div>
  );
}