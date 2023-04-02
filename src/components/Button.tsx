interface Props {
  label: string;
  clickHandler?: () => void;
  className?: string;
}

export default function Button(props: Props) {
  return (
    <button
      onClick={props.clickHandler}
      className={`${props.className} px-6 rounded-lg py-3 bg-primary hover:bg-primary-900 transition text-white font-semibold w-full sm:w-auto`}
    >
      {props.label}
    </button>
  );
}
