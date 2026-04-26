function InputTaille({ value, onChange }) {
  return (
    <input
      type="number"
      placeholder="Taille (cm)"
      value={value}
      onChange={onChange}
    />
  );
}
