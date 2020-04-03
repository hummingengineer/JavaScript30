/* Get Our Elements */
const player = document.querySelector('.player')
// video itself
const video = player.querySelector('.viewer')
// Progress Bar (Progress Field, Toggle, Skip Buttons, Player Slider)
const progress = player.querySelector('.progress')
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip]')  // skipButtons is equal to anything (any element) that has a "data-skip" attribute
const ranges = player.querySelectorAll('.player__slider')

/* Build out functions */
function togglePlay() {
  // Pause is a property that lives on the video. There is no playing property. There is only a pause property.
  const method = video.paused ? 'play' : 'pause'
  video[method]()
  // 여기서 바로 재생버튼의 모양을 바꾸기 위해 button.textContent = '>>' 라고도 할 수 있지만 우리는 pause event를 listen 하여 버튼 모양을 바꾸는 방법을 사용할 것이다
}

function updateButton() {
  // We can use "this" because it's bound to the video itself
  const icon = this.paused ? '►' : '❚ ❚'  // video.paused, not pause
  toggle.textContent = icon
}

function skip() {
  // this.dataset.skip is string, so we have to convert it to real number
  video.currentTime += parseFloat(this.dataset.skip)
}

function handleRangeUpdate() {
  // "this.name" is either going to be "volume" or "playbackRate"
  // this.value 는 슬라이더의 값
  // this.name 은 볼륨 슬라이더인지 아니면 비디오 속도 조절 슬라이더인지 판별
  video[this.name] = this.value
}

/* Hook up the event listeners */
// 비디오 화면 클릭하면, 재생과 일시정지를 할 수 있는 이벤트 등록
video.addEventListener('click', togglePlay)
// 재생 버튼을 누르면, 재생과 일시정지를 할 수 있는 이벤트 등록
video.addEventListener('play', updateButton)
// 재생 아이콘과 일시정지 아이콘
video.addEventListener('pause', updateButton)

// Listen to the video for whenever it is paused
// Whatever causes it to pause, then we can just update the actual buttons
toggle.addEventListener('click', togglePlay)
skipButtons.forEach(button => button.addEventListener('click', skip))

// Listen for a change on the specific sliders
// 요소(element)의 값이 변경될 때 발생
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate))
// Listen for a mousemove event. This will fire regardless of if you're clicking or not.
// 마우스가 요소에서 움직일 때
ranges.forEach(range => range.addEventListener('mousemove', handleRangeUpdate))
