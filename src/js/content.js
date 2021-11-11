const createModal = (input, emojis) => {
  const point = input.getBoundingClientRect()
  let html = `
  <div style="width: 400px;
              background-color: black;
              color: white;
              position: fixed;
              z-index: 100000000000;
              top: ${point.y}px;
              left: ${point.x}px;">
`
  emojis.forEach((emoji, index) => {
    html += `
      <div style="height: 25px;
                  font-size: 18px;
                  ${index == 0 ? 'background-color: blue;' : ''}
                  ">
        ${emoji} :joy: </div>
`
  })
  html += '</div>'

  document.body.innerHTML += html
  const dialog = document.querySelector('dialog')
  dialog.querySelector('button').addEventListener('click', function () {
    dialog.close()
  })
  dialog.showModal()
}

document.addEventListener('keyup', (event) => {
  const value = event.target.value
  if (value) {
    const emojis = value.match(/:.*?:/g)
    if (emojis) {
      emojis.forEach((emoji) => {
        const shortKey = emoji.replace(/:/g, '').toLowerCase()
        chrome.storage.local.get(shortKey, (data) => {
          const unicodeEmoji = String.fromCodePoint(`0x${data[shortKey].unified}`, 16)
          createModal(event.target, [unicodeEmoji, unicodeEmoji])
          event.target.value = event.target.value.replace(emoji, unicodeEmoji)
        })
      })
    }
  }
})
