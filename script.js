const videoEl = document.querySelector('#video');
const requestBtnEl = document.querySelector('#requestbtn');
const shareBtnEl = document.querySelector('#sharebtn');

requestBtnEl.addEventListener('click',() => {
    ft_selectMediaStream();
});

shareBtnEl.addEventListener('click', async () => {
    shareBtnEl.disabled = true;
    await videoEl.requestPictureInPicture();
    shareBtnEl.disabled = false;
});

async function ft_selectMediaStream(){
    try{
        const mediaSteam = await navigator.mediaDevices.getDisplayMedia();
        videoEl.srcObject = mediaSteam;
        videoEl.onloadedmetadata = () =>{
            videoEl.play();
        }
    }catch(err){
        console.log(err);
    }
}