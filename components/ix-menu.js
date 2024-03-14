import { proxyCustomElement, HTMLElement, createEvent, h, Host } from '@stencil/core/internal/client';
import { a as anime } from './anime.es.js';
import { s as showAppSwitch } from './index2.js';
import { a as useContextConsumer, A as ApplicationLayoutContext } from './context.js';
import { a as applicationLayoutService } from './service.js';
import { m as menuController } from './menu-service.js';
import { a as convertToRemString } from './rwd.util.js';
import { t as themeSwitcher } from './theme-switcher.js';
import { d as defineCustomElement$5 } from './burger-menu.js';
import { d as defineCustomElement$4 } from './icon-button.js';
import { d as defineCustomElement$3 } from './menu-item.js';
import { d as defineCustomElement$2 } from './spinner.js';

/*
 * SPDX-FileCopyrightText: 2023 Siemens AG
 *
 * SPDX-License-Identifier: MIT
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
class ApplicationSidebarToggleEvent extends Event {
    constructor(force) {
        super('application-sidebar-toggle', { bubbles: true, composed: true });
        this.force = force;
    }
}

const menuCss = "/*!\n* animate.css - https://animate.style/\n* Version - 4.1.1\n* Licensed under the MIT license - http://opensource.org/licenses/MIT\n*\n* Copyright (c) 2020 Animate.css\n*/:root{--animate-duration:1s;--animate-delay:1s;--animate-repeat:1}.animate__animated{animation-duration:1s;animation-duration:var(--animate-duration);animation-fill-mode:both}.animate__animated.animate__infinite{animation-iteration-count:infinite}.animate__animated.animate__repeat-1{animation-iteration-count:1;animation-iteration-count:var(--animate-repeat)}.animate__animated.animate__repeat-2{animation-iteration-count:2;animation-iteration-count:calc(var(--animate-repeat) * 2)}.animate__animated.animate__repeat-3{animation-iteration-count:3;animation-iteration-count:calc(var(--animate-repeat) * 3)}.animate__animated.animate__delay-1s{animation-delay:1s;animation-delay:var(--animate-delay)}.animate__animated.animate__delay-2s{animation-delay:2s;animation-delay:calc(var(--animate-delay) * 2)}.animate__animated.animate__delay-3s{animation-delay:3s;animation-delay:calc(var(--animate-delay) * 3)}.animate__animated.animate__delay-4s{animation-delay:4s;animation-delay:calc(var(--animate-delay) * 4)}.animate__animated.animate__delay-5s{animation-delay:5s;animation-delay:calc(var(--animate-delay) * 5)}.animate__animated.animate__faster{animation-duration:0.5s;animation-duration:calc(var(--animate-duration) / 2)}.animate__animated.animate__fast{animation-duration:0.8s;animation-duration:calc(var(--animate-duration) * 0.8)}.animate__animated.animate__slow{animation-duration:2s;animation-duration:calc(var(--animate-duration) * 2)}.animate__animated.animate__slower{animation-duration:3s;animation-duration:calc(var(--animate-duration) * 3)}@media (prefers-reduced-motion: reduce), print{.animate__animated{animation-duration:1ms !important;transition-duration:1ms !important;animation-iteration-count:1 !important}.animate__animated[class*=Out]{opacity:0}}@keyframes bounce{0%,20%,53%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translateZ(0)}40%,43%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -30px, 0) scaleY(1.1)}70%{animation-timing-function:cubic-bezier(0.755, 0.05, 0.855, 0.06);transform:translate3d(0, -15px, 0) scaleY(1.05)}80%{transition-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1);transform:translateZ(0) scaleY(0.95)}90%{transform:translate3d(0, -4px, 0) scaleY(1.02)}}.animate__bounce{animation-name:bounce;transform-origin:center bottom}@keyframes flash{0%,50%,to{opacity:1}25%,75%{opacity:0}}.animate__flash{animation-name:flash}@keyframes pulse{0%{transform:scaleX(1)}50%{transform:scale3d(1.05, 1.05, 1.05)}to{transform:scaleX(1)}}.animate__pulse{animation-name:pulse;animation-timing-function:ease-in-out}@keyframes rubberBand{0%{transform:scaleX(1)}30%{transform:scale3d(1.25, 0.75, 1)}40%{transform:scale3d(0.75, 1.25, 1)}50%{transform:scale3d(1.15, 0.85, 1)}65%{transform:scale3d(0.95, 1.05, 1)}75%{transform:scale3d(1.05, 0.95, 1)}to{transform:scaleX(1)}}.animate__rubberBand{animation-name:rubberBand}@keyframes shakeX{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{transform:translate3d(10px, 0, 0)}}.animate__shakeX{animation-name:shakeX}@keyframes shakeY{0%,to{transform:translateZ(0)}10%,30%,50%,70%,90%{transform:translate3d(0, -10px, 0)}20%,40%,60%,80%{transform:translate3d(0, 10px, 0)}}.animate__shakeY{animation-name:shakeY}@keyframes headShake{0%{transform:translateX(0)}6.5%{transform:translateX(-6px) rotateY(-9deg)}18.5%{transform:translateX(5px) rotateY(7deg)}31.5%{transform:translateX(-3px) rotateY(-5deg)}43.5%{transform:translateX(2px) rotateY(3deg)}50%{transform:translateX(0)}}.animate__headShake{animation-timing-function:ease-in-out;animation-name:headShake}@keyframes swing{20%{transform:rotate(15deg)}40%{transform:rotate(-10deg)}60%{transform:rotate(5deg)}80%{transform:rotate(-5deg)}to{transform:rotate(0deg)}}.animate__swing{transform-origin:top center;animation-name:swing}@keyframes tada{0%{transform:scaleX(1)}10%,20%{transform:scale3d(0.9, 0.9, 0.9) rotate(-3deg)}30%,50%,70%,90%{transform:scale3d(1.1, 1.1, 1.1) rotate(3deg)}40%,60%,80%{transform:scale3d(1.1, 1.1, 1.1) rotate(-3deg)}to{transform:scaleX(1)}}.animate__tada{animation-name:tada}@keyframes wobble{0%{transform:translateZ(0)}15%{transform:translate3d(-25%, 0, 0) rotate(-5deg)}30%{transform:translate3d(20%, 0, 0) rotate(3deg)}45%{transform:translate3d(-15%, 0, 0) rotate(-3deg)}60%{transform:translate3d(10%, 0, 0) rotate(2deg)}75%{transform:translate3d(-5%, 0, 0) rotate(-1deg)}to{transform:translateZ(0)}}.animate__wobble{animation-name:wobble}@keyframes jello{0%,11.1%,to{transform:translateZ(0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}.animate__jello{animation-name:jello;transform-origin:center}@keyframes heartBeat{0%{transform:scale(1)}14%{transform:scale(1.3)}28%{transform:scale(1)}42%{transform:scale(1.3)}70%{transform:scale(1)}}.animate__heartBeat{animation-name:heartBeat;animation-duration:1.3s;animation-duration:calc(var(--animate-duration) * 1.3);animation-timing-function:ease-in-out}@keyframes backInDown{0%{transform:translateY(-1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInDown{animation-name:backInDown}@keyframes backInLeft{0%{transform:translateX(-2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInLeft{animation-name:backInLeft}@keyframes backInRight{0%{transform:translateX(2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInRight{animation-name:backInRight}@keyframes backInUp{0%{transform:translateY(1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:scale(1);opacity:1}}.animate__backInUp{animation-name:backInUp}@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:translateY(700px) scale(0.7);opacity:0.7}}.animate__backOutDown{animation-name:backOutDown}@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:translateX(-2000px) scale(0.7);opacity:0.7}}.animate__backOutLeft{animation-name:backOutLeft}@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0) scale(0.7);opacity:0.7}to{transform:translateX(2000px) scale(0.7);opacity:0.7}}.animate__backOutRight{animation-name:backOutRight}@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0) scale(0.7);opacity:0.7}to{transform:translateY(-700px) scale(0.7);opacity:0.7}}.animate__backOutUp{animation-name:backOutUp}@keyframes bounceIn{0%,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}20%{transform:scale3d(1.1, 1.1, 1.1)}40%{transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;transform:scale3d(1.03, 1.03, 1.03)}80%{transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;transform:scaleX(1)}}.animate__bounceIn{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:bounceIn}@keyframes bounceInDown{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(0, -3000px, 0) scaleY(3)}60%{opacity:1;transform:translate3d(0, 25px, 0) scaleY(0.9)}75%{transform:translate3d(0, -10px, 0) scaleY(0.95)}90%{transform:translate3d(0, 5px, 0) scaleY(0.985)}to{transform:translateZ(0)}}.animate__bounceInDown{animation-name:bounceInDown}@keyframes bounceInLeft{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(-3000px, 0, 0) scaleX(3)}60%{opacity:1;transform:translate3d(25px, 0, 0) scaleX(1)}75%{transform:translate3d(-10px, 0, 0) scaleX(0.98)}90%{transform:translate3d(5px, 0, 0) scaleX(0.995)}to{transform:translateZ(0)}}.animate__bounceInLeft{animation-name:bounceInLeft}@keyframes bounceInRight{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(3000px, 0, 0) scaleX(3)}60%{opacity:1;transform:translate3d(-25px, 0, 0) scaleX(1)}75%{transform:translate3d(10px, 0, 0) scaleX(0.98)}90%{transform:translate3d(-5px, 0, 0) scaleX(0.995)}to{transform:translateZ(0)}}.animate__bounceInRight{animation-name:bounceInRight}@keyframes bounceInUp{0%,60%,75%,90%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:translate3d(0, 3000px, 0) scaleY(5)}60%{opacity:1;transform:translate3d(0, -20px, 0) scaleY(0.9)}75%{transform:translate3d(0, 10px, 0) scaleY(0.95)}90%{transform:translate3d(0, -5px, 0) scaleY(0.985)}to{transform:translateZ(0)}}.animate__bounceInUp{animation-name:bounceInUp}@keyframes bounceOut{20%{transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}}.animate__bounceOut{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:bounceOut}@keyframes bounceOutDown{20%{transform:translate3d(0, 10px, 0) scaleY(0.985)}40%,45%{opacity:1;transform:translate3d(0, -20px, 0) scaleY(0.9)}to{opacity:0;transform:translate3d(0, 2000px, 0) scaleY(3)}}.animate__bounceOutDown{animation-name:bounceOutDown}@keyframes bounceOutLeft{20%{opacity:1;transform:translate3d(20px, 0, 0) scaleX(0.9)}to{opacity:0;transform:translate3d(-2000px, 0, 0) scaleX(2)}}.animate__bounceOutLeft{animation-name:bounceOutLeft}@keyframes bounceOutRight{20%{opacity:1;transform:translate3d(-20px, 0, 0) scaleX(0.9)}to{opacity:0;transform:translate3d(2000px, 0, 0) scaleX(2)}}.animate__bounceOutRight{animation-name:bounceOutRight}@keyframes bounceOutUp{20%{transform:translate3d(0, -10px, 0) scaleY(0.985)}40%,45%{opacity:1;transform:translate3d(0, 20px, 0) scaleY(0.9)}to{opacity:0;transform:translate3d(0, -2000px, 0) scaleY(3)}}.animate__bounceOutUp{animation-name:bounceOutUp}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}.animate__fadeIn{animation-name:fadeIn}@keyframes fadeInDown{0%{opacity:0;transform:translate3d(0, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDown{animation-name:fadeInDown}@keyframes fadeInDownBig{0%{opacity:0;transform:translate3d(0, -2000px, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInDownBig{animation-name:fadeInDownBig}@keyframes fadeInLeft{0%{opacity:0;transform:translate3d(-100%, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeft{animation-name:fadeInLeft}@keyframes fadeInLeftBig{0%{opacity:0;transform:translate3d(-2000px, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInLeftBig{animation-name:fadeInLeftBig}@keyframes fadeInRight{0%{opacity:0;transform:translate3d(100%, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRight{animation-name:fadeInRight}@keyframes fadeInRightBig{0%{opacity:0;transform:translate3d(2000px, 0, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInRightBig{animation-name:fadeInRightBig}@keyframes fadeInUp{0%{opacity:0;transform:translate3d(0, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUp{animation-name:fadeInUp}@keyframes fadeInUpBig{0%{opacity:0;transform:translate3d(0, 2000px, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInUpBig{animation-name:fadeInUpBig}@keyframes fadeInTopLeft{0%{opacity:0;transform:translate3d(-100%, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopLeft{animation-name:fadeInTopLeft}@keyframes fadeInTopRight{0%{opacity:0;transform:translate3d(100%, -100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInTopRight{animation-name:fadeInTopRight}@keyframes fadeInBottomLeft{0%{opacity:0;transform:translate3d(-100%, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomLeft{animation-name:fadeInBottomLeft}@keyframes fadeInBottomRight{0%{opacity:0;transform:translate3d(100%, 100%, 0)}to{opacity:1;transform:translateZ(0)}}.animate__fadeInBottomRight{animation-name:fadeInBottomRight}@keyframes fadeOut{0%{opacity:1}to{opacity:0}}.animate__fadeOut{animation-name:fadeOut}@keyframes fadeOutDown{0%{opacity:1}to{opacity:0;transform:translate3d(0, 100%, 0)}}.animate__fadeOutDown{animation-name:fadeOutDown}@keyframes fadeOutDownBig{0%{opacity:1}to{opacity:0;transform:translate3d(0, 2000px, 0)}}.animate__fadeOutDownBig{animation-name:fadeOutDownBig}@keyframes fadeOutLeft{0%{opacity:1}to{opacity:0;transform:translate3d(-100%, 0, 0)}}.animate__fadeOutLeft{animation-name:fadeOutLeft}@keyframes fadeOutLeftBig{0%{opacity:1}to{opacity:0;transform:translate3d(-2000px, 0, 0)}}.animate__fadeOutLeftBig{animation-name:fadeOutLeftBig}@keyframes fadeOutRight{0%{opacity:1}to{opacity:0;transform:translate3d(100%, 0, 0)}}.animate__fadeOutRight{animation-name:fadeOutRight}@keyframes fadeOutRightBig{0%{opacity:1}to{opacity:0;transform:translate3d(2000px, 0, 0)}}.animate__fadeOutRightBig{animation-name:fadeOutRightBig}@keyframes fadeOutUp{0%{opacity:1}to{opacity:0;transform:translate3d(0, -100%, 0)}}.animate__fadeOutUp{animation-name:fadeOutUp}@keyframes fadeOutUpBig{0%{opacity:1}to{opacity:0;transform:translate3d(0, -2000px, 0)}}.animate__fadeOutUpBig{animation-name:fadeOutUpBig}@keyframes fadeOutTopLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%, -100%, 0)}}.animate__fadeOutTopLeft{animation-name:fadeOutTopLeft}@keyframes fadeOutTopRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%, -100%, 0)}}.animate__fadeOutTopRight{animation-name:fadeOutTopRight}@keyframes fadeOutBottomRight{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(100%, 100%, 0)}}.animate__fadeOutBottomRight{animation-name:fadeOutBottomRight}@keyframes fadeOutBottomLeft{0%{opacity:1;transform:translateZ(0)}to{opacity:0;transform:translate3d(-100%, 100%, 0)}}.animate__fadeOutBottomLeft{animation-name:fadeOutBottomLeft}@keyframes flip{0%{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(-1turn);animation-timing-function:ease-out}40%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-190deg);animation-timing-function:ease-out}50%{transform:perspective(400px) scaleX(1) translateZ(150px) rotateY(-170deg);animation-timing-function:ease-in}80%{transform:perspective(400px) scale3d(0.95, 0.95, 0.95) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}to{transform:perspective(400px) scaleX(1) translateZ(0) rotateY(0deg);animation-timing-function:ease-in}}.animate__animated.animate__flip{backface-visibility:visible;animation-name:flip}@keyframes flipInX{0%{transform:perspective(400px) rotateX(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateX(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateX(10deg);opacity:1}80%{transform:perspective(400px) rotateX(-5deg)}to{transform:perspective(400px)}}.animate__flipInX{backface-visibility:visible !important;animation-name:flipInX}@keyframes flipInY{0%{transform:perspective(400px) rotateY(90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(400px) rotateY(-20deg);animation-timing-function:ease-in}60%{transform:perspective(400px) rotateY(10deg);opacity:1}80%{transform:perspective(400px) rotateY(-5deg)}to{transform:perspective(400px)}}.animate__flipInY{backface-visibility:visible !important;animation-name:flipInY}@keyframes flipOutX{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateX(-20deg);opacity:1}to{transform:perspective(400px) rotateX(90deg);opacity:0}}.animate__flipOutX{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);animation-name:flipOutX;backface-visibility:visible !important}@keyframes flipOutY{0%{transform:perspective(400px)}30%{transform:perspective(400px) rotateY(-15deg);opacity:1}to{transform:perspective(400px) rotateY(90deg);opacity:0}}.animate__flipOutY{animation-duration:0.75s;animation-duration:calc(var(--animate-duration) * 0.75);backface-visibility:visible !important;animation-name:flipOutY}@keyframes lightSpeedInRight{0%{transform:translate3d(100%, 0, 0) skewX(-30deg);opacity:0}60%{transform:skewX(20deg);opacity:1}80%{transform:skewX(-5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInRight{animation-name:lightSpeedInRight;animation-timing-function:ease-out}@keyframes lightSpeedInLeft{0%{transform:translate3d(-100%, 0, 0) skewX(30deg);opacity:0}60%{transform:skewX(-20deg);opacity:1}80%{transform:skewX(5deg)}to{transform:translateZ(0)}}.animate__lightSpeedInLeft{animation-name:lightSpeedInLeft;animation-timing-function:ease-out}@keyframes lightSpeedOutRight{0%{opacity:1}to{transform:translate3d(100%, 0, 0) skewX(30deg);opacity:0}}.animate__lightSpeedOutRight{animation-name:lightSpeedOutRight;animation-timing-function:ease-in}@keyframes lightSpeedOutLeft{0%{opacity:1}to{transform:translate3d(-100%, 0, 0) skewX(-30deg);opacity:0}}.animate__lightSpeedOutLeft{animation-name:lightSpeedOutLeft;animation-timing-function:ease-in}@keyframes rotateIn{0%{transform:rotate(-200deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateIn{animation-name:rotateIn;transform-origin:center}@keyframes rotateInDownLeft{0%{transform:rotate(-45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownLeft{animation-name:rotateInDownLeft;transform-origin:left bottom}@keyframes rotateInDownRight{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInDownRight{animation-name:rotateInDownRight;transform-origin:right bottom}@keyframes rotateInUpLeft{0%{transform:rotate(45deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpLeft{animation-name:rotateInUpLeft;transform-origin:left bottom}@keyframes rotateInUpRight{0%{transform:rotate(-90deg);opacity:0}to{transform:translateZ(0);opacity:1}}.animate__rotateInUpRight{animation-name:rotateInUpRight;transform-origin:right bottom}@keyframes rotateOut{0%{opacity:1}to{transform:rotate(200deg);opacity:0}}.animate__rotateOut{animation-name:rotateOut;transform-origin:center}@keyframes rotateOutDownLeft{0%{opacity:1}to{transform:rotate(45deg);opacity:0}}.animate__rotateOutDownLeft{animation-name:rotateOutDownLeft;transform-origin:left bottom}@keyframes rotateOutDownRight{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutDownRight{animation-name:rotateOutDownRight;transform-origin:right bottom}@keyframes rotateOutUpLeft{0%{opacity:1}to{transform:rotate(-45deg);opacity:0}}.animate__rotateOutUpLeft{animation-name:rotateOutUpLeft;transform-origin:left bottom}@keyframes rotateOutUpRight{0%{opacity:1}to{transform:rotate(90deg);opacity:0}}.animate__rotateOutUpRight{animation-name:rotateOutUpRight;transform-origin:right bottom}@keyframes hinge{0%{animation-timing-function:ease-in-out}20%,60%{transform:rotate(80deg);animation-timing-function:ease-in-out}40%,80%{transform:rotate(60deg);animation-timing-function:ease-in-out;opacity:1}to{transform:translate3d(0, 700px, 0);opacity:0}}.animate__hinge{animation-duration:2s;animation-duration:calc(var(--animate-duration) * 2);animation-name:hinge;transform-origin:top left}@keyframes jackInTheBox{0%{opacity:0;transform:scale(0.1) rotate(30deg);transform-origin:center bottom}50%{transform:rotate(-10deg)}70%{transform:rotate(3deg)}to{opacity:1;transform:scale(1)}}.animate__jackInTheBox{animation-name:jackInTheBox}@keyframes rollIn{0%{opacity:0;transform:translate3d(-100%, 0, 0) rotate(-120deg)}to{opacity:1;transform:translateZ(0)}}.animate__rollIn{animation-name:rollIn}@keyframes rollOut{0%{opacity:1}to{opacity:0;transform:translate3d(100%, 0, 0) rotate(120deg)}}.animate__rollOut{animation-name:rollOut}@keyframes zoomIn{0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}.animate__zoomIn{animation-name:zoomIn}@keyframes zoomInDown{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInDown{animation-name:zoomInDown}@keyframes zoomInLeft{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInLeft{animation-name:zoomInLeft}@keyframes zoomInRight{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInRight{animation-name:zoomInRight}@keyframes zoomInUp{0%{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomInUp{animation-name:zoomInUp}@keyframes zoomOut{0%{opacity:1}50%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}to{opacity:0}}.animate__zoomOut{animation-name:zoomOut}@keyframes zoomOutDown{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomOutDown{animation-name:zoomOutDown;transform-origin:center bottom}@keyframes zoomOutLeft{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)}to{opacity:0;transform:scale(0.1) translate3d(-2000px, 0, 0)}}.animate__zoomOutLeft{animation-name:zoomOutLeft;transform-origin:left center}@keyframes zoomOutRight{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)}to{opacity:0;transform:scale(0.1) translate3d(2000px, 0, 0)}}.animate__zoomOutRight{animation-name:zoomOutRight;transform-origin:right center}@keyframes zoomOutUp{40%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}to{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.animate__zoomOutUp{animation-name:zoomOutUp;transform-origin:center bottom}@keyframes slideInDown{0%{transform:translate3d(0, -100%, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInDown{animation-name:slideInDown}@keyframes slideInLeft{0%{transform:translate3d(-100%, 0, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInLeft{animation-name:slideInLeft}@keyframes slideInRight{0%{transform:translate3d(100%, 0, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInRight{animation-name:slideInRight}@keyframes slideInUp{0%{transform:translate3d(0, 100%, 0);visibility:visible}to{transform:translateZ(0)}}.animate__slideInUp{animation-name:slideInUp}@keyframes slideOutDown{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0, 100%, 0)}}.animate__slideOutDown{animation-name:slideOutDown}@keyframes slideOutLeft{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(-100%, 0, 0)}}.animate__slideOutLeft{animation-name:slideOutLeft}@keyframes slideOutRight{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(100%, 0, 0)}}.animate__slideOutRight{animation-name:slideOutRight}@keyframes slideOutUp{0%{transform:translateZ(0)}to{visibility:hidden;transform:translate3d(0, -100%, 0)}}.animate__slideOutUp{animation-name:slideOutUp}:host{display:flex;flex-direction:row;position:absolute;height:100%;min-height:-moz-min-content;min-height:min-content;z-index:var(--theme-z-index-sticky);width:auto;bottom:0}:host *,:host *::after,:host *::before{box-sizing:border-box}:host ::-webkit-scrollbar-button{display:none}:host ::-webkit-scrollbar{width:0.5rem;height:0.5rem}:host ::-webkit-scrollbar-track{border-radius:5px;background:var(--theme-scrollbar-track--background)}:host ::-webkit-scrollbar-track:hover{background:var(--theme-scrollbar-track--background--hover)}:host ::-webkit-scrollbar-thumb{border-radius:5px;background:var(--theme-scrollbar-thumb--background)}:host ::-webkit-scrollbar-thumb:hover{background:var(--theme-scrollbar-thumb--background--hover)}:host ::-webkit-scrollbar-corner{display:none}:host .tabs{height:100%;position:relative;overflow-y:auto;pointer-events:all;-ms-overflow-style:none;scrollbar-width:inherit}:host .tabs::-webkit-scrollbar{display:none}:host .show-scrollbar{scrollbar-width:inherit}:host .show-scrollbar::-webkit-scrollbar{display:inherit}:host .tabs-shadow-container{overflow:hidden;display:block;position:relative;margin-bottom:0.75rem}:host .tabs--shadow{opacity:0;position:absolute;width:100%;height:0.625rem;background:linear-gradient(var(--theme-color-shadow-1), transparent);pointer-events:none;z-index:var(--theme-z-index-sticky);transition:opacity var(--theme-default-time)}:host .tabs--shadow-top{top:0;background:linear-gradient(var(--theme-color-shadow-1), transparent)}:host .tabs--shadow-bottom{bottom:0;background:linear-gradient(transparent, var(--theme-color-shadow-1))}:host .tabs--shadow--show{opacity:1}:host .menu{display:flex;flex-direction:column;position:relative;width:3.25rem;height:100%;padding-block-end:1rem;overflow:hidden;background-color:var(--theme-nav--background);transition:width var(--animate-duration) ease-in-out}:host .menu.expanded{box-shadow:var(--theme-navigation--box-shadow)}:host .menu-overlay{display:none;position:absolute;width:calc(100vw - 3.25rem);height:100%;left:3.25rem;z-index:-1;-webkit-backdrop-filter:blur(1rem);backdrop-filter:blur(1rem);background-color:var(--theme-sidebar-overlay-blur);transition:left var(--animate-duration) ease-in-out}:host .menu-overlay.visible{display:block}:host .menu.expanded{width:16rem}:host .menu-overlay.expanded{width:calc(100vw - 16rem);left:16rem}:host .menu-overlay-container{display:contents}:host .menu-avatar{max-height:3rem}:host .avatar{margin-bottom:2rem}:host #cui-imprint .cui-imprint-product-name{margin-bottom:1rem}:host #cui-imprint .cui-imprint-product-description{margin-bottom:2rem}:host #cui-imprint .cui-imprint-link-container{display:flex;align-items:center}:host .bottom-tab-divider{margin-top:auto}:host .menu-buttons{margin:0.5rem 0 0 0.5rem}:host .menu-buttons .burger-menu,:host .menu-buttons .app-switch{margin-left:0.125rem}:host .menu-buttons>:last-child{margin-bottom:1rem}:host(.breakpoint-sm) .menu:not(.expanded){width:0}:host(.breakpoint-sm) .show-scrollbar{padding-top:1rem}:host(.breakpoint-sm) .menu .burger-menu{display:none}:host(.breakpoint-sm) .menu-overlay{left:0;width:100vw}:host(.breakpoint-lg){position:relative}:host(.breakpoint-lg) .menu.expanded{box-shadow:none}:host ::slotted(a[href]){all:unset}";
const IxMenuStyle0 = menuCss;

const Menu = /*@__PURE__*/ proxyCustomElement(class Menu extends HTMLElement {
    constructor() {
        super();
        this.__registerHost();
        this.__attachShadow();
        this.expandChange = createEvent(this, "expandChange", 7);
        this.mapExpandChange = createEvent(this, "mapExpandChange", 7);
        this.isTransitionDisabled = false;
        // FBC IAM workaround #488
        this.isVisible = (elm) => {
            var _a, _b;
            return (elm.style.display !== 'none' &&
                ((_b = (_a = elm.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement) === null || _b === void 0 ? void 0 : _b.style.display) !== 'none');
        };
        this.showSettings = false;
        this.showAbout = false;
        this.enableToggleTheme = false;
        this.enableSettings = true;
        this.enableMapExpand = false;
        this.applicationName = undefined;
        this.applicationDescription = '';
        this.maxVisibleMenuItems = 9;
        this.i18nExpandSidebar = 'Expand sidebar';
        this.expand = false;
        this.pinned = false;
        this.i18nLegal = 'About & legal information';
        this.i18nSettings = 'Settings';
        this.i18nToggleTheme = 'Toggle theme';
        this.i18nExpand = ' Expand';
        this.i18nCollapse = 'Collapse';
        this.showPinned = false;
        this.mapExpand = true;
        this.activeTab = undefined;
        this.breakpoint = 'lg';
        this.itemsScrollShadowTop = false;
        this.itemsScrollShadowBottom = false;
        this.applicationLayoutContext = undefined;
    }
    pinnedChange(newPinned) {
        var _a;
        if (((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.host) === 'map-navigation') {
            console.warn('ix-map-navigation does not support pinning of the menu');
            return;
        }
        this.setPinned(this.pinned);
        if (newPinned) {
            applicationLayoutService.disableBreakpointDetection();
            applicationLayoutService.setBreakpoint('lg');
            return;
        }
        applicationLayoutService.enableBreakpointDetection();
    }
    get popoverArea() {
        return this.hostElement.shadowRoot.querySelector('#popover-area');
    }
    get menu() {
        return this.hostElement.shadowRoot.querySelector('.menu');
    }
    get menuItemsContainer() {
        return this.menu.querySelector('.tabs');
    }
    get overlayContainer() {
        return this.hostElement.shadowRoot.querySelector('.menu-overlay');
    }
    get menuItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-menu-item:not(.internal-tab):not(.home-tab):not(.bottom-tab):not([slot="bottom"])')).filter(this.isVisible);
    }
    get menuBottomItems() {
        return Array.from(this.hostElement.querySelectorAll('ix-menu-item.bottom-tab:not(.internal-tab):not(.home-tab)')).filter(this.isVisible);
    }
    get homeTab() {
        return this.hostElement.querySelector('ix-menu-item.home-tab');
    }
    get moreItemsDropdown() {
        return this.hostElement.shadowRoot.querySelector('.internal-tab ix-dropdown');
    }
    get isMoreItemsDropdownEmpty() {
        return (this.hostElement.shadowRoot.querySelectorAll('.internal-tab ix-dropdown .appended').length === 0);
    }
    get moreItemsDropdownItems() {
        return this.hostElement.shadowRoot.querySelectorAll('.internal-tab ix-dropdown ix-menu-item');
    }
    get activeMoreTabContainer() {
        return this.hostElement.shadowRoot.querySelector('.active-more-tab');
    }
    get activeMoreTab() {
        return this.hostElement.shadowRoot.querySelector('.active-more-tab ix-menu-item');
    }
    get aboutPopoverContainer() {
        return this.hostElement.querySelector('.about-news');
    }
    get aboutNewsPopover() {
        var _a;
        return ((_a = document.querySelector('ix-menu-about-news')) !== null && _a !== void 0 ? _a : this.hostElement.querySelector('ix-menu-about-news'));
    }
    get aboutTab() {
        return this.hostElement.shadowRoot.querySelector('#aboutAndLegal');
    }
    get about() {
        return this.hostElement.querySelector('ix-menu-about');
    }
    get settings() {
        return this.hostElement.querySelector('ix-menu-settings');
    }
    get isSettingsEmpty() {
        return (Array.from(this.hostElement.shadowRoot.querySelectorAll('ix-menu-settings-item')).length === 0);
    }
    get tabsContainer() {
        return this.hostElement;
    }
    componentDidLoad() {
        requestAnimationFrame(() => {
            this.handleOverflowIndicator();
        });
        if (this.pinned) {
            this.pinnedChange(this.pinned);
        }
    }
    componentWillLoad() {
        useContextConsumer(this.hostElement, ApplicationLayoutContext, (ctx) => {
            this.applicationLayoutContext = ctx;
            if (ctx.hideHeader === true) {
                this.onBreakpointChange('md');
                return;
            }
            this.onBreakpointChange(applicationLayoutService.breakpoint);
        }, true);
        menuController.register(this.hostElement);
        applicationLayoutService.onChange.on((breakpoint) => this.onBreakpointChange(breakpoint));
        this.onBreakpointChange(applicationLayoutService.breakpoint);
    }
    componentWillRender() {
        this.appendTabs();
    }
    componentDidRender() {
        this.appendFragments();
    }
    setPinned(pinned) {
        this.showPinned = pinned;
        menuController.setIsPinned(pinned);
    }
    onBreakpointChange(mode) {
        var _a;
        if (!this.applicationLayoutContext && mode === 'sm') {
            return;
        }
        if (((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.host) === 'map-navigation') {
            this.breakpoint = 'md';
            return;
        }
        if (!this.applicationLayoutContext) {
            return;
        }
        if (this.applicationLayoutContext.hideHeader && mode === 'sm') {
            return;
        }
        this.breakpoint = mode;
        if (this.breakpoint === 'lg') {
            this.setPinned(true);
            this.toggleMenu(true);
            return;
        }
        this.setPinned(false);
        this.toggleMenu(false);
    }
    appendFragments() {
        this.appendAboutNewsPopover();
    }
    resetActiveTab() {
        this.activeTab = null;
    }
    appendTabs() {
        this.activeTab = null;
    }
    getAboutPopoverVerticalPosition() {
        const heightArrow = 12;
        const offsetArrow = 6;
        const rectAbout = this.aboutTab.getBoundingClientRect();
        const offset = window.innerHeight -
            (rectAbout.bottom - rectAbout.height / 2 + heightArrow / 2 + offsetArrow);
        return convertToRemString(offset);
    }
    appendAboutNewsPopover() {
        var _a;
        if (!this.aboutNewsPopover) {
            return;
        }
        this.aboutNewsPopover.style.bottom = this.getAboutPopoverVerticalPosition();
        if (!((_a = this.popoverArea) === null || _a === void 0 ? void 0 : _a.contains(this.aboutNewsPopover))) {
            const showMore = () => {
                var _a;
                if (((_a = this.aboutNewsPopover) === null || _a === void 0 ? void 0 : _a.aboutItemLabel) && this.about) {
                    this.about.activeTabLabel = this.aboutNewsPopover.aboutItemLabel;
                    this.toggleAbout(true);
                }
            };
            this.aboutNewsPopover.addEventListener('showMore', showMore.bind(this));
            document.body.appendChild(this.aboutNewsPopover);
        }
    }
    /**
     * Toggle map sidebar expand
     * @param show
     */
    async toggleMapExpand(show) {
        if (show !== undefined) {
            this.mapExpand = show;
        }
        else {
            this.mapExpand = !this.mapExpand;
        }
    }
    /**
     * Toggle menu
     * @param show
     */
    async toggleMenu(show) {
        if (show !== undefined) {
            this.expand = show;
        }
        else {
            this.expand = !this.expand;
        }
        if (this.aboutNewsPopover) {
            this.aboutNewsPopover.expanded = this.expand;
        }
        this.expandChange.emit(this.expand);
        this.isTransitionDisabled = false;
        this.checkTransition();
        if (this.breakpoint == 'sm' && this.expand) {
            setTimeout(() => {
                this.handleOverflowIndicator();
            }, 100);
        }
    }
    /**
     * Disable transition of overlay while menu animation is running.
     */
    checkTransition() {
        const container = this.overlayContainer;
        if (!container) {
            return;
        }
        if (this.isTransitionDisabled) {
            container.style.transitionProperty = 'left';
        }
        else {
            container.style.transitionProperty = 'all';
        }
    }
    isOverlayVisible() {
        return this.showAbout || this.showSettings;
    }
    /**
     * Toggle Settings tabs
     * @param show
     */
    async toggleSettings(show) {
        if (!this.settings) {
            return;
        }
        if (!this.isOverlayVisible()) {
            this.animateOverlayFadeIn();
        }
        if (show) {
            this.resetOverlay();
            this.showSettings = show;
            this.settings.show = this.showSettings;
        }
        else {
            this.onOverlayClose();
        }
    }
    /**
     * Toggle About tabs
     * @param show
     */
    async toggleAbout(show) {
        if (!this.about) {
            return;
        }
        if (!this.isOverlayVisible()) {
            this.animateOverlayFadeIn();
        }
        if (show) {
            this.resetOverlay();
            this.showAbout = show;
            this.about.show = this.showAbout;
        }
        else {
            this.onOverlayClose();
        }
    }
    resetOverlay() {
        this.showSettings = false;
        this.showAbout = false;
        if (this.settings) {
            this.settings.show = false;
        }
        if (this.about) {
            this.about.show = false;
        }
    }
    getCollapseText() {
        return this.mapExpand ? this.i18nCollapse : this.i18nExpand;
    }
    getCollapseIcon() {
        return this.mapExpand ? 'navigation-left' : 'navigation-right';
    }
    isMenuItemClicked(event) {
        if (event.target instanceof HTMLElement) {
            return event.target.tagName === 'IX-MENU-ITEM';
        }
        return false;
    }
    handleOverflowIndicator() {
        const { clientHeight, scrollTop, scrollHeight } = this.menuItemsContainer;
        this.itemsScrollShadowTop = scrollTop > 0;
        this.itemsScrollShadowBottom =
            Math.round(scrollTop + clientHeight) < scrollHeight;
    }
    onOverlayClose() {
        this.animateOverlayFadeOut(() => {
            this.resetOverlay();
        });
    }
    animateOverlayFadeIn() {
        requestAnimationFrame(() => {
            anime({
                targets: this.overlayContainer,
                duration: 300,
                backdropFilter: [0, 'blur(1rem)'],
                translateX: ['-4rem', 0],
                opacity: [0, 1],
                easing: 'easeInSine',
                begin: () => {
                    if (this.showPinned) {
                        return;
                    }
                    this.toggleMenu(false);
                },
            });
        });
    }
    animateOverlayFadeOut(onComplete) {
        requestAnimationFrame(() => {
            anime({
                targets: this.overlayContainer,
                duration: 300,
                backdropFilter: ['blur(1rem)', 0],
                translateX: [0, '-4rem'],
                opacity: [1, 0],
                easing: 'easeInSine',
                complete: () => onComplete(),
            });
        });
    }
    onMenuItemsClick(event) {
        if (this.isMenuItemClicked(event)) {
            if (!this.showPinned) {
                this.toggleMenu(false);
            }
            this.onOverlayClose();
        }
    }
    isHiddenFromViewport() {
        return this.breakpoint === 'sm' && this.expand === false;
    }
    sidebarToggle() {
        this.mapExpandChange.emit(this.mapExpand);
        this.hostElement.dispatchEvent(new ApplicationSidebarToggleEvent(this.mapExpand));
    }
    render() {
        var _a;
        return (h(Host, { key: '57ed22e20f5555a24082927f659fb3350e379714', class: {
                expanded: this.expand,
                [`breakpoint-${this.breakpoint}`]: true,
            }, slot: "menu" }, h("aside", { key: 'd841238a2da091b1337399c6bc307a7ba14bd6c4', class: {
                menu: true,
                expanded: this.expand,
            }, onClick: () => {
                this.resetActiveTab();
            } }, h("div", { key: '66f09da3dc5bf343086847bcbdb43f3ad967d5f9', class: { 'menu-buttons': this.breakpoint != 'sm' } }, h("ix-burger-menu", { key: 'bd5312117ab2e20daf8d6ea2caa699251b607e92', onClick: async () => this.toggleMenu(), expanded: this.expand, ixAriaLabel: this.i18nExpandSidebar, pinned: this.showPinned, class: {
                'burger-menu': true,
            } }), this.breakpoint === 'sm' &&
            this.applicationLayoutContext.appSwitchConfig && (h("ix-icon-button", { onClick: () => showAppSwitch(this.applicationLayoutContext.appSwitchConfig), icon: "apps", ghost: true, class: "app-switch" }))), h("div", { key: '29ba7536d7dd3edf4c2e801290a7c60ef54c1648', id: "menu-tabs", style: {
                display: 'contents',
            }, onClick: (e) => this.onMenuItemsClick(e) }, h("div", { key: '450298f43c12031f665e2484f8165ba9e74b6b76', class: "tabs-shadow-container" }, h("div", { key: 'b312cfc3b00ce0ff1b4206be12496ab39356c759', class: {
                'tabs--shadow': true,
                'tabs--shadow-top': true,
                'tabs--shadow--show': this.itemsScrollShadowTop,
            } }), h("div", { key: '9ce301d9ce4555effdaab3c56c7d28e14a5c2953', class: {
                tabs: true,
                'show-scrollbar': this.expand,
            }, onScroll: () => this.handleOverflowIndicator() }, h("div", { key: '27ec220cb3ff2966207672ed4662c901fc9f82cb', class: "menu-avatar" }, h("slot", { key: '167d12d3a43c7506ffe68596992ac7fc87cc4186', name: "ix-menu-avatar" })), h("slot", { key: 'fe500ae0cacc669d1b3c03ef7d16defba5875e57', name: "home" }), this.breakpoint !== 'sm' || !this.isHiddenFromViewport() ? (h("slot", null)) : null), h("div", { key: 'fedcb402f5110a02abe79634824e52d1502e09fc', class: {
                'tabs--shadow': true,
                'tabs--shadow-bottom': true,
                'tabs--shadow--show': this.itemsScrollShadowBottom,
            } }))), h("div", { key: '57b6e359fbdc1b3d3f5d68ae6507628ae220b95f', class: "bottom-tab-divider" }), this.settings ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "settings", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showSettings,
            }, icon: 'cogwheel', onClick: async () => this.toggleSettings(!this.showSettings) }, this.i18nSettings)) : null, h("div", { key: '34b38c13d3964f2bed9514b09778643f05f2b2b5', onClick: (e) => this.onMenuItemsClick(e) }, h("slot", { key: '8455d70e542f745f251b43bcacca750ecb8870bf', name: "bottom" })), h("div", { key: '97714b2646dc697a2345dc2bdf6ef12f207d79ab', id: "popover-area" }), this.about ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "aboutAndLegal", class: {
                'internal-tab': true,
                'bottom-tab': true,
                active: this.showAbout,
            }, icon: 'info', onClick: async () => this.toggleAbout(!this.showAbout) }, this.i18nLegal)) : null, this.enableToggleTheme ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "toggleTheme", onClick: () => themeSwitcher.toggleMode(), class: "internal-tab bottom-tab", icon: 'light-dark' }, this.i18nToggleTheme)) : null, this.enableMapExpand || ((_a = this.applicationLayoutContext) === null || _a === void 0 ? void 0 : _a.sidebar) ? (h("ix-menu-item", { disabled: this.isHiddenFromViewport(), id: "menu-collapse", onClick: () => this.sidebarToggle(), class: "internal-tab bottom-tab", icon: `${this.getCollapseIcon()}` }, this.getCollapseText())) : null), h("div", { key: '7ef91f2c64302cea55ab264088f18b77a4c04965', class: {
                'menu-overlay': true,
                visible: this.isOverlayVisible(),
                expanded: this.expand,
            }, onTransitionEnd: () => {
                this.isTransitionDisabled = true;
                this.checkTransition();
            } }, h("div", { key: 'cb0713613fa1c00f1d86e4010f5279f168462c45', class: 'menu-overlay-container' }, this.showSettings ? h("slot", { name: "ix-menu-settings" }) : null), h("div", { key: '131513ae327f585ac96a2413494b9082fdaf112a', class: 'menu-overlay-container' }, this.showAbout ? h("slot", { name: "ix-menu-about" }) : null))));
    }
    get hostElement() { return this; }
    static get watchers() { return {
        "pinned": ["pinnedChange"]
    }; }
    static get style() { return IxMenuStyle0; }
}, [1, "ix-menu", {
        "showSettings": [1028, "show-settings"],
        "showAbout": [1028, "show-about"],
        "enableToggleTheme": [4, "enable-toggle-theme"],
        "enableSettings": [4, "enable-settings"],
        "enableMapExpand": [4, "enable-map-expand"],
        "applicationName": [1, "application-name"],
        "applicationDescription": [1, "application-description"],
        "maxVisibleMenuItems": [2, "max-visible-menu-items"],
        "i18nExpandSidebar": [1, "i-1-8n-expand-sidebar"],
        "expand": [1540],
        "pinned": [4],
        "i18nLegal": [1, "i-1-8n-legal"],
        "i18nSettings": [1, "i-1-8n-settings"],
        "i18nToggleTheme": [1, "i-1-8n-toggle-theme"],
        "i18nExpand": [1, "i-1-8n-expand"],
        "i18nCollapse": [1, "i-1-8n-collapse"],
        "showPinned": [32],
        "mapExpand": [32],
        "activeTab": [32],
        "breakpoint": [32],
        "itemsScrollShadowTop": [32],
        "itemsScrollShadowBottom": [32],
        "applicationLayoutContext": [32],
        "toggleMapExpand": [64],
        "toggleMenu": [64],
        "toggleSettings": [64],
        "toggleAbout": [64]
    }, [[9, "resize", "handleOverflowIndicator"], [0, "close", "onOverlayClose"]], {
        "pinned": ["pinnedChange"]
    }]);
function defineCustomElement$1() {
    if (typeof customElements === "undefined") {
        return;
    }
    const components = ["ix-menu", "ix-burger-menu", "ix-icon-button", "ix-menu-item", "ix-spinner"];
    components.forEach(tagName => { switch (tagName) {
        case "ix-menu":
            if (!customElements.get(tagName)) {
                customElements.define(tagName, Menu);
            }
            break;
        case "ix-burger-menu":
            if (!customElements.get(tagName)) {
                defineCustomElement$5();
            }
            break;
        case "ix-icon-button":
            if (!customElements.get(tagName)) {
                defineCustomElement$4();
            }
            break;
        case "ix-menu-item":
            if (!customElements.get(tagName)) {
                defineCustomElement$3();
            }
            break;
        case "ix-spinner":
            if (!customElements.get(tagName)) {
                defineCustomElement$2();
            }
            break;
    } });
}

const IxMenu = Menu;
const defineCustomElement = defineCustomElement$1;

export { IxMenu, defineCustomElement };

//# sourceMappingURL=ix-menu.js.map