document.addEventListener('keyup', (event) => {
  const value = event.target.value
  if (value) {
    const emojis = value.match(/:.*?:/g)
    if (emojis) {
      emojis.forEach((emoji) => {
        const shortKey = emoji.replace(/:/g, '')
        chrome.storage.local.get(shortKey, (data) => {
          const unicodeEmoji = String.fromCodePoint(`0x${data[shortKey].unified}`, 16)
          event.target.value = event.target.value.replace(emoji, unicodeEmoji)
        })
      })
    }
  }
})
