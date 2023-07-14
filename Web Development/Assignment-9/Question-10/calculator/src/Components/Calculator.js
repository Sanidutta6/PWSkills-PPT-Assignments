import Display from "./Display";
import Button from "./Button";
import React, { useState } from "react";
import { evaluate } from "mathjs";

const Calculator = () => {
  const [displayValue, setDisplayValue] = useState(0.0);

  const handleClick = (type, value) => {
    if(displayValue === "Invalid Expression") {
      return;
    }

    if (type === "number") {
      if (Number(displayValue) === 0) {
        // If current display value is 0, replace it with the new number
        setDisplayValue(value);
      } else {
        // Append the new number to the current display value
        setDisplayValue(displayValue + value);
      }
    } else if (type === "operator") {
      // Perform the calculation based on the operator
      switch (value) {
        case "+":
        case "-":
        case "*":
        case "/":
          setDisplayValue(displayValue + value);
          break;
        case "=":
          try {
            setDisplayValue(evaluate(displayValue));
          } catch (error) {
            setDisplayValue("Invalid Expression");
            setTimeout(() => {
              setDisplayValue("0");
            }, 3000);
          }
          break;
        default:
          break;
      }
    } else if (type === "clear") {
      // Clear the display value and any stored values or operators
      setDisplayValue("0");
    }
  };

  return (
    <div className="bg-[#141A20] px-20 py-16 rounded-xl">
      <div className="mb-6 flex gap-2">
        <Display value={displayValue} />
        <Button type="clear" value="Clear" handleClick={handleClick} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Button value="+" type="operator" handleClick={handleClick} />
        <Button
          value="="
          type="operator"
          handleClick={handleClick}
          extraStyle="col-span-2"
        />
        <Button value="*" type="operator" handleClick={handleClick} />
        <Button value="-" type="operator" handleClick={handleClick} />
        <Button value="/" type="operator" handleClick={handleClick} />
        <Button value="1" type="number" handleClick={handleClick} />
        <Button value="2" type="number" handleClick={handleClick} />
        <Button value="3" type="number" handleClick={handleClick} />
        <Button value="4" type="number" handleClick={handleClick} />
        <Button value="5" type="number" handleClick={handleClick} />
        <Button value="6" type="number" handleClick={handleClick} />
        <Button value="7" type="number" handleClick={handleClick} />
        <Button value="8" type="number" handleClick={handleClick} />
        <Button value="9" type="number" handleClick={handleClick} />
        <Button
          value="0"
          type="number"
          handleClick={handleClick}
          extraStyle="col-span-3"
        />
      </div>
    </div>
  );
};

export default Calculator;
