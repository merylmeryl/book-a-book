const Button = ({ text }) => {
  return (
    <div>
      <a
        href="#"
        className="px-2 py-1 bg-yellow-600 text-white font-bold rounded hover:bg-gray-500"
      >
        {text}
      </a>
    </div>
  );
};

export default Button;
