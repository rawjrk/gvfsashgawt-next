import { Link } from "@/components/custom_link";
import { getNavLinks } from "@/constants/navigation";

export function MoshNavBlock() {
  return (
    <div className="text-foreground text-xl">
      <span>navigation</span>
      <ul>
        {getNavLinks("/mosh").map(({ href, title }) => (
          <li key={title}>
            *{" "}
            <Link key={title} className="lowercase" href={href}>
              {title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
