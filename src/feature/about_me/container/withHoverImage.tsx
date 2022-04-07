
import { gsap } from "gsap";

export const onEnter = ({ currentTarget }: React.MouseEvent<HTMLDivElement>) => {
    gsap.fromTo(currentTarget, {
        rotation: 6,
    },{
        rotation: -8,
        repeat: 1,
        ease: "bounce",
        yoyoEase: "power2",
      });
};