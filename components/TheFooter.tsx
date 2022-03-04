export default function TheFooter() {
  // return the footer component
  return (
    <footer className="fixed bottom-0 w-full bg-gray-800 dark:bg-gray-700 text-gray-200 dark:text-gray-100 p-2">
      <div className="flex justify-center">
        <p className="text-center text-sm">
          <strong> Contributors: </strong>

          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/RyanNorooz"
          >
            RyanNorooz
          </a>
          {' & '}
          <a
            target="_blank"
            rel="noreferrer noopener"
            href="https://github.com/maktoobgar"
          >
            Maktoobgar
          </a>
        </p>
      </div>
    </footer>
  )
}
