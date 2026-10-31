import Valorant from './assets/anh.jpg';
import './App.css';
function App() {
  const userName = "NguyenManh";

  return (
    <>
      <h1>{userName}</h1>
      <img src={Valorant} alt="Valorantt" />
      <ul>
        <li>bắn súng</li>
        <li>giải trí</li>
        <li>cao độ</li>
      </ul>
      <button onClick={() => alert("Đoàng Đoàng")}></button>
    </>
  )
}

export default App
