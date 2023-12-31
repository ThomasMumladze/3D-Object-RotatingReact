import { Controller } from "react-bootstrap-icons";
import "./styles.scss";

import React, { useEffect, useRef } from "react";

export default function Card({ props, handleImageView, isImageView }) {
    const { id, img, title } = props;
    const constrain = 14;
    const cardLayer = useRef(null);

    const transforms = (x, y, el) => {
        const card = el.getBoundingClientRect();
        const calcPosition = {
            calcX: -(y - card.y - card.height / 2) / constrain,
            calcY: (x - card.x - card.width / 2) / constrain,
        };

        return (
            "perspective(183px) " + "rotateX(" + calcPosition.calcX + "deg) " + "rotateY(" + calcPosition.calcY + "deg)"
        );
    };

    const transformElement = (el, xyEl) => {
        el.style.transform = transforms.apply(null, xyEl);
    };

    useEffect(() => {
        const layer = cardLayer.current;

        const handleMouseMove = (e) => {
            layer.style.transition = ".0s ease-in-out";

            const xy = [e.clientX, e.clientY];
            const position = xy.concat([layer]);

            window.requestAnimationFrame(() => {
                transformElement(layer, position);
            });
        };

        const handleMouseLeave = () => {
            layer.style.transition = ".3s ease-in-out";
            layer.style.transform = "perspective(183px) rotateX(0deg) rotateY(0deg)";
        };

        layer.addEventListener("mousemove", handleMouseMove);
        layer.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            layer.removeEventListener("mousemove", handleMouseMove);
            layer.addEventListener("mouseleave", handleMouseLeave);
        };
    }, []);

    return (
        <div
            className="card"
            ref={cardLayer}
            style={{ borderBottom: isImageView === id ? "solid 1px black" : "", zIndex: isImageView === id ? 1 : 0 }}
        >
            <div className="imageWrapper" onClick={() => handleImageView(id)}>
                <img src={img} alt="..." className={isImageView === id ? "viewImage" : "normalView"} />
            </div>

            <div>{title}</div>
        </div>
    );
}
