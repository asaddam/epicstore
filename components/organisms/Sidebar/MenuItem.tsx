import cx from "classnames";
import Image from "next/image";
import Link from "next/link";

interface MenuItemProps {
  title: string;
  icon: "overview" | "card" | "logout" | "messages" | "reward" | "settings" | "transactions";
  href: string;
  active? : boolean;
}

export default function MenuItem(props: Partial<MenuItemProps>) {
  const { title, icon, href, active} = props;
  const classItem = cx({
        item: true,
        "mb-30": true,
        active: active
  });
  return (
    <div className={classItem}>
      <div className="me-3">
        <Image
          src={`/icon/ic-menu-${icon}.svg`}
          width={25}
          height={25}
          alt="icon"
        />
      </div>
      <p className="item-title m-0">
        <Link href={href}> 
        <a className="text-lg text-decoration-none">
          {title}
        </a>
        
        </Link>
      </p>
    </div>
  );
}
