function isTimeBetween(
  start: Date | null | string | undefined,
  end: Date | null | string | undefined
) {
  const now = new Date()
  start = start ? new Date(start) : null
  end = end ? new Date(end) : null

  if (!start || !end || now < start || now > end) return false
  return true
}

export { isTimeBetween }
