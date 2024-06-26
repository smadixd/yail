import { Meta } from "@storybook/react";
import { NavLink } from "react-router-dom";
import { withRouter } from "storybook-addon-remix-react-router";

import Card from ".";
import { ICard } from "./types";

const CardStories: Meta<ICard> = {
  title: "Components/Card",
  decorators: [withRouter],
  component: Card,
  parameters: {
    layout: "centered"
  }
};

export const Default = () => {
  return (
    <div className='yl-mt-8'>
      <Card
        NavLink={NavLink}
        data={{
          title: "Lorem ipsum dolor sit amet",
          titleUrl: "/",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: [
            { name: "Tag 1", url: "/" },
            { name: "Tag 2", url: "/" }
          ]
        }}
      />
    </div>
  );
};

export const WithExternalLink = () => {
  return (
    <div className='yl-mt-8'>
      <Card
        NavLink={NavLink}
        data={{
          title: "Lorem ipsum dolor sit amet",
          titleUrl: "https://programmer.network",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, nesciunt.",
          author: "John Doe",
          date: "2021-10-10T00:00:00.000Z",
          tags: [
            { name: "Tag 1", url: "/" },
            { name: "Tag 2", url: "/" }
          ]
        }}
      />
    </div>
  );
};

export default CardStories;
