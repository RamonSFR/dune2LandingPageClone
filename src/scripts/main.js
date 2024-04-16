document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('[data-bs-id]');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function() {
            thumbnails.forEach(thumbnail => {
                thumbnail.classList.remove('trailers_video_wrapper_thumbnails_thumbnail--is-active');
            });

            this.classList.add('trailers_video_wrapper_thumbnails_thumbnail--is-active');

            const videoId = this.getAttribute('data-bs-id');

            const videoElement = document.querySelector('.trailers_video_wrapper_main_video video');
            videoElement.src = `./dist/videos/${videoId}.mp4`;
        });
    });
});
