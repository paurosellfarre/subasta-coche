import AdForm from "@components/Form/AdForm"

//TODO: Fetch automobile data from the API and pass it to the AdForm component

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
