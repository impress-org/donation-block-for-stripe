import lottie from "lottie-web";

export default function runLottieAnimation(animationName, container) {
    import(`./lotties/${animationName}.json`).then(animationData => {
        const animation = lottie.loadAnimation({
            container: container,
            loop: false,
            autoplay: true,
            animationData: animationData
        });
        animation.addEventListener('complete', () => {
            animation.destroy();
        });
    });
};
