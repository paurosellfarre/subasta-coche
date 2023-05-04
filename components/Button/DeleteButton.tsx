"use client"

export default function DeleteButton({
  href,
  className,
  text,
}: {
  href: string
  className: string
  text: string
}) {
  return (
    <button
      className={className}
      onClick={() => {
        if (confirm("¿Estás seguro de que quieres eliminar este anuncio?")) {
          fetch(`api/${href}`, {
            method: "DELETE",
          }).then(() => {
            location.reload()
          })
        }
      }}
    >
      {text}
    </button>
  )
}
