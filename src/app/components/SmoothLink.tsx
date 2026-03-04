"use client";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number;
  onClick?: () => void;
}

export default function SmoothLink({
  href,
  children,
  className,
  offset = 60,
  onClick,
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick?.();

    const target = document.querySelector(href);

    if (target) {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
