class Nav {
  static #HOME_PAGE = 'https://google.com'

  static #back = () => {
    return history.back()
  }

  static #forward = () => {
    return history.forward()
  }

  static #reload = () => {
    return location.reload()
  }

  static #changePage = (href) => {
    return location.assign(href)
  }

  static #go = () => {
    try {
      const url = new URL(window.input.value)
      this.#changePage(url.href)
    } catch (e) {
      alert('Self-destruction in 3,2,1')
      console.log(e)
    }
  }

  static #home = () => {
    return this.#changePage(this.#HOME_PAGE)
  }

  static init = () => {
    windo.back.onclick = this.#back
    windo.forward.onclick = this.#forward
    windo.reload.onclick = this.#reload
    windo.home.onclick = this.#home
    windo.go.onclick = this.#go

    window.input.value = location.href
  }
}
Nav.init()
