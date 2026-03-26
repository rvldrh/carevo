export function renderDescription(text?: string | null) {
  if (!text) return null;
  const lines = text.split('\n').filter(line => line.trim().length > 0);
  
  const isList = lines.some(line => line.trim().startsWith('-') || line.trim().startsWith('•') || line.trim().startsWith('*'));
  
  if (!isList && lines.length === 1) {
    return <p className="text-[13px] text-gray-700 mt-2 leading-relaxed">{text}</p>;
  }

  if (!isList) {
    return (
      <div className="mt-2 space-y-1">
        {lines.map((line) => (
           <p key={line} className="text-[13px] text-gray-700 leading-relaxed">{line}</p>
        ))}
      </div>
    );
  }

  return (
    <ul className="list-disc list-outside ml-4 text-[13px] text-gray-700 mt-2 space-y-1">
      {lines.map((line) => (
        <li key={line} className="leading-relaxed pl-1">{line.replace(/^[-*•]\s*/, '').trim()}</li>
      ))}
    </ul>
  );
}
