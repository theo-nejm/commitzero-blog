export default function sliceTitle(title: string, limit: number) {
  return title.length > limit
  ? title.slice(0, (limit - 3)) + '...'
  : title
}
