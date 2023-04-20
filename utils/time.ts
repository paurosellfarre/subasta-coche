function isTimeBetween(
  start: Date | null | undefined,
  end: Date | null | undefined
) {
  const now = new Date()
  if (!start || !end || now < start || now > end) return false
  return true
}

export { isTimeBetween }
