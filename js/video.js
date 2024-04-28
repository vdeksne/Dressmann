(() => {
    let elements = document.querySelectorAll(".expander-video");
    elements.forEach(element => {
        let video = element.querySelector("video");
        if (!video)
            return;

        video.addEventListener("click", () => {

            window.open("https://secure.adnxs.com/clktrb?id=799203&redir=https://ad.doubleclick.net/ddm/trackclk/N797608.4451786SHOWHEROS/B31095737.382966960;dc_trk_aid=573850877;dc_trk_cid=206224352;dc_lat=;dc_rdid=;tag_for_child_directed_treatment=;tfua=;ltd=;dc_tdv=1", "_blank");
        });

        let soundButton = document.createElement("button");
        soundButton.classList.add("sound");
        soundButton.addEventListener("click", (e) => {
            if (video.muted) {
                video.muted = false;
                video.volume = 1;
            } else if (video.volume < 1) {
                video.muted = true;
            } else {
                video.volume = 0.5;
            }
        });
        element.appendChild(soundButton);

        video.addEventListener("volumechange", () => {
            if (video.muted) {
                element.classList.add("sound-off");
                element.classList.remove("sound-half");
                element.classList.remove("sound-on");
            } else if (video.volume === 1) {
                element.classList.remove("sound-off");
                element.classList.remove("sound-half");
                element.classList.add("sound-on");
            } else {
                element.classList.remove("sound-off");
                element.classList.add("sound-half");
                element.classList.remove("sound-on");
            }
        });

        if (video.hasAttribute("data-volume-half")) {
            video.volume = 0.5;
        }

        video.addEventListener("ended", () => {
            video.currentTime = 0;
            video.play();
        });

        if (video.hasAttribute("autoplay")) {
            promise = video.play();
            if (promise) {
                promise.catch(() => {
                    video.muted = true;
                    video.play();
                });
            }
        }
    });
})();
