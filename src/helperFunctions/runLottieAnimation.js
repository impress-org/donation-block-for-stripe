import lottie from 'lottie-web';

export default function runLottieAnimation(animationName, containerId) {
    console.log(document.getElementById(containerId))
    import(`../lotties/${animationName}.json`).then((animationData) => {
        const animation = lottie.loadAnimation({
            container: document.getElementById(containerId),
            loop: false,
            autoplay: true,
            animationData: animationData,
        });
        animation.addEventListener('complete', () => {
            animation.destroy();
        });
    });
}
