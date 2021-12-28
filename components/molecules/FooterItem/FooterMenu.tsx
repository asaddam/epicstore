import FooterSubmenu from "./FooterSubmenu";

interface FooterMenuProps {
    title: string;
    subtitle1: string;
    subtitle2: string;
    subtitle3?: string;
    subtitle4?: string;
    href?: string;
}

export default function FooterMenu(props: FooterMenuProps) {
    const { title, subtitle1, subtitle2, subtitle3, subtitle4, href } = props;
  return (
    <div className="col-md-4 col-6 mb-lg-0 mb-25">
      <p className="text-lg fw-semibold color-palette-1 mb-12">{title}</p>
      <ul className="list-unstyled">
          <FooterSubmenu href={href} subtitle={subtitle1} />
          <FooterSubmenu href={href} subtitle={subtitle2} />
          <FooterSubmenu href={href} subtitle={subtitle3} />
          <FooterSubmenu href={href} subtitle={subtitle4} />
      </ul>
    </div>
  );
}
