import './app.css';

function App() {
  const name = 'ha';
  return (
    <>
      <h1>Hello {name} :)</h1>
      {['ab', 'bc'].map((item) => (
        <h1>{item}</h1>
      ))}
    </>
  );
}

export default App;
