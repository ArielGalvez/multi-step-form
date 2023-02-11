import React, { FC, useEffect, useState } from "react";
import "./styles.css";

type SwitchButtonProps = {
  active?: boolean;
  onChange?: (active: boolean) => void;
};

const SwitchButton: FC<SwitchButtonProps> = (props) => {
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
    <label className="switch_button">
      <input type="checkbox" checked={checked} onChange={handleChange} />
      <span className="slider"></span>
    </label>
  );
};

export default SwitchButton;
