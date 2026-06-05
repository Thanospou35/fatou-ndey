export default function FormInput({
  label,
  id,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  required = false,
}) {
  return (
    <div className="w-full">
      {label && (
        <label htmlFor={id} className="mb-2 block text-sm font-bold sm:text-base">
          {label}
        </label>
      )}
      <input
        id={id}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full rounded-2xl bg-input-gray px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-ochre sm:text-base"
      />
    </div>
  )
}
