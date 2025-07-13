// src/utils/speakText.js
export const speakText = (text) => {
  if ("speechSynthesis" in window) {
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = "en-US"
    utterance.rate = 1
    speechSynthesis.cancel() // stop previous if playing
    speechSynthesis.speak(utterance)
  } else {
    alert("Text-to-Speech is not supported in this browser.")
  }
}
