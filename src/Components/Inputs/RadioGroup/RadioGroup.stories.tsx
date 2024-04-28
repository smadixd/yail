import { action } from "@storybook/addon-actions";
import { useState } from "react";

import RadioGroup from ".";
import { OptionValue } from "../Select/types";

export default {
  title: "Input/RadioGroup",
  component: RadioGroup,
  parameters: {
    layout: "centered"
  },
  argTypes: {
    onChange: { action: "changed" }
  }
};

export const Default = () => {
  const [value, setValue] = useState<OptionValue>(1);
  return (
    <RadioGroup
      value={value}
      onChange={value => {
        setValue(value);
        action("onChange")(value);
      }}
      options={[
        { value: 1, label: "Option 1" },
        { value: 2, label: "Option 2" },
        { value: 3, label: "Option 3" }
      ]}
    />
  );
};
