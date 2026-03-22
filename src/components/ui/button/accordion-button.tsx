
type AccordionButtonProps = {
    buttonText: string
    onClick?: () => void
}

export const AccordionButton = ({buttonText, onClick}: AccordionButtonProps) => {
  return (
    <button onClick={onClick} className="bg-blue-400 text-white px-5 py-2 rounded-xl text-sm font-semibold">
      {buttonText}
    </button>
  );
};
