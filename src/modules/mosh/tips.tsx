import { Button } from "@/components/ui/button";

type Props = {
  onPress: () => void;
};

export function MoshTipsBlock({ onPress }: Props) {
  return (
    <div className="text-foreground text-xl">
      tips/{" "}
      <Button
        className="text-primary active:bg-secondary active:text-secondary-foreground bg-transparent"
        onClick={onPress}
      >
        help?
      </Button>
    </div>
  );
}
