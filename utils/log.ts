export async function logFirstTime() {
  try {
    const isNew = localStorage.getItem('visited')
    if (!isNew) {
      await $fetch('/api/code', {
        method: 'POST',
        body: JSON.stringify({ message: '👨‍💼 Có người dùng mới truy cập', newUser: true }),
        headers: {
          'Content-Type': 'application/json',
        },
      })
      localStorage.setItem('visited', 'yes')
    }
  } catch (error) {
    console.error(error)
  }
}
