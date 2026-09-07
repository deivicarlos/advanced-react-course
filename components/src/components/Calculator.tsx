import { useState, type PropsWithChildren } from "react";

type ButtonProps = {
  classNames?: string;
  onClick: () => void;
} & PropsWithChildren;

const Button = ({ children, classNames = "", onClick }: ButtonProps) => {
  return (
    <button
      className={
        "p-4 text-black bg-[#bbf0e8] hover:opacity-80 cursor-pointer active:bg-[#8feddf] " +
        classNames
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

const Calculator = () => {
  const [previous, setPrevious] = useState<string>("");
  const [current, setCurrent] = useState<string>("");
  const [operation, setOperation] = useState<string>("");

  const handleInput = (input: string) => setCurrent((prev) => prev + input);

  const handleOperation = (op: string) => {
    setOperation(op);
    setPrevious(current);
    setCurrent("");
  };

  function clearItems() {
    setPrevious("");
    setCurrent("");
    setOperation("");
  }

  function onDelete() {
    setCurrent((prev) => prev.substring(0, prev.length - 1));
  }

  function getResult() {
    let result: number;

    if (operation === "+") {
      result = Number(previous) + Number(current);
    } else if (operation === "-") {
      result = Number(previous) - Number(current);
    } else if (operation === "%") {
      result = Number(previous) / Number(current);
    } else {
      result = Number(previous) * Number(current);
    }

    setPrevious(result.toString());
    setCurrent("");
    setOperation("");
  }

  return (
    <div className="w-52">
      <div className="bg-[#012f2f] flex flex-col py-2 items-end px-2 h-20">
        <div className="text-white font-bold text-sm min-h-10">{`${Number(previous).toLocaleString("en")} ${operation}`}</div>
        <div className="text-white font-bold text-2xl min-h16">
          {Number(current).toLocaleString("en")}
        </div>
      </div>
      <div className="grid grid-cols-4 gap-px bg-white">
        {/* Row */}

        <Button classNames="col-span-2" onClick={() => clearItems()}>
          AC
        </Button>
        <Button onClick={() => onDelete()}>DEL</Button>
        <Button onClick={() => handleOperation("%")}>%</Button>

        {/* Row */}
        <Button onClick={() => handleInput("1")}>1</Button>
        <Button onClick={() => handleInput("2")}>2</Button>
        <Button onClick={() => handleInput("3")}>3</Button>
        <Button onClick={() => handleOperation("*")}>*</Button>

        {/* Row */}
        <Button onClick={() => handleInput("4")}>4</Button>
        <Button onClick={() => handleInput("5")}>5</Button>
        <Button onClick={() => handleInput("6")}>6</Button>
        <Button onClick={() => handleOperation("+")}>+</Button>

        {/* Row */}
        <Button onClick={() => handleInput("7")}>7</Button>
        <Button onClick={() => handleInput("8")}>8</Button>
        <Button onClick={() => handleInput("9")}>9</Button>
        <Button onClick={() => handleOperation("-")}>-</Button>

        {/* Row */}
        <Button onClick={() => handleInput(".")}>.</Button>
        <Button onClick={() => handleInput("0")}>0</Button>
        <Button classNames="col-span-2" onClick={() => getResult()}>
          =
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
