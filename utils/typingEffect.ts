export const startTypingEffect = (element: any, textList: string[], oneTime = false) => {
  typedSpan.value = element
  toType.value = textList
  // if (toType.value[toTypeIndex.value].length) setTimeout(typeText, delayTypingText)
  if (!oneTime) setTimeout(typeText, delayTypingText)
  else typeText()
}

const typedSpan = ref<any>(null)
const toType = ref(['1Key.'])

const delayTypingChar = 200
const delayErasingText = 150
const delayTypingText = 1000

const toTypeIndex = ref(0)
const charIndex = ref(0)

function typeText() {
  if (charIndex.value < toType.value[toTypeIndex.value].length) {
    typedSpan.value!.textContent += toType.value[toTypeIndex.value].charAt(charIndex.value)
    charIndex.value++
    setTimeout(typeText, delayTypingChar)
  } else {
    setTimeout(eraseText, delayTypingText)
  }
}

function eraseText() {
  if (charIndex.value > 0) {
    typedSpan.value!.textContent = toType.value[toTypeIndex.value].substring(0, charIndex.value - 1)
    charIndex.value--
    setTimeout(eraseText, delayErasingText)
  } else {
    toTypeIndex.value++

    if (toTypeIndex.value >= toType.value.length) toTypeIndex.value = 0
    setTimeout(typeText, delayTypingText)
  }
}
