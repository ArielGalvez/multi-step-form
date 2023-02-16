import React, { FC, useEffect, useState } from "react";
import "./styles.css";

type CheckBoxProps = {
  active: boolean;
  onChange: (active: boolean) => void
};

const CheckBox: FC<CheckBoxProps> = (props) => {
  const { active, onChange } = props;
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prevState) => {
      onChange && onChange(!prevState);
      return !prevState;
    });
  };

  useEffect(() => {
    setChecked(Boolean(active));
  }, [active]);

  return (
    <label className="checkbox">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="mark"></span>
    </label>
  );
};

export default CheckBox;
