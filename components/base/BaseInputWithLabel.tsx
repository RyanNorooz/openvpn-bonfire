interface Props extends Record<string, any> {
  id?: string
  labelText?: string
  classname?: string
}

export default function BaseInputWithLabel(allProps: Props) {
  const { className, labelText, ...props } = allProps

  return (
    <>
      <label htmlFor={props.id} className="font-bold text-left w-fit">
        {labelText}
      </label>

      <input
        {...props}
        className={
          'block w-full mb-3 bg-gray-100 border-transparent rounded-md dark:bg-neutral-700 focus:border-gray-500 focus:bg-white dark:focus:bg-neutral-900 focus:ring-0' +
          (` ${className}` || '')
        }
      />
    </>
  )
}
