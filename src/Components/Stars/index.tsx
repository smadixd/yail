import classNames from "classnames";
import { FC, useState } from "react";

import { IconStarEmpty, IconStarFilled } from "Components/Icons";
import { InputError } from "Components/Inputs";

import { IStarsProps } from "./types";

const Stars: FC<IStarsProps> = ({
  name,
  stars = 0,
  onChange,
  value = 0,
  error
}) => {
  const [hovered, setHovered] = useState(0);
  const [selected, setSelected] = useState(value);

  return (
    <div>
      <div className='yl-flex yl-gap-2'>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            const Star =
              index < stars || index < selected || (onChange && index < hovered)
                ? IconStarFilled
                : IconStarEmpty;

            return (
              <Star
                key={index}
                onMouseEnter={() => setHovered(index + 1)}
                onMouseLeave={() => setHovered(0)}
                onClick={
                  onChange
                    ? () => {
                        if (selected === index + 1) {
                          onChange({ [name]: 0 });
                          return setSelected(0);
                        }

                        setSelected(index + 1);
                        onChange({ [name]: index + 1 });
                      }
                    : undefined
                }
                className={classNames("yl-relative yl-right-1 yl-w-4", {
                  "yl-fill-yellow-400 hover:yl-cursor-pointer":
                    index < stars ||
                    index < selected ||
                    (onChange && index < hovered)
                })}
              />
            );
          })}
      </div>
      {error && <InputError error={error} />}
    </div>
  );
};

export default Stars;
