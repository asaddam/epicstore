interface ReachedItemProps {
  text: string;
  subText: string;
}

export default function ReachedItem(props: ReachedItemProps) {
  const { text, subText } = props;

  return (
    <div className="me-lg-35 ms-lg-35">
      <p className="text-4xl text-lg-start text-center color-palette-1 fw-bold m-0">
        {text}
      </p>
      <p className="text-lg text-lg-start text-center color-palette-2 m-0">
        {subText}
      </p>
    </div>
  );
}
