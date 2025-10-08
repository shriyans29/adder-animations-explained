interface TruthTableProps {
  headers: string[];
  rows: (string | number)[][];
}

export const TruthTable = ({ headers, rows }: TruthTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-primary/20 bg-card/50 backdrop-blur-sm">
      <table className="w-full">
        <thead>
          <tr className="border-b border-primary/20 bg-primary/10">
            {headers.map((header, i) => (
              <th key={i} className="px-4 py-3 text-center font-mono font-semibold text-primary">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => (
            <tr 
              key={i} 
              className="border-b border-border/50 hover:bg-primary/5 transition-colors"
            >
              {row.map((cell, j) => (
                <td 
                  key={j} 
                  className="px-4 py-3 text-center font-mono text-foreground"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
