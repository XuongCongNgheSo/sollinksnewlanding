const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', () => {
    const toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}

var loaderCpn = document.getElementById("preloader")
loaderCpn.style.animation = "loadingCpn ease 0s"
window.addEventListener("load", function(){
  this.setTimeout(function(){
    loaderCpn.style.display = "none"
    loaderCpn.style.animation = "loadedCpn ease 1s"
  }, 2500)
})
