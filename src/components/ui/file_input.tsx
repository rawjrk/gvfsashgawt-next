"use client";

type Props = {
  supportedFormats?: string[];
  onFilePickAction: (file: File) => void;
};

export function FileInput({ supportedFormats, onFilePickAction }: Props) {
  const accept = supportedFormats?.length
    ? supportedFormats.join(",")
    : undefined;

  return (
    <input
      className="file:bg-primary file:active:bg-secondary file:active:text-secondary-foreground file:hover:bg-tertiary file:hover:text-tertiary-foreground file:text-primary-foreground text-primary-foreground cursor-pointer text-xl lowercase file:mr-2 file:cursor-pointer file:px-2 file:text-xl file:lowercase"
      onChange={(event) => onFilePickAction(event.target.files![0])}
      accept={accept}
      type="file"
    />
  );
}
