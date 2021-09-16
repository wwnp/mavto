import { Component } from '../core/Component.js'
export class Slider extends Component {
  constructor(id) {
    super(id)

  }
  init() {
    this.counter = 0
    this.store = {}

    this.slides = this.$el.querySelectorAll('[data-type="slide"')
    this.track = this.$el.querySelector('#sliderTrack')
    this.prev = this.$el.querySelector('#arrow_prev')
    this.next = this.$el.querySelector('#arrow_next')
    
    update.call(this)
    window.onresize = ()=> {
      update.call(this)
    }

    this.prev.addEventListener('click', prevHandler.bind(this))
    this.next.addEventListener('click', nextHandler.bind(this))
  }

}
function prevHandler() {
  console.log(123)
  this.store['counter'] = this.store['counter'] + this.store['sl_width']
  if (this.store['counter'] > 0) {
    this.store['counter'] = 0
  } else {
    this.track.style.transform = `translate3d(${this.store['counter']}px,0px,0px)`
  }
}
function nextHandler() {
  console.log(456)
  this.store['counter'] = this.store['counter'] - this.store['sl_width']
  if ((-this.store['counter']) >= this.store['maxWidth']) {
    this.store['counter'] = 0
  }
  this.track.style.transform = `translate3d(${this.store['counter']}px,0px,0px)`
}
function update(){
  this.store['counter'] = this.counter
  this.store['sl_height'] = this.$el.offsetHeight
  this.store['sl_width'] = window.outerWidth
  this.store['maxWidth'] = this.store['sl_width'] * this.slides.length

  this.$el.style.width = this.store['sl_width'] + 'px'
  this.track.style.width = (this.store['sl_width'] * this.slides.length) + 'px'

  this.slides.forEach(element => {
    element.children[0].style.height = this.store['sl_height'] + 'px'
    element.children[0].style.width = this.store['sl_width'] + 'px'
  });
}