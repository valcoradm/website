function FormButton({ saving, text, type }) {
  return (
    <button type={type} className="default-btn" disabled={saving}>
      {saving ? <i className="loader"></i> : ""} {text}
    </button>
  );
}

export default FormButton;
