function handleClear() {
  localStorage.clear();
  return (location.href = "/");
}

export default handleClear;
