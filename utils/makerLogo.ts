function makerLogo(maker: string) {
  //Transform maker to lowercase-logo.png
  const logoVarName = maker.toLowerCase() + "-logo.png"
  return logoVarName
}

export default makerLogo
