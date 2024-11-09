import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div className="flex justify-center gap-x-4">
          <div>{!data ? "Loading ..." : data.message}</div>
          <div>Hello from tailwind !</div>
        </div>
      </header>
    </div>
  );
}

export default App;
