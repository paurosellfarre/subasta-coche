import Countdown from "@components/Clock/Countdown"
import BidForm from "@components/Form/BidForm"

export default function AuctionRightBar({
  automobileId,
  start,
  end,
}: {
  automobileId: number
  start?: Date | null | undefined
  end?: Date | null | undefined
}) {
  return (
    <>
      <h2 className="text-xl font-bold text-gray-900 text-center">
        ⏰ Termina en
      </h2>
      <Countdown
        start={start}
        end={end}
      />

      <BidForm
        automobileId={automobileId}
        start={start}
        end={end}
      />
    </>
  )
}
