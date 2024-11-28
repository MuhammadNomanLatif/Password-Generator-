import { useState } from "react";
import "./App.css";
import usePasswordGenrator from "./Hooks/usePasswordGenrator";
import StranghtChecker from "./Components/StranghtChecker";
import Button from "./Components/Button";
import CheckBox from "./Components/CheckBox";

function App() {
  const [length, setLength] = useState(4);
  const [copied, setCopied] = useState(false);
  const [checkBoxData, setCheckBoxData] = useState([
    { title: "include Uppercase Latters", state: "true" },
    { title: "include Lowercase Latters", state: "true" },
    { title: "include Numbers", state: "true" },
    { title: "include Symbols", state: "true" },
  ]);
  const handleCheckBoxChange = (index) => {
    const updatedCheckBoxData = [...checkBoxData];
    updatedCheckBoxData[index].state = !updatedCheckBoxData[index].state;
    setCheckBoxData(updatedCheckBoxData);
  };
  const handleCopy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  const { password, errorMessage, genratePassword } = usePasswordGenrator();
  return (
    <div className="container">
      {password && (
        <div className="header">
          <div className="title">{password}</div>
          <Button
            onClick={handleCopy}
            text={copied ? "copied" : "copy"}
            customClass="copybtn"
          />
        </div>
      )}
      <div className="charlength">
        <span>
          <label>Character</label>
          <label>{length}</label>
        </span>
        <input
          value={length}
          type="range"
          min="4"
          max="20"
          onChange={(e) => setLength(e.target.value)}
        />
      </div>
      <div className="checkBoxs">
        {checkBoxData.map((item, index) => {
          return (
            <CheckBox
              key={index}
              state={item.state}
              title={item.title}
              onChange={() => handleCheckBoxChange(index)}
            />
          );
        })}
      </div>
      {/* stranght */}
      <StranghtChecker password={password} />
      {errorMessage && <div className="errorMessage">{errorMessage}</div>}
      {/* genratorbtn */}

      <Button
        onClick={() => {
          genratePassword(checkBoxData, length);
        }}
        text="genrate password"
        customClass="genratorBtn"
      />
    </div>
  );
}

export default App;
