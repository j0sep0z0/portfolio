export function formatDate(str: string) {
  return new Intl.DateTimeFormat("en-US", {
    month: "short",
    year: "numeric",
  }).format(new Date(str))
}

export function computeDuration(start: string, end?: string) {
  const s = new Date(start)
  const e = end ? new Date(end) : new Date()
  let totalMonths =
    (e.getFullYear() - s.getFullYear()) * 12 + (e.getMonth() - s.getMonth()) + 1
  const years = Math.floor(totalMonths / 12)
  const months = totalMonths % 12
  const parts: string[] = []
  if (years) parts.push(`${years} yr${years > 1 ? "s" : ""}`)
  if (months) parts.push(`${months} mo${months > 1 ? "s" : ""}`)
  return parts.join(" ") || "<1 mo"
}
