interface SubmenuProps {
  subtitle?: string;
  href?: string;
}

export default function FooterSubmenu(props: SubmenuProps) {
  const { subtitle, href } = props;
  return (
    <li className="mb-6">
      <a href={href} className="text-lg color-palette-1 text-decoration-none">
        {subtitle}
      </a>
    </li>
  );
}
