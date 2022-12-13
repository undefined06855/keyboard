const KEY_WIDTH = 45

class Key
{
    constructor (data)
    {
        const display = data.d
        const code = data.c
        const width = data.w * KEY_WIDTH || KEY_WIDTH
        const row = data.r

        const k = document.createElement("div")

        k.style.minWidth = width + "px"
        k.style.minHeight = KEY_WIDTH + "px"
        k.innerText = display
        k.setAttribute("code", code)
        k.setAttribute("id", code)

        document.getElementsByClassName("k_row")[row].appendChild(k)
    }
}

new Key({ r: 0, d: "ESC",   c: "Escape" })
new Key({ r: 0, d: "1",     c: "Digit1" })
new Key({ r: 0, d: "2",     c: "Digit2" })
new Key({ r: 0, d: "3",     c: "Digit3" })
new Key({ r: 0, d: "4",     c: "Digit4" })
new Key({ r: 0, d: "5",     c: "Digit5" })
new Key({ r: 0, d: "6",     c: "Digit6" })
new Key({ r: 0, d: "7",     c: "Digit7" })
new Key({ r: 0, d: "8",     c: "Digit8" })
new Key({ r: 0, d: "9",     c: "Digit9" })
new Key({ r: 0, d: "0",     c: "Digit0" })
new Key({ r: 0, d: "",      c: "Minus" })
new Key({ r: 0, d: "",      c: "Equal" })
new Key({ r: 0, d: "←",     c: "Backspace", w: 2 })

new Key({ r: 1, d: "TAB",   c: "Tab", w: 1.5 })
new Key({ r: 1, d: "Q",     c: "KeyQ"})
new Key({ r: 1, d: "W",     c: "KeyW"})
new Key({ r: 1, d: "E",     c: "KeyE"})
new Key({ r: 1, d: "R",     c: "KeyR"})
new Key({ r: 1, d: "T",     c: "KeyT"})
new Key({ r: 1, d: "Y",     c: "KeyY"})
new Key({ r: 1, d: "U",     c: "KeyU"})
new Key({ r: 1, d: "I",     c: "KeyI"})
new Key({ r: 1, d: "O",     c: "KeyO"})
new Key({ r: 1, d: "P",     c: "KeyP"})
new Key({ r: 1, d: "",      c: "BracketLeft"})
new Key({ r: 1, d: "",      c: "BracketRight"})
new Key({ r: 1, d: "",      c: "Enter", w: 1.5})

new Key({ r: 2, d: "CAPS",  c: "CapsLock", w: 1.75 })
new Key({ r: 2, d: "A",     c: "KeyA" })
new Key({ r: 2, d: "S",     c: "KeyS" })
new Key({ r: 2, d: "D",     c: "KeyD" })
new Key({ r: 2, d: "F",     c: "KeyF" })
new Key({ r: 2, d: "G",     c: "KeyG" })
new Key({ r: 2, d: "H",     c: "KeyH" })
new Key({ r: 2, d: "J",     c: "KeyJ" })
new Key({ r: 2, d: "K",     c: "KeyK" })
new Key({ r: 2, d: "L",     c: "KeyL" })
new Key({ r: 2, d: "",      c: "Semicolon" })
new Key({ r: 2, d: "",      c: "Quote" })
new Key({ r: 2, d: "",      c: "Backslash" })
new Key({ r: 2, d: "",      c: "Enter", w: 1.25})

new Key({ r: 3, d: "SHIFT", c: "ShiftLeft", w: 1.25 })
new Key({ r: 3, d: "",      c: "IntlBackslash"})
new Key({ r: 3, d: "Z",     c: "KeyZ" })
new Key({ r: 3, d: "X",     c: "KeyX" })
new Key({ r: 3, d: "C",     c: "KeyC" })
new Key({ r: 3, d: "V",     c: "KeyV" })
new Key({ r: 3, d: "B",     c: "KeyB" })
new Key({ r: 3, d: "N",     c: "KeyN" })
new Key({ r: 3, d: "M",     c: "KeyM" })
new Key({ r: 3, d: "",      c: "Comma" })
new Key({ r: 3, d: "",      c: "Period" })
new Key({ r: 3, d: "",      c: "Slash" })
new Key({ r: 3, d: "",      c: "ShiftRight", w: 3 })

new Key({ r: 4, d: "",      c: "ControlLeft", w: 1.25 })
new Key({ r: 4, d: "",      c: "MetaLeft", w: 1.25 })
new Key({ r: 4, d: "",      c: "AltLeft", w: 1.25 })
new Key({ r: 4, d: "",      c: "Space", w: 7.5 })
new Key({ r: 4, d: "",      c: "AltRight", w: 1.25 })
new Key({ r: 4, d: "",      c: "", w: 1.25 })
new Key({ r: 4, d: "",      c: "ContextMenu", w: 1.25 })
new Key({ r: 4, d: "",      c: "ControlRight", w: 1.25 })
