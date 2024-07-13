export default function Div({
  className,
  children,
}: {
  className: string;
  children: React.ReactNode;
}) {
  return <div className={`${className} bg-background`}>{children}</div>;
}
