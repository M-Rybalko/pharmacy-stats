const trimData = (data: string) => {
  let trimmedData: string = data;
  if (trimmedData[0] === '"') {
    const valueRows: string[] = data.split('\n');
    const trimmedRows: string[][] = [];
    for (const row of valueRows) {
      const values: string[] = row.split(',');
      const trimmed: string[] = [];
      for (const value of values) {
        if (value[0] === '"' && value[value.length - 1] === '"') {
          trimmed.push(value.slice(1, -1));
        } else {
          trimmed.push(value);
        }
      }
      trimmed.join(',');
      trimmedRows.push(trimmed);
    }
    trimmedData = trimmedRows.join('\n');
  }
  return trimmedData;
};

export default trimData;
