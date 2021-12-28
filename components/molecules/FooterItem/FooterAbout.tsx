interface AboutProps {
    title1: string;
    title2?: string;
}

export default function FooterAbout(props: AboutProps) {
    const { title1, title2 } = props;
  return (
    <p className="mt-30 text-lg color-palette-1 mb-30">
      {title1}
      <br /> 
      {title2}
    </p>
  );
}
