const HoverableTextParagraph = ({ text, color = "text-black", className = "" }) => {
  return (
    <p className={`${className} py-0 my-0`}>
      {text.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="whitespace-nowrap inline-block mr-1">
          {word.split('').map((char, charIndex) => (
            <span
              key={`${wordIndex}-${charIndex}`}
              className={`${color} inline-block transition-transform duration-200 ease-in-out hover:scale-y-[1.2] hover:uppercase cursor-pointer lowercase`}
              style={{ fontFamily: 'virtual, sans-serif' }}
            >
              {char}
            </span>
          ))}
          {/* Add a non-breaking space after each word except the last one */}
          {wordIndex < text.split(' ').length - 1 ? '\u00A0' : ''}
        </span>
      ))}
    </p>
  );
};

export default HoverableTextParagraph;