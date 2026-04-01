export function formatDate(input: string): string {
  if (/^\d{8}$/.test(input)) {
    const day = input.slice(0, 2);
    const month = input.slice(2, 4);
    const year = input.slice(4, 8);

    return `${year}-${month}-${day}`;
  }

  return input; 
}