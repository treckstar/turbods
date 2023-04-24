import React from "react";
import { ComponentMeta, Story } from "@storybook/react";
import Button, {ButtonProps} from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    color: {
      control: {
        type: "select",
        options: ["black", "white"],
      },
    },
    size: {
      control: {
        type: "select",
        options: ["sm"],
      },
    },
    hasBorder: {
      control: {
        type: "boolean",
      },
    },
    disabled: {
      control: {
        type: "boolean",
      },
    },
    isLoading: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Base = Template.bind({});
Base.args = {
  children: "Yummm 🌭",
  hasBorder: true,
};

export const All = () => {
  return (
    <div className="flex gap-12">
      <Button color="black" hasBorder>
        Raisin Black 🍇
      </Button>
      <Button color="white">Coconut White 🥥</Button>
    </div>
  );
};

export const Sizes = () => {
  return (
    <div className="flex items-start gap-12">
      <Button color="black" hasBorder>
        Default Raisin
      </Button>
      <Button color="black" hasBorder size={"sm"}>
        Small Raisin
      </Button>
    </div>
  );
};

export const Loading = () => {
  return (
    <div className="flex gap-12">
      <Button color="black" hasBorder isLoading>
        Loading...
      </Button>
      <Button color="white" isLoading>
        Loading...
      </Button>
    </div>
  );
};

export const Disabled = () => {
  return (
    <div className="flex gap-12">
      <Button color="black" hasBorder disabled>
        Hey there 👋
      </Button>
      <Button color="white" disabled>
        Popcorn 🍿
      </Button>
    </div>
  );
};
