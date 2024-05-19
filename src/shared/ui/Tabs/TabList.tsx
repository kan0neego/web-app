import React from "react";
import style from "./TabList.module.scss";

type Props = {
  onClick: (value: string) => void;
  children: React.ReactElement;
};

export default function TabList({ children: childrenProp, onClick }: Props) {
  const children = React.Children.map(childrenProp.props.children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as React.ReactElement<any>, { onClick });
    }
    return <></>;
  });

  return <ul className={style["tab-list"]}>{children}</ul>;
}
