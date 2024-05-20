import React, { useRef, type MutableRefObject, useCallback } from "react";
import style from "./Dropdown.module.scss";

export default function Dropdown(props: Props) {
  const childrenRef = useRef<ChildrenRef>({});
  const {
    view,
    children: childrenProp,
    anchorRef,
    selectOption,
    onChange,
    setView,
  } = props;

  const children = useCallback(
    (children: React.ReactNode) => {
      const handleClick = (value: any) => {
        selectOption.current = value;
        onChange(value);
        setView(false);
      };

      return React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, {
            ref: (ref: React.MutableRefObject<HTMLLIElement>) =>
              (childrenRef.current[child.props.value] = ref),
            onClick: () => handleClick(child.props.value),
          });
        }
      });
    },
    [onChange, selectOption, setView],
  );

  if (!view) return null;
  if (!anchorRef.current) return null;

  const { height, width } = anchorRef.current.getBoundingClientRect();

  // className={twMerge(
  //   "bg-white absolute z-10 mt-1 hidden w-fit divide-y divide-gray-100 rounded-lg bg-white-50 shadow-lg dark:bg-black-500",
  //   "block",
  // )}

  return (
    <div
      style={{ top: height, width }}
      className={style["dropdown-list-wrapper"]}
    >
      <ul
        onMouseLeave={() => setView(false)}
        className={style["dropdown-list-wrapper__list"]}
      >
        {children(childrenProp)}
      </ul>
    </div>
  );
}

type Props = {
  view: boolean;
  selectOption: React.MutableRefObject<string>;
  children: React.ReactNode;
  anchorRef: React.RefObject<any>;
  onChange: (event: any) => void;
  setView: React.Dispatch<React.SetStateAction<boolean>>;
};

type ChildrenRef = { [key: string]: MutableRefObject<HTMLLIElement> };
