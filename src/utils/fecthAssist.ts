
export const fetchAssist = async (numeroDocumentoCliente: string): Promise<any> => {
  const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0bXoiOiIiLCJhdWQiOiJSRVNUL1NFUlZJQ09TLUFQSVxcQ0MiLCJuYmYiOjE2NTgzNzI0MDAsInZpZXdJZCI6Ii9jY2FwaSIsImlzcyI6InNlcnZpY2VzLm1vYnVzcy5jb20uYnIiLCJ0ZW5hbnRJZCI6Ik9YUkFVQ1RPVUhPVSIsImV4cCI6MTkyNDgzMDAwMCwidXNlck5hbWUiOiJ3ZWJzZXJ2aWNlQGh1bWEuZW5nLmJyIiwiaWF0IjoxNjU4NDI3MDQ5LCJ1c2VySWQiOiJURUNMT0dJQ0FfNDMwMTEifQ.mCLf4qPWtdAUROH16uVbQ7Y-4KgEznJYRvBdQx4Up0M";

  const response = await fetch(`https://mdgp.dev.id360.net/api/assitencia`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      numeroDocumentoCliente: numeroDocumentoCliente
    }),
  });

  const data = await response.json();
  return { data, status: response.status };
};
  