function SummaryPanel({ expenses }) {
  // 1. Calculate Total Amount
  const total = expenses.reduce((sum, item) => sum + item.amount, 0);

  // 2. Calculate Breakdown by Category
  // This creates an object like { Food: 50, Travel: 20 }
  const categoryTotals = expenses.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + item.amount;
    return acc;
  }, {});

  return (
    <div style={{ 
      backgroundColor: '#2c3e50', 
      color: 'white', 
      padding: '20px', 
      borderRadius: '8px', 
      marginBottom: '20px' 
    }}>
      <h2 style={{ margin: 0 }}>Total: ${total.toFixed(2)}</h2>
      
      <div style={{ marginTop: '15px', borderTop: '1px solid #555', paddingTop: '10px' }}>
        <h4 style={{ margin: '0 0 10px 0' }}>Breakdown by Category:</h4>
        <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem' }}>
          {Object.entries(categoryTotals).map(([category, amount]) => (
            <li key={category} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span>{category}:</span>
              <span>${amount.toFixed(2)}</span>
            </li>
          ))}
          {expenses.length === 0 && <li>No data yet</li>}
        </ul>
      </div>
    </div>
  );
}

export default SummaryPanel;