import AdForm from "@components/Form/AdForm"

export default function EditarAnuncio() {
  return (
    <AdForm
      method="PUT"
      previousData={{
        description:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      }}
    />
  )
}
