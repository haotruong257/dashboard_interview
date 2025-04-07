import { useEffect, useState } from 'react'

export function useDarkMode(): { enabled: boolean; toggle: () => void } {
  const [enabled, setEnabled] = useState<boolean>(false)

  useEffect(() => {
    const isDark = localStorage.getItem('theme') === 'dark'
    setEnabled(isDark)
    document.documentElement.classList.toggle('dark', isDark)
  }, [])

  const toggle = () => {
    const newTheme = !enabled
    setEnabled(newTheme)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
    document.documentElement.classList.toggle('dark', newTheme)
  }

  return { enabled, toggle }
}
