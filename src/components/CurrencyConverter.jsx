import { useState, useEffect } from 'react';

function CurrencyConverter({ total }) {
  const [targetCurrency, setTargetCurrency] = useState('EUR');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Don't fetch if total is 0
    if (total <= 0) {
      setConvertedAmount(0);
      return;
    }

    const fetchConversion = async () => {
      setIsLoading(true);
      setError(null);
      try {
        // We assume the base currency is USD
        const response = await fetch(
          `https://api.frankfurter.app/latest?amount=${total}&from=USD&to=${targetCurrency}`
        );
        
        if (!response.ok) throw new Error('Failed to fetch exchange rate');
        
        const data = await response.json();
        setConvertedAmount(data.rates[targetCurrency]);
      } catch (err) {
        setError("Could not load conversion.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchConversion();
  }, [total, targetCurrency]); // Re-run if total or currency changes

  return (
    <div style={{ 
      backgroundColor: '#f1f1f1', 
      padding: '15px', 
      borderRadius: '8px', 
      marginBottom: '20px',
      border: '1px solid #ddd' 
    }}>
      <label style={{ marginRight: '10px', fontWeight: 'bold' }}>Convert Total to:</label>
      <select 
        value={targetCurrency} 
        onChange={(e) => setTargetCurrency(e.target.value)}
        style={{ padding: '5px' }}
      >
        <option value="EUR">EUR (Euro)</option>
        <option value="GBP">GBP (British Pound)</option>
        <option value="INR">INR (Indian Rupee)</option>
        <option value="JPY">JPY (Japanese Yen)</option>
      </select>

      <div style={{ marginTop: '10px', fontSize: '1.1rem' }}>
        {isLoading ? (
          <span>Updating...</span>
        ) : error ? (
          <span style={{ color: 'red' }}>{error}</span>
        ) : (
          <strong>Converted: {convertedAmount.toFixed(2)} {targetCurrency}</strong>
        )}
      </div>
    </div>
  );
}

export default CurrencyConverter;