/* Get Our Elements */
const player = document.querySelector('.player')
// video itself
const video = player.querySelector('.viewer')
// Progress Bar (Progress Field, Toggle, Skip Buttons, Player Slider)
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */

/* Hook up the event listeners */

