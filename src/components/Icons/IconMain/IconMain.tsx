import React, { useEffect, useState } from "react";
import { isDay } from "../../../utils/formatHelperFunctions";
import "./IconMain.scss";

type Props = {
  weatherCode: number;
};

const IconMain = ({ weatherCode }: Props) => {
  const [icon, setIcon] = useState<JSX.Element | null>(null);

  useEffect(() => {
    let isDayTime = isDay();
    switch (weatherCode) {
      case 0:
      case 1:
        // Clear sky

        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="54.33"
                  y1="29.03"
                  x2="187.18"
                  y2="259.13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 270 270" overflow="visible">
                  <path
                    d="M252.25,168.63C178.13,168.63,118,109.35,118,36.21A130.48,130.48,0,0,1,122.47,3C55.29,10.25,3,66.37,3,134.58,3,207.71,63.09,267,137.21,267,199.69,267,252,224.82,267,167.79A135.56,135.56,0,0,1,252.25,168.63Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    fill="url(#a)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 135 135; 9 135 135; -15 135 135"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="270"
                height="270"
                transform="translate(121 121)"
                xlinkHref="#b"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="149.99"
                  y1="119.24"
                  x2="234.01"
                  y2="264.76"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="b" viewBox="0 0 384 384">
                  <circle
                    cx="192"
                    cy="192"
                    r="84"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />

                  <path
                    d="M192,61.66V12m0,360V322.34M284.17,99.83l35.11-35.11M64.72,319.28l35.11-35.11m0-184.34L64.72,64.72M319.28,319.28l-35.11-35.11M61.66,192H12m360,0H322.34"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 192 192; 45 192 192"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="384"
                height="384"
                transform="translate(64 64)"
                xlinkHref="#b"
              />
            </svg>
          );
        }
        break;
      case 2:
        // Partly cloudy
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="d" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#b)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="e" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="c" viewBox="0 0 363 258">
                  <use width="196" height="196" xlinkHref="#d" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(13 36)"
                    xlinkHref="#e"
                  />
                </symbol>
              </defs>
              <use
                width="363"
                height="258"
                transform="translate(68 109)"
                xlinkHref="#c"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <symbol id="d" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="e" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="c" viewBox="0 0 351 246">
                  <use width="172" height="172" xlinkHref="#d" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(1 24)"
                    xlinkHref="#e"
                  />
                </symbol>
              </defs>
              <use
                width="351"
                height="246"
                transform="translate(80 121)"
                xlinkHref="#c"
              />
            </svg>
          );
        }
        break;
      case 3:
        //Overcast
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="e" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="g" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="h" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="f" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#g"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#h">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="d" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#e" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#f"
                  />
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#d"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <symbol id="e" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="g" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="h" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="f" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#g"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#h">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="d" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#e" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#f"
                  />
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#d"
              />
            </svg>
          );
        }
        break;

      case 45:
      case 48:
        //fog
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="96"
                  y1="-2.35"
                  x2="168"
                  y2="122.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#d4d7dd" />
                  <stop offset="0.45" stop-color="#d4d7dd" />
                  <stop offset="1" stop-color="#bec1c6" />
                </linearGradient>
                <linearGradient
                  id="b"
                  y1="-50.35"
                  x2="168"
                  y2="74.35"
                  xlinkHref="#a"
                />
                <linearGradient
                  id="c"
                  x1="149.99"
                  y1="119.24"
                  x2="234.01"
                  y2="264.76"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <clipPath id="d">
                  <rect width="512" height="306" fill="none" />
                </clipPath>
                <symbol id="e" viewBox="0 0 384 384">
                  <circle
                    cx="192"
                    cy="192"
                    r="84"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#c)"
                  />

                  <path
                    d="M192,61.66V12m0,360V322.34M284.17,99.83l35.11-35.11M64.72,319.28l35.11-35.11m0-184.34L64.72,64.72M319.28,319.28l-35.11-35.11M61.66,192H12m360,0H322.34"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 192 192; 45 192 192"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="f" viewBox="0 0 264 72" overflow="visible">
                  <line
                    x1="12"
                    y1="60"
                    x2="252"
                    y2="60"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                    stroke="url(#a)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-24 0; 24 0; -24 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line
                    x1="12"
                    y1="12"
                    x2="252"
                    y2="12"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                    stroke="url(#b)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="24 0; -24 0; 24 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </line>
                </symbol>
              </defs>
              <g clip-path="url(#d)">
                <use
                  width="384"
                  height="384"
                  transform="translate(64 100)"
                  xlinkHref="#e"
                />
              </g>
              <use
                width="264"
                height="72"
                transform="translate(124 336)"
                xlinkHref="#f"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="96"
                  y1="-2.35"
                  x2="168"
                  y2="122.35"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#d4d7dd" />
                  <stop offset="0.45" stop-color="#d4d7dd" />
                  <stop offset="1" stop-color="#bec1c6" />
                </linearGradient>
                <linearGradient
                  id="b"
                  y1="-50.35"
                  x2="168"
                  y2="74.35"
                  xlinkHref="#a"
                />
                <linearGradient
                  id="c"
                  x1="54.33"
                  y1="29.03"
                  x2="187.18"
                  y2="259.13"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <clipPath id="d">
                  <rect width="512" height="306" fill="none" />
                </clipPath>
                <symbol id="e" viewBox="0 0 270 270">
                  <path
                    d="M252.25,168.63C178.13,168.63,118,109.35,118,36.21A130.48,130.48,0,0,1,122.47,3C55.29,10.25,3,66.37,3,134.58,3,207.71,63.09,267,137.21,267,199.69,267,252,224.82,267,167.79A135.56,135.56,0,0,1,252.25,168.63Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="6"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 135 135; 9 135 135; -15 135 135"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="f" viewBox="0 0 264 72" overflow="visible">
                  <line
                    x1="12"
                    y1="60"
                    x2="252"
                    y2="60"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                    stroke="url(#a)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-24 0; 24 0; -24 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </line>
                  <line
                    x1="12"
                    y1="12"
                    x2="252"
                    y2="12"
                    fill="none"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="24"
                    stroke="url(#b)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="24 0; -24 0; 24 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </line>
                </symbol>
              </defs>
              <g clip-path="url(#d)">
                <use
                  width="270"
                  height="270"
                  transform="translate(121 121)"
                  xlinkHref="#e"
                />
              </g>
              <use
                width="264"
                height="72"
                transform="translate(124 336)"
                xlinkHref="#f"
              />
            </svg>
          );
        }
        break;

      case 51:
      case 53:
      case 56:
        //light and moderate drizzle
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1250.26"
                  y1="79.81"
                  x2="1259.72"
                  y2="104.45"
                  gradientTransform="translate(-1053.95 467.33) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1305.57"
                  y1="88.57"
                  x2="1315.03"
                  y2="113.21"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1360.88"
                  y1="97.33"
                  x2="1370.34"
                  y2="121.97"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#i"
                  />
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#g"
              />

              <path
                d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#d)"
                opacity="0"
              >
                <animateTransform
                  id="x1"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="0s; x1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y1"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="0s; y1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#e)"
                opacity="0"
              >
                <animateTransform
                  id="x2"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="1.34s; x2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y2"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="1.34s; y2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#f)"
                opacity="0"
              >
                <animateTransform
                  id="x3"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin=".67s; x3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y3"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin=".67s; y3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1243.81"
                  y1="161.78"
                  x2="1253.27"
                  y2="186.42"
                  gradientTransform="translate(-1060.41 385.36) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1299.12"
                  y1="170.54"
                  x2="1308.58"
                  y2="195.18"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1354.43"
                  y1="179.3"
                  x2="1363.89"
                  y2="203.94"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#i"
                  />
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#g"
              />

              <path
                d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#d)"
                opacity="0"
              >
                <animateTransform
                  id="x1"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="0s; x1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y1"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="0s; y1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#e)"
                opacity="0"
              >
                <animateTransform
                  id="x2"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="1.34s; x2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y2"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="1.34s; y2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#f)"
                opacity="0"
              >
                <animateTransform
                  id="x3"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin=".67s; x3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y3"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin=".67s; y3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>
            </svg>
          );
        }
        break;

      case 55:
      case 57:
        //heavy drizzle
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1192.2"
                  y1="817.56"
                  x2="1201.66"
                  y2="842.2"
                  gradientTransform="translate(-1112.02 -270.42) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1247.51"
                  y1="826.32"
                  x2="1256.97"
                  y2="850.96"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1302.82"
                  y1="835.08"
                  x2="1312.28"
                  y2="859.72"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#i"
                  />
                </symbol>
              </defs>

              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#g"
              />

              <path
                d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#d)"
                opacity="0"
              >
                <animateTransform
                  id="x1"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="0s; x1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y1"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="0s; y1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#e)"
                opacity="0"
              >
                <animateTransform
                  id="x2"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="1.34s; x2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y2"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="1.34s; y2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#f)"
                opacity="0"
              >
                <animateTransform
                  id="x3"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin=".67s; x3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y3"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin=".67s; y3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1185.75"
                  y1="899.53"
                  x2="1195.21"
                  y2="924.17"
                  gradientTransform="translate(-1118.47 -352.39) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1241.06"
                  y1="908.29"
                  x2="1250.52"
                  y2="932.93"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1296.37"
                  y1="917.05"
                  x2="1305.83"
                  y2="941.69"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 172 172" overflow="visible">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#i"
                  />
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#g"
              />

              <path
                d="M200,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,200,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#d)"
                opacity="0"
              >
                <animateTransform
                  id="x1"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="0s; x1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y1"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="0s; y1.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M256,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,256,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#e)"
                opacity="0"
              >
                <animateTransform
                  id="x2"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin="1.34s; x2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y2"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin="1.34s; y2.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>

              <path
                d="M312,376a8,8,0,0,1-8-8V356a8,8,0,0,1,16,0v12A8,8,0,0,1,312,376Z"
                stroke="#0a5ad4"
                stroke-miterlimit="10"
                fill="url(#f)"
                opacity="0"
              >
                <animateTransform
                  id="x3"
                  attributeName="transform"
                  additive="sum"
                  type="translate"
                  values="0 -32; 0 -32; 0 120;"
                  begin=".67s; x3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />

                <animate
                  id="y3"
                  attributeName="opacity"
                  values="0; 1; 0"
                  begin=".67s; y3.end+1s"
                  dur="1s"
                  keyTimes="0; .25; 1"
                />
              </path>
            </svg>
          );
        }
        break;

      case 61:
      case 63:
      case 66:
      case 80:
      case 81:
        //light and moderate rain
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="e"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="f"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#f)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#c)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#f)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        }
        break;

      case 65:
      case 67:
      case 82:
        //heavy rain

        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="e"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="f"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#f)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#c)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 172 172" overflow="visible">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#f)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        }
        break;

      case 71:
      case 73:
      case 77:
      case 85:
        //light and moderate snow
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="11.38"
                  y1="5.93"
                  x2="32.82"
                  y2="43.07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="67.38"
                  y1="5.93"
                  x2="88.82"
                  y2="43.07"
                  xlinkHref="#b"
                />
                <linearGradient
                  id="d"
                  x1="123.38"
                  y1="5.93"
                  x2="144.82"
                  y2="43.07"
                  xlinkHref="#b"
                />
                <linearGradient
                  id="e"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="g" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#e)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="h" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="f" viewBox="0 0 363 258">
                  <use width="196" height="196" xlinkHref="#g" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(13 36)"
                    xlinkHref="#h"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 156.2 49" overflow="visible">
                  <g>
                    <path
                      d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#b)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 24 24; 360 24 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t1"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="0s; t1.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="0s; s1.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#c)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 80 24; 360 80 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t2"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="-.83s; t2.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="-.83s; s2.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#d)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 136 24; 360 136 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t3"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin=".83s; t3.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin=".83s; s3.end+1s"
                      dur="2s"
                    />
                  </g>
                </symbol>
              </defs>
              <use
                width="363"
                height="258"
                transform="translate(68 109)"
                xlinkHref="#f"
              />
              <use
                width="156.2"
                height="49"
                transform="translate(177.9 337.5)"
                xlinkHref="#i"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="11.38"
                  y1="5.93"
                  x2="32.82"
                  y2="43.07"
                  xlinkHref="#b"
                />
                <linearGradient
                  id="d"
                  x1="67.38"
                  y1="5.93"
                  x2="88.82"
                  y2="43.07"
                  xlinkHref="#b"
                />
                <linearGradient
                  id="e"
                  x1="123.38"
                  y1="5.93"
                  x2="144.82"
                  y2="43.07"
                  xlinkHref="#b"
                />
                <symbol id="g" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="h" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="f" viewBox="0 0 351 246">
                  <use width="172" height="172" xlinkHref="#g" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(1 24)"
                    xlinkHref="#h"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 156.2 49" overflow="visible">
                  <g>
                    <path
                      d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#c)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 24 24; 360 24 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t1"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="0s; t1.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="0s; s1.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#d)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 80 24; 360 80 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t2"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="-.83s; t2.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="-.83s; s2.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#e)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 136 24; 360 136 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t3"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin=".83s; t3.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin=".83s; s3.end+1s"
                      dur="2s"
                    />
                  </g>
                </symbol>
              </defs>
              <use
                width="351"
                height="246"
                transform="translate(80 121)"
                xlinkHref="#f"
              />
              <use
                width="156.2"
                height="49"
                transform="translate(177.9 337.5)"
                xlinkHref="#i"
              />
            </svg>
          );
        }
        break;

      case 75:
      case 86:
        //heavy snow
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="11.38"
                  y1="5.93"
                  x2="32.82"
                  y2="43.07"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="67.38"
                  y1="5.93"
                  x2="88.82"
                  y2="43.07"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="e"
                  x1="123.38"
                  y1="5.93"
                  x2="144.82"
                  y2="43.07"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="f"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#f)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 156.2 49" overflow="visible">
                  <g>
                    <path
                      d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#c)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 24 24; 360 24 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t1"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="0s; t1.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="0s; s1.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#d)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 80 24; 360 80 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t2"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="-.83s; t2.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="-.83s; s2.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#e)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 136 24; 360 136 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t3"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin=".83s; t3.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin=".83s; s3.end+1s"
                      dur="2s"
                    />
                  </g>
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#g"
              />
              <use
                width="156.2"
                height="49"
                transform="translate(177.9 337.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="11.38"
                  y1="5.93"
                  x2="32.82"
                  y2="43.07"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="e"
                  x1="67.38"
                  y1="5.93"
                  x2="88.82"
                  y2="43.07"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="f"
                  x1="123.38"
                  y1="5.93"
                  x2="144.82"
                  y2="43.07"
                  xlinkHref="#c"
                />
                <symbol id="h" viewBox="0 0 172 172" overflow="visible">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="j" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="k" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="i" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#j"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#k">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="g" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 156.2 49" overflow="visible">
                  <g>
                    <path
                      d="M41.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L41.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,37.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L6.58,11A4.08,4.08,0,0,0,1,12.5,4,4,0,0,0,2.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L2.53,31A4,4,0,0,0,1,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L37.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,41.67,31ZM19.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,19.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#d)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 24 24; 360 24 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t1"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="0s; t1.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="0s; s1.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M97.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L97.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,93.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L62.58,11A4.08,4.08,0,0,0,57,12.5,4,4,0,0,0,58.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L58.53,31A4,4,0,0,0,57,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23L93.62,38a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,97.67,31ZM75.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,75.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#e)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 80 24; 360 80 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t2"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin="-.83s; t2.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin="-.83s; s2.end+1s"
                      dur="2s"
                    />
                  </g>

                  <g>
                    <path
                      d="M153.67,31l-5.78-3.3a13.74,13.74,0,0,0,0-6.47L153.67,18a4,4,0,0,0,1.49-5.46A4.08,4.08,0,0,0,149.62,11l-5.79,3.3a13.61,13.61,0,0,0-2.64-2,13.84,13.84,0,0,0-3-1.28V4.5a4.05,4.05,0,0,0-8.1,0v6.6a14.25,14.25,0,0,0-5.69,3.23L118.58,11A4.08,4.08,0,0,0,113,12.5,4,4,0,0,0,114.53,18l5.78,3.3a13.74,13.74,0,0,0,0,6.47L114.53,31A4,4,0,0,0,113,36.5a4.08,4.08,0,0,0,3.52,2,4,4,0,0,0,2-.54l5.79-3.3a13.61,13.61,0,0,0,2.64,2,13.8,13.8,0,0,0,3,1.27V44.5a4.05,4.05,0,0,0,8.1,0V37.89a14.22,14.22,0,0,0,5.68-3.23l5.79,3.3a4,4,0,0,0,2,.54,4.08,4.08,0,0,0,3.52-2A4,4,0,0,0,153.67,31ZM131.06,29.7a6,6,0,0,1-2.22-8.2,6.1,6.1,0,0,1,5.27-3,6.16,6.16,0,0,1,3,.8,6,6,0,0,1,2.22,8.2A6.12,6.12,0,0,1,131.06,29.7Z"
                      stroke="#86c3db"
                      stroke-miterlimit="10"
                      fill="url(#f)"
                      opacity="0"
                    >
                      <animateTransform
                        attributeName="transform"
                        additive="sum"
                        type="rotate"
                        values="0 136 24; 360 136 24"
                        dur="6s"
                        repeatCount="indefinite"
                      />

                      <animate
                        id="t3"
                        attributeName="opacity"
                        values="0; 1; 1; 0"
                        begin=".83s; t3.end+1s"
                        dur="2s"
                        keyTimes="0; .17; .83; 1"
                      />
                    </path>

                    <animateTransform
                      id="s3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -36; 0 92;"
                      begin=".83s; s3.end+1s"
                      dur="2s"
                    />
                  </g>
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#g"
              />
              <use
                width="156.2"
                height="49"
                transform="translate(177.9 337.5)"
                xlinkHref="#l"
              />
            </svg>
          );
        }
        break;

      case 95:
        //thunderstorm
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="e" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="f" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="d" viewBox="0 0 363 258">
                  <use width="196" height="196" xlinkHref="#e" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(13 36)"
                    xlinkHref="#f"
                  />
                </symbol>
                <symbol id="g" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="363"
                height="258"
                transform="translate(68 109)"
                xlinkHref="#d"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#g"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <symbol id="e" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="f" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="d" viewBox="0 0 351 246">
                  <use width="172" height="172" xlinkHref="#e" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(1 24)"
                    xlinkHref="#f"
                  />
                </symbol>
                <symbol id="g" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="351"
                height="246"
                transform="translate(80 121)"
                xlinkHref="#d"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#g"
              />
            </svg>
          );
        }
        break;

      case 96:
        //thunderstorm with slight hail
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="e"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#c"
                />
                <linearGradient
                  id="f"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="h" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#f)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="i" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="g" viewBox="0 0 363 258">
                  <use width="196" height="196" xlinkHref="#h" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(13 36)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="j" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#c)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
                <symbol id="k" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="363"
                height="258"
                transform="translate(68 109)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#j"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#k"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f3f7fe" />
                  <stop offset="0.45" stop-color="#f3f7fe" />
                  <stop offset="1" stop-color="#deeafb" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#d"
                />
                <symbol id="h" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="i" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#e6effc"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="g" viewBox="0 0 351 246">
                  <use width="172" height="172" xlinkHref="#h" />
                  <use
                    width="350"
                    height="222"
                    transform="translate(1 24)"
                    xlinkHref="#i"
                  />
                </symbol>
                <symbol id="j" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#f)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
                <symbol id="k" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#b)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="351"
                height="246"
                transform="translate(80 121)"
                xlinkHref="#g"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#j"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#k"
              />
            </svg>
          );
        }
        break;

      case 99:
        //thunderstorm with heavy hail
        if (isDayTime) {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="f"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#d"
                />
                <linearGradient
                  id="g"
                  x1="78"
                  y1="63.35"
                  x2="118"
                  y2="132.65"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#fbbf24" />
                  <stop offset="0.45" stop-color="#fbbf24" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <symbol id="i" viewBox="0 0 196 196">
                  <circle
                    cx="98"
                    cy="98"
                    r="40"
                    stroke="#f8af18"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#g)"
                  />

                  <path
                    d="M98,31.38V6m0,184V164.62M145.11,50.89,163.05,33M33,163.05l17.94-17.94m0-94.22L33,33m130.1,130.1-17.94-17.94M6,98H31.38M190,98H164.62"
                    fill="none"
                    stroke="#fbbf24"
                    stroke-linecap="round"
                    stroke-miterlimit="10"
                    stroke-width="12"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="0 98 98; 45 98 98"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="k" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="j" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#k"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#l">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="h" viewBox="0 0 410.84 258" overflow="visible">
                  <use width="196" height="196" xlinkHref="#i" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(12.84 36)"
                    xlinkHref="#j"
                  />
                </symbol>
                <symbol id="m" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#d)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#f)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
                <symbol id="n" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="410.84"
                height="258"
                transform="translate(56 109)"
                xlinkHref="#h"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#m"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#n"
              />
            </svg>
          );
        } else {
          setIcon(
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              viewBox="0 0 512 512"
            >
              <defs>
                <linearGradient
                  id="a"
                  x1="52.74"
                  y1="9.62"
                  x2="133.36"
                  y2="149.27"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#9ca3af" />
                  <stop offset="0.45" stop-color="#9ca3af" />
                  <stop offset="1" stop-color="#6b7280" />
                </linearGradient>
                <linearGradient
                  id="b"
                  x1="99.45"
                  y1="30.68"
                  x2="232.64"
                  y2="261.37"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#6b7280" />
                  <stop offset="0.45" stop-color="#6b7280" />
                  <stop offset="1" stop-color="#4b5563" />
                </linearGradient>
                <linearGradient
                  id="c"
                  x1="8.67"
                  y1="17.07"
                  x2="80.88"
                  y2="142.14"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#f7b23b" />
                  <stop offset="0.45" stop-color="#f7b23b" />
                  <stop offset="1" stop-color="#f59e0b" />
                </linearGradient>
                <linearGradient
                  id="d"
                  x1="34.67"
                  y1="18.56"
                  x2="119.21"
                  y2="164.99"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#86c3db" />
                  <stop offset="0.45" stop-color="#86c3db" />
                  <stop offset="1" stop-color="#5eafcf" />
                </linearGradient>
                <linearGradient
                  id="e"
                  x1="1381.32"
                  y1="-1144.67"
                  x2="1399.47"
                  y2="-1097.39"
                  gradientTransform="translate(-1189.41 1353.24) rotate(-9)"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#0b65ed" />
                  <stop offset="0.45" stop-color="#0a5ad4" />
                  <stop offset="1" stop-color="#0950bc" />
                </linearGradient>
                <linearGradient
                  id="f"
                  x1="1436.71"
                  y1="-1137"
                  x2="1454.86"
                  y2="-1089.72"
                  gradientTransform="translate(-1189.32 1354.33) rotate(-9)"
                  xlinkHref="#e"
                />
                <linearGradient
                  id="g"
                  x1="1492.12"
                  y1="-1129.34"
                  x2="1510.27"
                  y2="-1082.06"
                  gradientTransform="translate(-1189.24 1355.43) rotate(-9)"
                  xlinkHref="#e"
                />
                <symbol id="i" viewBox="0 0 172 172">
                  <path
                    d="M160.62,107.4c-47.17,0-85.41-37.73-85.41-84.26A83.31,83.31,0,0,1,78,2C35.27,6.61,2,42.33,2,85.73,2,132.27,40.24,170,87.41,170A85.16,85.16,0,0,0,170,106.87,88,88,0,0,1,160.62,107.4Z"
                    stroke="#72b9d5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="4"
                    fill="url(#d)"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="rotate"
                      values="-15 86 86; 9 86 86; -15 86 86"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </path>
                </symbol>
                <symbol id="k" viewBox="0 0 200.26 126.12">
                  <path
                    d="M.5,93.18a32.44,32.44,0,0,0,32.44,32.44H162.69v-.12c.77,0,1.53.12,2.31.12a34.75,34.75,0,0,0,6.49-68.89A32.38,32.38,0,0,0,123,23.62,48.58,48.58,0,0,0,34.4,60.81c-.49,0-1-.07-1.46-.07A32.44,32.44,0,0,0,.5,93.18Z"
                    stroke="#848b98"
                    stroke-miterlimit="10"
                    fill="url(#a)"
                  />
                </symbol>
                <symbol id="l" viewBox="0 0 350 222">
                  <path
                    d="M291,107c-.85,0-1.68.09-2.53.13A83.9,83.9,0,0,0,135.6,42.92,55.91,55.91,0,0,0,51,91a56.56,56.56,0,0,0,.8,9.08A60,60,0,0,0,63,219c1.35,0,2.67-.11,4-.2v.2H291a56,56,0,0,0,0-112Z"
                    stroke="#5b6472"
                    stroke-miterlimit="10"
                    stroke-width="6"
                    fill="url(#b)"
                  />
                </symbol>
                <symbol id="j" viewBox="0 0 398 222" overflow="visible">
                  <use
                    width="200.26"
                    height="126.12"
                    transform="translate(198 27)"
                    xlinkHref="#k"
                  >
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-9 0; 9 0; -9 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>

                  <use width="350" height="222" xlinkHref="#l">
                    <animateTransform
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="-18 0; 18 0; -18 0"
                      dur="6s"
                      repeatCount="indefinite"
                    />
                  </use>
                </symbol>
                <symbol id="h" viewBox="0 0 398.84 246" overflow="visible">
                  <use width="172" height="172" xlinkHref="#i" />
                  <use
                    width="398"
                    height="222"
                    transform="translate(0.84 24)"
                    xlinkHref="#j"
                  />
                </symbol>
                <symbol id="m" viewBox="0 0 129 57" overflow="visible">
                  <path
                    d="M8.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,8.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#e)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x1"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="0s; x1.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y1"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="0s; y1.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M64.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,64.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#f)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x2"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin=".33s; x2.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y2"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin=".33s; y2.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>

                  <path
                    d="M120.5,56.5a8,8,0,0,1-8-8V8.5a8,8,0,0,1,16,0v40A8,8,0,0,1,120.5,56.5Z"
                    stroke="#0a5ad4"
                    stroke-miterlimit="10"
                    fill="url(#g)"
                    opacity="0"
                  >
                    <animateTransform
                      id="x3"
                      attributeName="transform"
                      additive="sum"
                      type="translate"
                      values="0 -60; 0 60"
                      begin="-.33s; x3.end+.33s"
                      dur=".67s"
                    />

                    <animate
                      id="y3"
                      attributeName="opacity"
                      values="0; 1; 0"
                      begin="-.33s; y3.end+.33s"
                      dur=".67s"
                      keyTimes="0; .25; 1"
                    />
                  </path>
                </symbol>
                <symbol id="n" viewBox="0 0 102.66 186.75">
                  <polygon
                    points="34.77 2 2.77 98 34.77 98 18.77 178 98.78 66 50.77 66 82.78 2 34.77 2"
                    stroke="#f6a823"
                    stroke-miterlimit="10"
                    stroke-width="4"
                    fill="url(#c)"
                  >
                    <animate
                      id="x1"
                      attributeName="opacity"
                      values="1; 1; 0; 1; 0; 1; 0; 1"
                      begin="0s; x1.end+.67s"
                      dur="1.33s"
                      keyTimes="0; .38; .5; .63; .75; .86; .94; 1"
                    />
                  </polygon>
                </symbol>
              </defs>
              <use
                width="398.84"
                height="246"
                transform="translate(68 121)"
                xlinkHref="#h"
              />
              <use
                width="129"
                height="57"
                transform="translate(191.5 343.5)"
                xlinkHref="#m"
              />
              <use
                width="102.66"
                height="186.74"
                transform="translate(205.23 291)"
                xlinkHref="#n"
              />
            </svg>
          );
        }
        break;

      default:
        //"Unknown code";
        setIcon(
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
            <defs>
              <linearGradient
                id="a"
                x1="183.99"
                y1="131.27"
                x2="328.01"
                y2="380.73"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0" stop-color="#6b7280" />
                <stop offset="0.45" stop-color="#6b7280" />
                <stop offset="1" stop-color="#374151" />
              </linearGradient>
            </defs>

            <circle
              cx="256"
              cy="256"
              r="144"
              stroke="#e5e7eb"
              stroke-miterlimit="10"
              stroke-width="12"
              fill="url(#a)"
            />

            <path
              d="M259.17,152.09V141.62h4.65v18H259.1l-6.25-10.41v10.41h-4.67v-18h4.67Z"
              fill="#9ca3af"
            />

            <path
              d="M362.5,257.72V261h9.76v4H357.77V247H372v3.92H362.5v3h8.34v3.84Z"
              fill="#9ca3af"
            />

            <path
              d="M256.12,373.69a8.45,8.45,0,0,1-5.39-1.56,5.8,5.8,0,0,1-2.1-4.47h4.43c.11,1.63,1.16,2.44,3.16,2.44,1.73,0,2.61-.56,2.61-1.7a1.27,1.27,0,0,0-.47-1,4.57,4.57,0,0,0-1.57-.65l-3.35-.8c-2.94-.68-4.4-2.3-4.4-4.85a4.93,4.93,0,0,1,1.69-3.86,7.5,7.5,0,0,1,5.08-1.51,8,8,0,0,1,5.05,1.43,5.2,5.2,0,0,1,2,4h-4.33c-.19-1.34-1.09-2-2.71-2a2.89,2.89,0,0,0-1.66.42,1.28,1.28,0,0,0-.61,1.11c0,.72.54,1.22,1.63,1.49l3.49.81q4.74,1.13,4.74,5.12a4.88,4.88,0,0,1-1.94,4.12A8.52,8.52,0,0,1,256.12,373.69Z"
              fill="#9ca3af"
            />

            <path
              d="M156.21,254.91l2-7.91h4.73l-5.24,18h-4.55l-2.4-11.5-2.3,11.5H143.8l-5.23-18h4.77l2,7.91.83,4.28.74-4.28L148.6,247H153l1.75,7.91.7,4.2Z"
              fill="#9ca3af"
            />

            <g>
              <polygon
                points="256 172 232 256 280 256 256 172"
                fill="#ef4444"
              />
              <polygon points="232 256 256 340 280 256 232 256" fill="#fff" />

              <animateTransform
                attributeName="transform"
                additive="sum"
                type="rotate"
                values="-6 256 256; 6 256 256; -6 256 256"
                dur="2s"
                calcMode="spline"
                keySplines=".42, 0, .58, 1; .42, 0, .58, 1"
                repeatCount="indefinite"
              />
            </g>
          </svg>
        );
        break;
    }
  }, [weatherCode]);

  return <div className="Icon">{icon}</div>;
};

export default IconMain;
