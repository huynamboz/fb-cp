export function isFirstTime() {
  const isNew = localStorage.getItem('visited')
  if (!isNew) {
    localStorage.setItem('visited', 'yes')
    return true
  }
  return false
}
