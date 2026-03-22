type SectionProps = {
  title: string;
  children: React.ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <div className="mb-6">
      <div className="mb-2">
        <h2 className="text-lg md:text-xl font-semibold">{title}</h2>
        <div className="border-b-2 border-black mt-1" />
      </div>

      <div className="space-y-3">{children}</div>
    </div>
  );
}