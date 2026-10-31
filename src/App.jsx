
function App() {
  const userName = "Mạnh";
  const x = 1;
  const y = 3;
  return (
    <>
      <h1>{userName}</h1>
      <h1>{x * y}</h1>
      <button onClick={() => alert("jelloo")}></button>
    </>
  )
}

export default App
