"use client";

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
  offset?: number; // Offset para header fijo
}

export default function SmoothLink({
  href,
  children,
  className,
  offset = 60, // Altura del header
}: Props) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

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
