export default function Chip({ text }: { text: string }) {
  return (
    <div className="m-1 font-medium py-1 px-2 bg-white rounded-full text-blue-700 bg-blue-100 border border-blue-300">
      <div className="leading-none">{text.toLocaleUpperCase()}</div>
    </div>
  )
}
