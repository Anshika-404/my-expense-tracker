function ExpenseList({ expenses, onDeleteExpense }) {
  if (expenses.length === 0) {
    return <p style={{ color: '#666', textAlign: 'center' }}>No expenses logged yet. Add one above!</p>;
  }

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Recent Expenses</h3>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {expenses.map((item) => (
          <li 
            key={item.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between', 
              alignItems: 'center',
              padding: '10px', 
              borderBottom: '1px solid #eee',
              backgroundColor: '#f9f9f9',
              marginBottom: '5px',
              borderRadius: '4px'
            }}
          >
            <div>
              <strong>{item.name}</strong> 
              <span style={{ fontSize: '0.8rem', color: '#888', marginLeft: '10px' }}>
                ({item.category})
              </span>
            </div>
            
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <span style={{ fontWeight: 'bold' }}>${item.amount.toFixed(2)}</span>
              <button 
                onClick={() => onDeleteExpense(item.id)}
                style={{ 
                  backgroundColor: '#ff4d4d', 
                  color: 'white', 
                  border: 'none', 
                  padding: '5px 10px', 
                  borderRadius: '3px', 
                  cursor: 'pointer' 
                }}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;