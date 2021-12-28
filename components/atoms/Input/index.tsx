interface InputProps {
    label: string;
    
}

export default function Input(props: InputProps) {
    const { label, ...nativeProps} = props;
  return (
    <>
      <label
        for="email"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
    {label}
      </label>
      <input
        type="email"
        className="form-control rounded-pill text-lg"
        id="email"
        name="email"
        aria-describedby="email"
        placeholder="Enter your email address"
        {...nativeProps}
      />
    </>
  );
}
