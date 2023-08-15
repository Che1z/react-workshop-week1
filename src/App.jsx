import { useState } from "react";
import "./App.css";

const data = [
  {
    id: 1,
    name: "珍珠奶茶",
    content: "香濃奶茶搭配QQ珍珠",
    price: 50,
    num: 20,
  },
  {
    id: 2,
    name: "冬瓜檸檬",
    content: "清新冬瓜配上新鮮檸檬",
    price: 45,
    num: 18,
  },
  {
    id: 3,
    name: "翡翠檸檬",
    content: "綠茶與檸檬的完美結合",
    price: 55,
    num: 34,
  },
  {
    id: 4,
    name: "四季春茶",
    content: "香醇四季春茶，回甘無比",
    price: 45,
    num: 10,
  },
  {
    id: 5,
    name: "阿薩姆奶茶",
    content: "阿薩姆紅茶搭配香醇鮮奶",
    price: 50,
    num: 25,
  },
  {
    id: 6,
    name: "檸檬冰茶",
    content: "檸檬與冰茶的清新組合",
    price: 45,
    num: 20,
  },
  {
    id: 7,
    name: "芒果綠茶",
    content: "芒果與綠茶的獨特風味",
    price: 55,
    num: 18,
  },
  {
    id: 8,
    name: "抹茶拿鐵",
    content: "抹茶與鮮奶的絕配",
    price: 60,
    num: 20,
  },
];

function App() {
  const [products, setProducts] = useState(data);
  // 更新庫存
  function upgradeStock(id, count) {
    const newStock = products.map((newItem) =>
      newItem.id === id ? { ...newItem, num: newItem.num + count } : newItem
    );
    // 方法需塞入完整內容(newStock)
    setProducts(newStock);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th scope="col">品項</th>
            <th scope="col">描述</th>
            <th scope="col">價格</th>
            <th scope="col">庫存</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.content}</td>
              <td>{item.price}</td>
              <td>
                <button type="button" onClick={() => upgradeStock(item.id, 1)}>
                  +
                </button>
                {item.num}
                <button type="button" onClick={() => upgradeStock(item.id, -1)}>
                  -
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
