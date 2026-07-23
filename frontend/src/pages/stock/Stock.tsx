import { useEffect, useState } from "react";

import MainLayout from "../../layouts/MainLayout";

import StockTable from "../../components/stock/StockTable";
import StockInModal from "../../components/stock/StockInModal";
import StockOutModal from "../../components/stock/StockOutModal";

import { getHistory } from "../../services/stockService";

import type { StockHistory } from "../../types/stock";

export default function Stock() {

  const [history, setHistory] = useState<StockHistory[]>([]);

  const [stockInOpen, setStockInOpen] = useState(false);
  const [stockOutOpen, setStockOutOpen] = useState(false);

  // Replace this with the selected product later
  const productId = "cmrx82art0004tzucotd25yoc";

  async function loadHistory() {
    try {
      const data = await getHistory(productId);
      setHistory(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    loadHistory();
  }, []);

  return (
    <MainLayout>

      <h1 className="mb-6 text-3xl font-bold">
        Stock Management
      </h1>

      <div className="mb-5 flex gap-3">

        <button
          onClick={() => setStockInOpen(true)}
          className="rounded bg-green-600 px-4 py-2 text-white"
        >
          Stock In
        </button>

        <button
          onClick={() => setStockOutOpen(true)}
          className="rounded bg-red-600 px-4 py-2 text-white"
        >
          Stock Out
        </button>

      </div>

      <StockInModal
        open={stockInOpen}
        onClose={() => setStockInOpen(false)}
        onSuccess={loadHistory}
      />

      <StockOutModal
        open={stockOutOpen}
        onClose={() => setStockOutOpen(false)}
        onSuccess={loadHistory}
      />

      <StockTable history={history} />

    </MainLayout>
  );
}