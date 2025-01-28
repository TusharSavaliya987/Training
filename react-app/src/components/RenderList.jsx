// map method
export function ItemListMap() {
  const items = ["Apple", "Banana", "Orange", "Grapes"];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>         // "key" is necessary for efficient rendering
      ))}
    </ul>
  );
}



// filter method
export function ItemListFilter() {
    const items = [
      { name: 'Apple', isInStock: true },
      { name: 'Banana', isInStock: false },
      { name: 'Orange', isInStock: true },
      { name: 'Grapes', isInStock: true },
    ];
  
    // Filter items that are in stock
    const inStockItems = items.filter(item => item.isInStock);
  
    // we use map() to render only the items that are in stock.

    return (
      <ul>
        {inStockItems.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
      </ul>
    );
}



  
