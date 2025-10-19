const HoverableText = ({ text , color="text-black"}) => {
  return (
    <span className="py-0 my-0">
      {text.split('').map((char, index) => (
        <span
          key={index}
          className={`${color} inline-block transition-transform duration-200 ease-in-out hover:scale-y-[1.2] hover:uppercase cursor-pointer lowercase`}
        style={{ fontFamily: 'virtual, sans-serif' }}
        >
          {char === ' ' ? '\u00A0' : char}
        </span>
      ))}
    </span>
  );
};


export default HoverableText