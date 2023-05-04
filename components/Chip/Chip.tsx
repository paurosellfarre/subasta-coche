export default function Chip({ text }: { text: string }) {
  return (
    <div
      className={`m-1 font-medium py-1 px-2 bg-white rounded-full border
      ${
        text === "sale"
          ? "bg-blue-100 text-blue-700 border-blue-300"
          : "text-green-700 bg-green-100 border-green-300"
      } 
      `}
    >
      <div className="leading-none">
        {text === "sale" ? "VENTA" : "SUBASTA"}
      </div>
    </div>
  )
}
