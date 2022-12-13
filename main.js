Array.from(document.getElementsByClassName("k_row")).forEach(row => {
    Array.from(row.children).forEach(key => {
        document.addEventListener("keydown", event => {
            event.preventDefault()
            if (event.code == key.id)
            {
                key.classList.add("pressed")
                key.style.transition = "none"
            }
        })
        document.addEventListener("keyup", event => {
            event.preventDefault()
            if (event.code == key.id)
            {
                key.classList.remove("pressed")
                key.style.transition = "all .075s linear"
            }
        })
    })
})

document.addEventListener("keydown", event => {
    if (event.getModifierState("CapsLock")) document.getElementById("CapsLock").classList.add("enabled")
    else                                    document.getElementById("CapsLock").classList.remove("enabled")
})
