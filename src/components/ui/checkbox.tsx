"use client";

import { useId } from "react";

type Props = {
  label: string;
  checked: boolean;
  onChangeAction: (checked: boolean) => void;
};

export function Checkbox({ label, checked, onChangeAction }: Props) {
  const id = useId();

  return (
    <div className="text-foreground flex flex-row text-xl">
      <input
        id={id}
        className="peer sr-only"
        type="checkbox"
        checked={checked}
        onChange={(event) => onChangeAction(event.target.checked)}
      />
      <label
        htmlFor={id}
        className="peer-not-checked:before:bg-primary peer-not-checked:before:text-primary-foreground peer-checked:before:bg-secondary peer-checked:before:text-secondary-foreground peer-hover:before:bg-tertiary peer-hover:before:text-tertiary-foreground cursor-pointer before:content-['[N]'] peer-checked:before:content-['[Y]']"
      >
        &nbsp;{label}
      </label>
    </div>
  );
}
