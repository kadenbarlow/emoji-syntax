chrome.runtime.onInstalled.addListener(() => {
  // https://raw.githubusercontent.com/iamcal/emoji-data/master/emoji.json
  fetch(chrome.runtime.getURL('json/emojis.json'))
    .then((resp) => resp.json())
    .then((jsonData) => {
      const formattedData = {}
      console.log(jsonData)
      jsonData.forEach((emoji) => {
        emoji.short_names.forEach((name) => {
          formattedData[name] = emoji
        })
      })
      console.log(formattedData)
      chrome.storage.local.set(formattedData)
    })
})
