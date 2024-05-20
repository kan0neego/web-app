import ArrowSolid from "../Icon/ArrowSolid";
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import React, { forwardRef, useRef, useState } from "react";
import style from "./Select.module.scss";

const SelectInput = forwardRef<HTMLInputElement, SelectInputProps>(
  function SelectInput(props: SelectInputProps, ref) {
    const { selectedOptions, options, onClick, disabled = false, view } = props;
    let defaultValue = "";

    React.Children.forEach(options, (child) => {
      if (React.isValidElement(child)) {
        if (child.props.value === selectedOptions)
          defaultValue = child.props.children;
      }
    });

    return (
      <div style={{ position: "relative" }}>
        <div className={style["select__arrow"]}>
          <button onClick={onClick}>
            <ArrowSolid
              style={{ translate: view ? "rotate(0.5turn)" : "rotate(0)" }}
            />
          </button>
        </div>
        <Input
          ref={ref}
          disabled={disabled}
          value={defaultValue}
          onClick={onClick}
        />
      </div>
    );
  },
);

export default function Select(props: SelectProps) {
  const { defaultValue = "", children, onChange, disabled, isLoading } = props;
  const [view, setView] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const selectedOption = useRef(defaultValue);

  return (
    <div className={style["select"]}>
      <SelectInput
        ref={inputRef}
        view={view}
        selectedOptions={selectedOption.current}
        onClick={() => setView((prevState) => !prevState)}
        options={children}
        disabled={disabled}
        isLoading={isLoading}
      />
      <Dropdown
        view={view}
        anchorRef={inputRef}
        selectOption={selectedOption}
        onChange={onChange}
        setView={setView}
      >
        {children}
      </Dropdown>
    </div>
  );
}

type SelectProps = {
  children: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  defaultValue?: string | undefined;
  onChange: (event: any) => void;
};

type SelectInputProps = {
  view: boolean;
  disabled?: boolean;
  isLoading?: boolean;
  options: React.ReactNode;
  selectedOptions: string;
  onClick: () => void;
};
