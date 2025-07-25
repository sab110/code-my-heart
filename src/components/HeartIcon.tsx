interface HeartIconProps {
  className?: string;
  animated?: boolean;
}

const HeartIcon = ({ className = "", animated = false }: HeartIconProps) => {
  return (
    <svg
      className={`${className} ${animated ? 'heart-pulse' : ''}`}
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
        style={{
          filter: 'drop-shadow(0 0 10px currentColor)',
        }}
      />
    </svg>
  );
};

export default HeartIcon;