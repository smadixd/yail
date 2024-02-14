import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {}
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {
  args: {
    children: "Button"
  }
};

export const FilledDisabled: Story = {
  args: {
    children: "Button",
    disabled: true
  }
};

export const FilledSpining: Story = {
  args: {
    children: "Button",
    isLoading: true
  }
};

export const Outlined: Story = {
  args: {
    children: "Button",
    outlined: true
  }
};

export const OutlinedDisabled: Story = {
  args: {
    children: "Button",
    outlined: true,
    disabled: true
  }
};

export const OutlinedSpinning: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true
  }
};

export const Red: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true,
    className: "button--red"
  }
};

export const Gray: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true,
    className: "button--gray"
  }
};

export const Green: Story = {
  args: {
    children: "Button",
    outlined: true,
    isLoading: true,
    className: "button--green"
  }
};
