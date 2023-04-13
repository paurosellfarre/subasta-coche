import DefaultImage from "@public/No-image-found.jpg"
import AudiLogo from "@public/audi-logo.png"
import BMWLogo from "@public/bmw-logo.png"
import ChevroletLogo from "@public/chevrolet-logo.png"
import FordLogo from "@public/ford-logo.png"
import HondaLogo from "@public/honda-logo.png"
import HyundaiLogo from "@public/hyundai-logo.png"
import KiaLogo from "@public/kia-logo.png"
import MercedesBenzLogo from "@public/mercedes-benz-logo.png"
import NissanLogo from "@public/nissan-logo.png"
import ToyotaLogo from "@public/toyota-logo.png"

function makerLogo(maker: string) {
  switch (maker) {
    case "Audi":
      return AudiLogo
    case "BMW":
      return BMWLogo
    case "Chevrolet":
      return ChevroletLogo
    case "Ford":
      return FordLogo
    case "Honda":
      return HondaLogo
    case "Hyundai":
      return HyundaiLogo
    case "Kia":
      return KiaLogo
    case "Mercedes-Benz":
      return MercedesBenzLogo
    case "Nissan":
      return NissanLogo
    case "Toyota":
      return ToyotaLogo
    default:
      return DefaultImage
  }
}

export default makerLogo
