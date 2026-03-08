export default function DataTable({ data, cols, search }) {
  const filtered = data.filter(row =>
    !search ||
    Object.values(row).some(v =>
      String(v).toLowerCase().includes(search.toLowerCase())
    )
  );

  const cellValue = (col, row) => {
    const val = row[col.k];
    if (col.badge) {
      const isActive = val === "Active" || val === true;
      return (
        <span className={`badge ${isActive ? "badge-active" : "badge-inactive"}`}>
          {val === true ? "Available" : val === false ? "Checked Out" : val}
        </span>
      );
    }
    return val;
  };

  return (
    <div className="table-wrap">
      <div className="table-scroll">
        <table>
          <thead>
            <tr>
              {cols.map(c => <th key={c.k}>{c.l}</th>)}
            </tr>
          </thead>
          <tbody>
            {filtered.map((row, i) => (
              <tr key={i}>
                {cols.map(c => (
                  <td key={c.k}>{cellValue(c, row)}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
