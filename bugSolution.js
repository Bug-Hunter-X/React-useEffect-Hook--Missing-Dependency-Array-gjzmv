```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: Empty dependency array ensures the effect runs only once on mount
    fetch('/api/data')
      .then(response => response.json())
      .then(data => setCount(data.count));
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```