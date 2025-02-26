export const apiGet = async (endpoint, setState, setErrors) => {
  const response = await fetch(endpoint);
  const result = await response.json();
  setState(result);
};

export const apiPost = async (endpoint, data) => {
  const request = {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-type": "application/json" },
  };

  const response = await fetch(endpoint, request);
  const result = await response.json();
  return response.ok
    ? { isSuccess: true, data: result }
    : { isSuccess: false, message: result.message };
};
