function InputPoids({ value, onChange }) {
  return (
    <input
      type="number"
      placeholder="Poids (kg)"
      value={value}
      onChange={onChange}
    />
  );
}
