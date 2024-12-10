import { Meta, StoryObj } from "@storybook/react";
import Circle from "./Circle";

const meta: Meta<typeof Circle> = {
  component: Circle,
  title: "Cricle",
  argTypes: {
    variant: {
      control: { type: "select" },
    },
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof meta>;

/**
 * オレンジ
 */
export const BaseCircle: Story = {
  args: {
    variant: "orange",
  },
};
/**
 * グリーン
 */
export const GreenCircle: Story = {
  args: {
    variant: "green",
  },
};
/**
 * イエロー
 */
export const YellowCircle: Story = {
  args: {
    variant: "yellow",
  },
};
export const GroupedCircle: Story = {
  render: () => (
    <div style={{ padding: 10 }}>
      <Circle variant="orange" />
      <Circle variant="green" />
      <Circle variant="yellow" />
    </div>
  ),
};
