export default function FormTextarea({
  label,
  id,
  value,
  onChange,
  rows = 6,
  required = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-bold sm:text-base">
          {label}
        </label>
      )}
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        rows={rows}
        required={required}
        className="w-full resize-y rounded-2xl bg-input-gray px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ochre sm:text-base"
      />
    </div>
  )
}
