const basePieces = {
    "B": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .cls-1{fill:none;}.cls-2{fill:{colour};}.cls-3,.cls-4{opacity:0.2;}.cls-4{fill:#fff;}.cls-5{fill:#1a1a1a;}</style> </defs> <title>b</title> <rect class=\"cls-1\" width=\"180\" height=\"180\"/> <path class=\"cls-2\" d=\"M87.82,16.94a12.94,12.94,0,0,0-9.5,21.73A107,107,0,0,0,63.84,52.91C53,65.83,47.3,79.41,47.3,92.18c0,20.8,9.43,33.35,16.42,39.19-2.32.21-4.52.44-6.63.71-19.24,2.45-19.21,12.78-19.18,24.74v3.63H139.48v-3.63c0-12,.06-22.29-19.17-24.74-2.11-.27-4.31-.5-6.63-.71,7-5.84,16.42-18.39,16.42-39.19,0-20.46-13.49-35.94-22.13-44.54l-1.82-1.82L104.84,48c-1.5,2.53-8.82,14.46-9.13,44.61H82c.48-45,18-62,18.18-62.16l.65-.65-.07-.91a13,13,0,0,0-12.9-12Z\"/> <path class=\"cls-3\" d=\"M115.68,57.6c22.72,55.13-27.07,71.83-27.07,71.83l25.07,1.94c-2.44,1.85,16-5.24,16-41.36A43.76,43.76,0,0,0,115.68,57.6Z\"/> <path class=\"cls-4\" d=\"M81.45,38.77c-2.67-1.22-28.61,20.58-32.9,42.92-4,20.81,3.2,26.56,2.77,26.39,0-.13,2.78-45.8,32.83-68.11C84.15,40,83,39.47,81.45,38.77Z\"/> <path class=\"cls-4\" d=\"M89.65,18.84c-4.34.39-11.78,6.67-12.4,15.35,0,0-6-5.57.06-12.49C82.05,16.24,89.65,18.84,89.65,18.84Z\"/> <path class=\"cls-4\" d=\"M88.7,138.41c43.07,0,47.54,4.75,47.54,4.75h.59c-1.93-10.18-24.5-11.3-24.5-11.3H65.23s-23.36.81-24.66,11.3h.59S45.63,138.41,88.7,138.41Z\"/> <path class=\"cls-3\" d=\"M86.73,57c1.84-5.06,14.08-29,14.08-29l-5.54-9.19-2.87.06c9.19,11.26-18,37-18,56.43,0,5.69,1.39,17.22,5.53,19.31C80,94.65,82.91,67.54,86.73,57Z\"/> <path class=\"cls-5\" d=\"M87.82,18.94A10.94,10.94,0,0,1,98.73,29.07S80,46.81,80,94.65H97.7c0-29.93,7-42.36,8.86-45.59,9.46,9.42,21.54,24,21.54,43.12,0,26.23-15.31,38.41-20.33,40.76,4.33.27,8.43.63,12.29,1.12,18.25,2.33,17.42,11.29,17.42,24.39H39.92c0-13.1-.83-22.06,17.42-24.39,3.85-.49,8-.85,12.29-1.12-5-2.35-20.33-14.53-20.33-40.76,0-30.08,32.15-53.41,32.15-53.41a10.94,10.94,0,0,1,6.37-19.83m0-4A14.93,14.93,0,0,0,75.54,38.37,109.36,109.36,0,0,0,62.31,51.63c-11.13,13.28-17,27.3-17,40.55,0,18.39,7.2,30.63,13.88,37.63l-2.35.29c-21,2.67-20.95,14.35-20.92,26.73v5.62H141.48v-5.62c0-12.38.07-24.06-20.92-26.73-.77-.1-1.55-.2-2.34-.28,6.68-7,13.88-19.25,13.88-37.64,0-15.71-7.43-30.74-22.72-46l-3.65-3.63L103.12,47c-5.76,9.76-9,24.78-9.38,43.63H84c.5-21.46,5-36,8.75-44.55,4.32-9.79,8.7-14.09,8.74-14.13l1.35-1.3-.12-1.88a15,15,0,0,0-14.9-13.85Z\"/> <path class=\"cls-5\" d=\"M88.7,132.41c9,0,17.15.28,24.57.93l1.91-3.84c-7.68-.73-16.4-1.09-26.48-1.09h0c-10.19,0-19,.36-26.73,1.11l1.18,3.91C70.83,132.72,79.34,132.41,88.7,132.41Z\"/> </svg>",
    "K": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .cls-1{fill:none;}.cls-2{fill:{colour};}.cls-3,.cls-4{fill:#fff;}.cls-3{opacity:0.3;}.cls-4,.cls-5{opacity:0.2;}.cls-6{fill:#1a1a1a;}</style> </defs> <title>k</title> <rect class=\"cls-1\" width=\"180\" height=\"180\"/> <path class=\"cls-2\" d=\"M149.17,61.56a31.76,31.76,0,0,0-23-9.27c-11.63,0-19.33,3.41-23.56,6.06L99.67,45.52h11.68v-18h-12v-12h-18v12h-12v18H81L78.1,58.35c-4.22-2.65-11.93-6.06-23.55-6.06a31.75,31.75,0,0,0-23,9.27c-5.87,6-9.1,14.48-9.1,23.86,0,13.61,8.68,22.27,17.08,30.65,5.17,5.15,10.49,10.46,14,17-14,3.54-13.92,13-13.9,23.79v3.6H141.13v-3.6c0-10.82.05-20.25-13.89-23.79,3.45-6.53,8.78-11.84,13.94-17,8.4-8.38,17.09-17,17.09-30.65C158.27,76,155,67.57,149.17,61.56ZM128.51,89c-.92,6.43-10.42,12.08-16.78,20.2-3.2-.21-5.17-.38-7.87-.49V83.74s8-5.71,14.43-5.71C118.29,78,130,78.44,128.51,89ZM62.49,78c6.44,0,14.43,5.71,14.43,5.71v24.92c-2.71.11-4.67.28-7.87.49C62.68,101,53.19,95.38,52.27,89,50.77,78.44,62.49,78,62.49,78Z\"/> <polygon class=\"cls-3\" points=\"111.35 31.52 95.39 31.52 98.39 28.29 111.35 28.29 111.35 31.52\"/> <polygon class=\"cls-3\" points=\"95.35 19.52 85.35 19.52 85.35 31.52 73.35 31.52 73.35 41.52 69.35 45.52 69.35 27.52 81.35 27.52 81.35 15.53 99.35 15.53 95.35 19.52\"/> <path class=\"cls-4\" d=\"M90.35,138.41c43.07,0,47.54,4.75,47.54,4.75h.59c-1.94-10.18-24.5-11.3-24.5-11.3H66.88s-23.36.81-24.66,11.3h.59S47.28,138.41,90.35,138.41Z\"/> <path class=\"cls-4\" d=\"M64.07,54.82S42.88,47.58,29.8,63.54c-18.12,22.1,2.35,43.09,2.35,43.09C18.85,82.28,33.32,53.46,64.07,54.82Z\"/> <path class=\"cls-5\" d=\"M144.56,101.34l-29.69,29.78,12.37,1.94a96.69,96.69,0,0,1,15.24-18.69c9.87-9.5,15.77-15.91,15.77-31.56,0-11.49-5.79-16.61-10.95-20.77C147.3,62,159.81,86.09,144.56,101.34Z\"/> <path class=\"cls-6\" d=\"M62.41,79.79a19.36,19.36,0,0,1,11.94,4.63v22.44l-4.95.28C66.81,104.05,64.29,101.4,62,99c-4.8-5-8.27-8.69-8.27-12,0-5.33,4.47-7.23,8.65-7.23m0-4c-7,0-12.65,4.06-12.65,11.23s8.81,13,17.84,24.22c0,0,8.3-.47,10.75-.57V82.61a23.74,23.74,0,0,0-15.94-6.82Z\"/> <path class=\"cls-6\" d=\"M90.35,132.41a252.6,252.6,0,0,1,31.36,1.65,43.48,43.48,0,0,1,5.16,1l.67-4a46.89,46.89,0,0,0-5.33-1,254,254,0,0,0-31.86-1.69h0a254.29,254.29,0,0,0-31.87,1.69,47.37,47.37,0,0,0-5.58,1l.83,3.91a42.45,42.45,0,0,1,5.26-1A252.6,252.6,0,0,1,90.35,132.41Z\"/> <path class=\"cls-6\" d=\"M97.35,17.52v12h12v14h-12l3.75,16.63a56,56,0,0,1,25.05-5.86c17.4,0,30.12,12.73,30.12,31.13,0,21.75-23.46,29.87-31.94,49.05,15.53,2.84,14.8,11.54,14.8,24H41.57c0-12.44-.74-21.14,14.8-24-8.49-19.18-31.94-27.3-31.94-49,0-18.4,12.72-31.13,30.12-31.13a58.23,58.23,0,0,1,25,5.58l3.75-16.35h-12v-14h12v-12h14m4-4h-22v12h-12v22h11L76.77,54.3a64.5,64.5,0,0,0-22.22-4c-19.77,0-34.12,14.78-34.12,35.13,0,14.44,9,23.4,17.67,32.06,4.47,4.46,9.06,9,12.36,14.37-5.23,1.78-8.67,4.62-10.67,8.74-2.26,4.63-2.24,10-2.23,16.26v5.6H143.13v-5.6c0-10.57.06-20.62-12.89-25,3.29-5.33,7.89-9.91,12.36-14.37,8.68-8.66,17.67-17.62,17.67-32.06,0-20.35-14.35-35.13-34.12-35.13a62.21,62.21,0,0,0-22.23,4.2l-1.57-7h11v-22h-12v-12Z\"/> <path class=\"cls-6\" d=\"M118.28,79.79c4.19,0,8.65,1.9,8.65,7.23,0,3.32-3.46,7-8.26,12-2.27,2.37-4.79,5-7.38,8.11l-4.94-.28V84.42a19.31,19.31,0,0,1,11.93-4.63m0-4a23.72,23.72,0,0,0-15.93,6.82v28.06c2.45.1,10.74.57,10.74.57,9-11.2,17.84-16.92,17.84-24.22s-5.62-11.23-12.65-11.23Z\"/> </svg>",
    "N": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .clsN-1{fill:none;}.clsN-2{fill:{colour};}.clsN-3,.clsN-5{fill:#fff;}.clsN-3,.clsN-4{opacity:0.2;}.clsN-6{fill:#1a1a1a;}</style> </defs> <title>n</title> <rect class=\"clsN-1\" width=\"180\" height=\"180\"/> <path class=\"clsN-2\" d=\"M73.07,20.25h-.83c-2.72,0-5.43,2.48-6.16,5.64l-1.45,6.88c-1.32,3.14-3.54,5.36-7.13,8.32a19.11,19.11,0,0,0-6.06,8.69l-.17.42c-.9,2.29-1.56,4.3-2.16,6.07A43.59,43.59,0,0,1,43,69.12L31.37,85.5c-3.62,4.51-3.22,10.76.92,14.27s14.4,6.3,17.9,6.3a3.37,3.37,0,0,0,2.42-.78,24.78,24.78,0,0,0,3.7-4.85c2.31-3.6,4-6.2,9.93-6.23,8.73,0,16.28-7.95,19.91-11.76l0,0,0,0,2.18-2.52c1.46,2.33,3.14,6.13,2,10.11a16.46,16.46,0,0,1-2.3,4.79,40.35,40.35,0,0,1-8,8l-.19.16c-7.52,6.08-20,16.15-22.08,30.28-13.33,3.64-13.3,12.93-13.27,23.62v3.61H146.1v-3.6c0-10.69.06-20-13.28-23.63.41-1.59,1-3.64,1.64-5.9,2.63-9.24,6.24-21.9,6.24-30.2,0-19.56-6.19-36-17.89-47.47A59,59,0,0,0,86.05,33.21L73.66,20.84l-.59-.59Z\"/> <path class=\"clsN-3\" d=\"M95.71,138.41c43.07,0,47.54,4.75,47.54,4.75h.59c-1.93-10.18-24.49-11.3-24.49-11.3H72.24s-23.36.81-24.66,11.3h.59S52.64,138.41,95.71,138.41Z\"/> <g class=\"clsN-4\"> <path class=\"clsN-5\" d=\"M69.64,40.21c8.06-5,2.6-18,2.6-18a5,5,0,0,0-5,4l-1.46,6.92c-1.41,3.38-3.71,5.7-7.46,8.8a18,18,0,0,0-5.76,8.26l-.16.42c-.89,2.26-1.52,4.17-2.14,6a44.74,44.74,0,0,1-6.22,13.1L32.42,86.14c-.15.15-.3.31-.44.47a6,6,0,0,0-1,7.74S50,70.9,52.49,67.61C57,61.63,54.16,49.84,69.64,40.21Z\"/> </g> <path class=\"clsN-6\" d=\"M70.78,49.77c-5.23,2.14-6.64,11.09-6.64,11.09,5.08-4.42,7.53.65,12.59-3.36C81,54.16,75.9,47.67,70.78,49.77Z\"/> <path class=\"clsN-4\" d=\"M94.87,66.07c-1.82,3.49-6.33,10.57-6.33,10.57s-.47,1.43-1.05,3.46c0,0,2.08-.23,2.47,6.39.1,1.72.93,7.76,2,5.18C95,84.23,97.14,75.23,97.1,72.18S96.68,62.58,94.87,66.07Z\"/> <path class=\"clsN-4\" d=\"M85.17,35.15S126,40.22,126,79.26c0,26.14-17.38,33.44-22,51,0,0,19.33.15,27.88,4.19,0,0,9.18-24.84,9.18-39.56C141.05,79.83,129.61,34,85.17,35.15Z\"/> <path class=\"clsN-4\" d=\"M70.12,92.2c-9.11-4.47-11.41-9.79-14.91.72-3.4,10.18-8.55,11.93-5.09,13s7.74-10.45,10.77-10.64S73.53,93.87,70.12,92.2Z\"/> <path class=\"clsN-6\" d=\"M72.24,22.25l12.93,12.9c25.26,1.71,53.53,20.1,53.53,62,0,11.12-7,31.49-8.29,37.57,14.39,3.05,13.69,11.63,13.69,23.76H46.54c0-12-.68-20.47,13.08-23.63C61,120.66,74,110.31,81.34,104.33a41.62,41.62,0,0,0,8.41-8.44,18.34,18.34,0,0,0,2.57-5.37c1.82-6.37-2.3-12.09-3.78-13.88l-3.83,4.43C80.85,85.12,74,92.18,66.23,92.21c-10.05.05-10.29,7.09-15,11.65a1.69,1.69,0,0,1-1,.21c-3.27,0-12.92-2.68-16.61-5.82-3.22-2.74-3.64-7.82-.62-11.54l11.7-16.46c5.23-7.6,5.46-11.65,8.48-19.32a17.36,17.36,0,0,1,5.64-8.3c3.81-3.15,6.28-5.61,7.77-9.27l1.48-7c.5-2.16,2.39-4.09,4.21-4.09m1.66-4H72.24c-3.68,0-7.16,3.09-8.11,7.19v.08l-1.39,6.64c-1.18,2.68-3.14,4.62-6.49,7.39a20.82,20.82,0,0,0-6.66,9.51l-.16.41c-.92,2.34-1.6,4.37-2.19,6.17A41.6,41.6,0,0,1,41.38,68L29.77,84.3C25.52,89.65,26,97.09,31,101.3c4.6,3.91,15.36,6.77,19.2,6.77A5.36,5.36,0,0,0,54,106.73a27.63,27.63,0,0,0,4-5.21c2.18-3.41,3.38-5.28,8.25-5.31,9.58,0,17.53-8.37,21.35-12.38l.07-.07.06-.07L88,83.4a9.35,9.35,0,0,1,.49,6,14.14,14.14,0,0,1-2,4.21,38.38,38.38,0,0,1-7.63,7.59l-.19.16c-7.53,6.1-19.83,16.06-22.58,30.27-5.78,1.84-9.58,5-11.57,9.54s-2,9.68-1.94,15.66v5.6H148.1v-5.6c0-6.07,0-11.32-2-15.88-2-4.32-5.44-7.28-10.8-9.1.33-1.2.71-2.56,1.13-4,2.66-9.36,6.31-22.17,6.31-30.75C142.7,55,115,33.84,87,31.28L75.07,19.42,73.9,18.25Z\"/> <path class=\"clsN-6\" d=\"M95.71,132.41a252.5,252.5,0,0,1,31.36,1.65,43.67,43.67,0,0,1,5.17,1l.66-4a46.29,46.29,0,0,0-5.32-1,254.17,254.17,0,0,0-31.87-1.69h0a254,254,0,0,0-31.86,1.69,47,47,0,0,0-5.58,1l.82,3.91a42.8,42.8,0,0,1,5.26-1A252.6,252.6,0,0,1,95.71,132.41Z\"/> </svg>",
    "P": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .cls-1{fill:none;}.cls-2{fill:{colour};}.cls-3,.cls-4{opacity:0.2;}.cls-4{fill:#fff;}.cls-5{fill:#1a1a1a;}</style> </defs> <title>p</title> <rect class=\"cls-1\" width=\"180\" height=\"180\"/> <path class=\"cls-2\" d=\"M89.94,41.92a23,23,0,0,0-14.24,41L63.79,90.75l-.9.59v1.08a12.17,12.17,0,0,0,2,6.93l.39.72.57,1.05H77.13c-.49,5.61-2,19.66-20,31-8,5-12.66,14.66-12.66,26.36v2h91v-2c0-11.7-4.62-21.31-12.67-26.36-17.94-11.28-19.5-25.36-20-31H114l.57-1.05.39-.72a12.17,12.17,0,0,0,2-6.93V91.34l-.9-.59-11.91-7.86a23,23,0,0,0-14.24-41Z\"/> <path class=\"cls-3\" d=\"M115.16,127.11c-10.76-7.52-11.49-22.19-12.18-25.54l10.85,0,3.87-9s-11.41-9.29-17-9.46l2.75,0s8.21-6.84,8.92-12.88C115.25,46.21,96.3,43,96.3,43c8.58,4.29,15.07,18.92,7.34,29.82C98.12,80.61,87.34,83,87.34,83h13.3c.16.14,9.38,10-.1,16.16H65.12l.45,2.5,11.45,0S90.26,115,101.23,125.37c10.53,9.93,26.51,11.31,26.51,11.31S120.63,130.94,115.16,127.11Z\"/> <path class=\"cls-4\" d=\"M75,92.42C75.6,88,79.14,83,79.24,83L62.47,92.42Z\"/> <path class=\"cls-4\" d=\"M92.05,44c-8,.72-20.82,10.3-22.32,30,0,0-8.08-11.62,3.06-24.45C81.56,39.5,92.05,44,92.05,44Z\"/> <path class=\"cls-4\" d=\"M46.45,158.45C50.8,144.15,57,142.3,68.3,134c7.54-5.48,8.55-22,8.55-22,.18-.86-3.84,6.67-8.12,10.4-1.41,1.22-11,7.84-15.07,12.17C46.55,142.07,45.61,161.19,46.45,158.45Z\"/> <path class=\"cls-5\" d=\"M89.94,43.92a21,21,0,0,1,11.79,38.29l-1.09.75L115,92.42c0,3.06-.72,4-2.15,6.7h-12.3l.1,1c.49,4.57.8,20.93,21.06,33.66,7.45,4.68,11.73,13.68,11.73,24.67h-87c0-11,4.27-20,11.73-24.67,20.3-12.76,20.58-29.1,21.06-33.66l.1-1H67c-1.42-2.65-2.15-3.64-2.15-6.7L79.24,83l-1.09-.74a21,21,0,0,1,11.79-38.3m0-4A25,25,0,0,0,72.42,82.66l-9.73,6.42-1.8,1.19v2.15a14.13,14.13,0,0,0,2.24,7.89l.39.71,1.13,2.1H74.88c-2.49,17-14.27,24.41-18.83,27.27-8.65,5.43-13.6,15.66-13.6,28.06v4h95v-4c0-12.4-5-22.63-13.6-28.06-15.11-9.49-18-21-18.86-27.27h10.26l1.13-2.1.39-.71A14.13,14.13,0,0,0,119,92.42V90.27l-1.8-1.19-9.73-6.42A25,25,0,0,0,89.94,39.92Z\"/> </svg>",
    "Q": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .cls-1{fill:none;}.cls-2{fill:{colour};}.cls-3,.cls-4{opacity:0.2;}.cls-4{fill:#fff;}.cls-5{fill:#1a1a1a;}</style> </defs> <title>q</title> <rect class=\"cls-1\" width=\"180\" height=\"180\"/> <path class=\"cls-2\" d=\"M111.12,20.62A14.63,14.63,0,0,0,96.51,35.23a13.92,13.92,0,0,0,5.41,10.93L90.54,79,79.15,46.16a13.92,13.92,0,0,0,5.41-10.93A14.63,14.63,0,0,0,70,20.62,14.46,14.46,0,0,0,55.34,35.23a13.67,13.67,0,0,0,9.22,13.16L62.73,87.11,47,70.32a13.77,13.77,0,0,0,2.25-6.95A14.22,14.22,0,0,0,35.45,49.43,13.9,13.9,0,0,0,21.51,63.37c0,6.6,5.45,12.86,11.57,13.69l23.06,55.46c-16.44,3.06-16.42,12.95-16.39,24.31v3.62H141.32v-3.61c0-11.37.06-21.26-16.39-24.32L148,77.06c6.13-.83,11.58-7.09,11.58-13.69a14,14,0,0,0-13.95-13.94,14.22,14.22,0,0,0-13.78,13.94,13.64,13.64,0,0,0,2.26,6.95L118.35,87.11l-1.83-38.73a13.88,13.88,0,0,0,9.21-13.15,14.45,14.45,0,0,0-14.61-14.61Z\"/> <path class=\"cls-3\" d=\"M40.24,52.34c5.31,6.79-3.85,12.82,1.26,18.34L64.72,92.17l-17.4-23s2.2-5.64.81-9.8C45,50,40.24,52.34,40.24,52.34Z\"/> <path class=\"cls-4\" d=\"M38.42,51.33c-4.81.45-12.22,5.85-13.92,16.84-.13.79-5.49-5,1.6-13.2C31.69,48.47,38.42,51.33,38.42,51.33Z\"/> <path class=\"cls-4\" d=\"M148.84,51.33c-4.8.45-12.22,5.85-13.92,16.84-.12.79-5.48-5,1.61-13.2C142.11,48.47,148.84,51.33,148.84,51.33Z\"/> <path class=\"cls-4\" d=\"M72.54,22.75c-5.14.53-13.22,6.79-14,19.44,0,0-5.29-7.36,1.72-15.68C65.78,20,72.54,22.75,72.54,22.75Z\"/> <path class=\"cls-4\" d=\"M113.44,22.75c-5.14.53-13.22,6.79-14,19.44,0,0-5.28-7.36,1.72-15.68C106.69,20,113.44,22.75,113.44,22.75Z\"/> <path class=\"cls-4\" d=\"M91.12,138.41c43.07,0,47.54,4.75,47.54,4.75h.59c-1.93-10.18-24.5-11.3-24.5-11.3H67.65s-23.36.81-24.66,11.3h.59S48.05,138.41,91.12,138.41Z\"/> <path class=\"cls-3\" d=\"M116.2,112.83c-15.74,17-31.38,16.5-31.38,16.5l39.74,3.1,23.31-55.11s5.42-.62,9.46-7.34c6-9.94-5.53-17.09-5.53-17.09,3.61,4.19,3.08,11.15,0,14s-7.86,3.31-9.69,7.48C142.15,74.36,131.22,96.58,116.2,112.83Z\"/> <path class=\"cls-3\" d=\"M116.83,23.36c7.64,10.53-6.88,14-6,23.56l5.75,45,0-43s10.08-6.11,9.18-13.42C124.37,24,116.83,23.36,116.83,23.36Z\"/> <path class=\"cls-3\" d=\"M72.69,45.45,90.54,85.1,79.16,46.49s4.35-6.34,4.35-11.81c0-10.06-8.45-12-8.45-12C83.19,33.57,69.51,35.91,72.69,45.45Z\"/> <path class=\"cls-5\" d=\"M145.63,47.43c-8.41,0-15.79,7.45-15.79,15.94A14.77,14.77,0,0,0,131.62,70l-11.5,12.26-1.54-32.58a16,16,0,0,0,9.15-14.48,16.43,16.43,0,0,0-16.61-16.61A16.63,16.63,0,0,0,94.51,35.23,16,16,0,0,0,99.58,46.8l-9,26.09L81.49,46.8a16,16,0,0,0,5.07-11.57A16.63,16.63,0,0,0,70,18.62,16.44,16.44,0,0,0,53.34,35.23,15.75,15.75,0,0,0,62.5,49.74L61,82.29,49.45,70a14.71,14.71,0,0,0,1.78-6.66c0-8.49-7.37-15.94-15.78-15.94A16,16,0,0,0,19.51,63.37,16.34,16.34,0,0,0,31.65,78.84l21.72,52.23c-15.68,3.87-15.65,14.54-15.62,25.77v5.61H143.32v-5.61c0-11.24.06-21.9-15.62-25.77l21.72-52.23a16.34,16.34,0,0,0,12.15-15.47A16,16,0,0,0,145.63,47.43Zm-6.31,111H41.76c0-13-.82-22,17.2-24.35l.58-.09a257.11,257.11,0,0,1,31.58-1.6,243.81,243.81,0,0,1,31,1.69C140.13,136.46,139.32,145.4,139.32,158.45Zm7.3-83.29-22.89,55-.75-.1a254,254,0,0,0-31.86-1.69A259,259,0,0,0,59,130c-.57.07-1.12.15-1.66.24L34.46,75.16c-5.48,0-10.95-5.65-10.95-11.79A11.89,11.89,0,0,1,35.45,51.43,12.2,12.2,0,0,1,47.23,63.37c0,3.72-2.82,7.14-2.82,7.14L64.5,91.92l2.14-45.07a11.61,11.61,0,0,1-9.3-11.62A12.41,12.41,0,0,1,70,22.62a12.6,12.6,0,0,1,12.6,12.61,11.85,11.85,0,0,1-5.8,10.12L90.54,85.1l13.78-39.75a11.86,11.86,0,0,1-5.81-10.12,12.61,12.61,0,0,1,12.61-12.61,12.4,12.4,0,0,1,12.61,12.61,11.72,11.72,0,0,1-9.29,11.62l2.14,45.07,20.08-21.41s-2.82-3.4-2.82-7.14a12.2,12.2,0,0,1,11.79-11.94,11.89,11.89,0,0,1,11.94,11.94C157.57,69.51,152.1,75.16,146.62,75.16Z\"/> </svg>",
    "R": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 180 180\" style=\"transform: rotate({rotation}deg);\" xml:space=\"preserve\"> <defs> <style> .clsR-1{fill:{colour};}.clsR-2,.clsR-3{fill:#fff;}.clsR-2,.clsR-4{opacity:0.2;}.clsR-3{opacity:0.3;}.clsR-5{fill:#1a1a1a;}.clsR-6{fill:none;}</style> </defs> <title>r</title> <path class=\"clsR-1\" d=\"M90,30.87a92.56,92.56,0,0,0-10.56.85l-1.45.2-.25,1.44L74.87,50.28H70L64.84,35.53l-.47-1.34H63a31.07,31.07,0,0,0-14.88,3.72l-1.15.62.1,1.31L48.68,60v.1c1,7.21,4.68,11.7,11.93,14.38-1,8.58-5.74,48.89-6.95,58.44-14.51,3.42-14.49,12.94-14.46,23.92v3.62H140.78v-3.62c0-11,.06-20.5-14.46-23.92-1.2-9.55-5.94-49.86-6.95-58.44,7.26-2.68,11-7.17,11.94-14.38V60L133,39.84l.11-1.31-1.15-.62A31.08,31.08,0,0,0,117,34.19h-1.41l-.47,1.34L110,50.28h-4.85l-2.87-16.92L102,31.92l-1.45-.2A92.56,92.56,0,0,0,90,30.87Z\"/> <path class=\"clsR-2\" d=\"M90,138.41c43.07,0,47.54,4.75,47.54,4.75h.59c-1.93-10.18-24.49-11.3-24.49-11.3H66.53s-23.36.81-24.66,11.3h.59S46.93,138.41,90,138.41Z\"/> <path class=\"clsR-3\" d=\"M60,34.43c-10.75,7.36-6.7,34.9-6.7,34.9-6.85-2.21-6.7-31.73-6.7-31.73S63.08,32.34,60,34.43Z\"/> <path class=\"clsR-3\" d=\"M93.18,32.26c-12,2.19-16.62,19.64-16.62,19.64.8-13,3.52-20.54,3.52-20.54S96.59,31.63,93.18,32.26Z\"/> <path class=\"clsR-3\" d=\"M125.15,35.88c-7.77,4.11-13.75,16-13.75,16-.44-4.24,5.47-19,5.47-19S128.05,34.35,125.15,35.88Z\"/> <path class=\"clsR-4\" d=\"M123.87,72.17c10.62.24,8.73-32.78,8.73-32.78l-6.36-4c-1.76,10.55-4,26.9-9.16,31.43-4.71,4.15-7.59,5.12-8.31,5.3-1.37-.17-2.83-.33-4.43-.47-14.5-1.32-35.6,2.82-35.6,2.82s21.37-1.3,32.3,12.42,12,43.37,12,43.37c7.16,1.33,12.49,2.8,12.49,2.8l-6.73-57.46S122.46,72.14,123.87,72.17Z\"/> <path class=\"clsR-5\" d=\"M140.65,140.76c-2.2-4.67-6.21-7.71-12.51-9.45-1.35-10.88-5.36-45-6.6-55.54,7.06-3,10.73-7.87,11.75-15.41v-.21L135,40l.21-2.61-2.3-1.24a33.05,33.05,0,0,0-15.84-4h-3.19l-.71,3.12-2.93,13H105l-1.74-15-.35-3-3-.49A72.25,72.25,0,0,0,90,28.87a72.06,72.06,0,0,0-9.94.88l-3,.49-.35,3L75,48.28h-5.2l-2.93-13-.71-3.12H63a33,33,0,0,0-15.83,4l-2.3,1.24L45,40l1.66,20.15v.21c1,7.54,4.68,12.39,11.75,15.41-1.24,10.54-5.26,44.66-6.6,55.54-6.31,1.74-10.32,4.78-12.51,9.45s-2.15,9.91-2.14,16.07v5.62H142.78v-5.62C142.8,150.68,142.81,145.36,140.65,140.76Zm-90-80.94L49,39.67A28.93,28.93,0,0,1,63,36.19L66.6,52.28h12L80.71,33.7A67.28,67.28,0,0,1,90,32.87a67.28,67.28,0,0,1,9.29.83l2.15,18.58h12L117,36.19A29,29,0,0,1,131,39.67l-1.66,20.15c-.77,5.74-3.29,10-10.52,12.73A234.34,234.34,0,0,0,90,70a234.67,234.67,0,0,0-28.8,2.54C54,69.84,51.45,65.56,50.67,59.82Zm11.74,16.6A231,231,0,0,1,90,74a230.47,230.47,0,0,1,27.59,2.41c1.21,10.31,4.93,41.88,6.41,54-.69-.12-1.4-.23-2.14-.32A254,254,0,0,0,90,128.41a254,254,0,0,0-31.86,1.69c-.75.09-1.45.2-2.14.32C57.48,118.3,61.2,86.73,62.41,76.42Zm76.37,82H41.22c0-11.85-.67-20.31,12.69-23.53l.34-.09,1-.21c1-.22,2.16-.4,3.37-.56A252.6,252.6,0,0,1,90,132.41a252.6,252.6,0,0,1,31.36,1.65c1.18.15,2.28.34,3.31.54l1.1.24.23,0C139.45,138.1,138.78,146.58,138.78,158.45Z\"/> <rect class=\"clsR-6\" width=\"180\" height=\"180\"/> </svg>"
}

const playerColours = {
    0: "#BF3B43",
    1: "#4185BF",
    2: "#C09526",
    3: "#4E9161",
    4: "#565352",
    5: "#8a3bbf",
}

export function getPieceUrl(piece) {
    let pieceBase = basePieces[piece.charAt(0)];
    let player = Number(piece.charAt(1));
    pieceBase = pieceBase.replace("{rotation}", player * 60 + 30);
    pieceBase = pieceBase.replace("{colour}", playerColours[player]);

    return "data:image/svg+xml;base64," + btoa(pieceBase);
}

export function getMoves(qOfMovingPiece, rOfMovingPiece, board) {
    const movingPiece = getPiece(qOfMovingPiece, rOfMovingPiece, board);
    if (movingPiece) {
        const typeOfMovingPiece = movingPiece.p.charAt(0);
        const ownerOfMovingPiece = movingPiece.p.charAt(1);

        let QRBmovingDirections = [];
        let possibleMoves = [];

        // QUEEN, ROOK, AND BISHOP MOVES
        switch(typeOfMovingPiece) {
            case "Q": // fallthrough
            case "B": // fallthrough
                QRBmovingDirections = [[-1, 0], [1, -1], [0, 1]];
                if (typeOfMovingPiece === "B") {
                    break;
                }
            case "R":
                QRBmovingDirections = QRBmovingDirections.concat([[0, -1], [-1, 1], [1, 0]]);
                break;
        }
        if (typeOfMovingPiece === "Q" || typeOfMovingPiece === "R" || typeOfMovingPiece === "B") {
            // For each direction the piece can move in
            for (const direction of QRBmovingDirections) {
                let i = 1;
                while (true) {
                    // Move one hex in that direction
                    const q = qOfMovingPiece + direction[0] * i;
                    const r = rOfMovingPiece + direction[1] * i;

                    // Find the piece there
                    const piece = getPiece(q, r, board);

                    // If it doesn't exist or is off the board, move to the next direction
                    if (piece === null || piece === undefined) break;

                    // If no piece, valid move
                    if (piece === "") {
                        possibleMoves.push([q, r]);
                    } else if (piece.p.charAt(1) !== ownerOfMovingPiece) {
                        // If there is a piece, and it's not yours, make it a valid move and skip to the next direction
                        possibleMoves.push([q, r]);
                        break;
                    } else if (piece.p.charAt(1) === ownerOfMovingPiece) {
                        // If it's yours, skip to the next direction
                        break;
                    }
                    i++;
                }
            }
        }

        // PAWN MOVES
        if (typeOfMovingPiece === "P") {
            possibleMoves.push(...pawnMoves(qOfMovingPiece, rOfMovingPiece, Number(ownerOfMovingPiece)));
        }

        // HORSEY + KING MOVES
        let moves = [];
        if (typeOfMovingPiece === "K") {
            moves = [[-1, 0], [-1, 1], [0, 1], [1, 0], [0, -1], [1, -1]];
        } else if (typeOfMovingPiece === "N") {
            moves = [[1, -3], [2, -3], [3, -2], [3, -1], [2, 1], [1, 2], [-1, 3], [-2, 3], [-3, 2], [-3, 1], [-2, -1], [-1, -2]];
        }
        // loop through possible moves
        for (const move of moves) {
            const piece = getPiece(qOfMovingPiece + move[0], rOfMovingPiece + move[1], board)
            if (piece && piece.p.charAt(1) !== ownerOfMovingPiece) {
                possibleMoves.push([qOfMovingPiece + move[0], rOfMovingPiece + move[1]]);
            } else if (piece === "") {
                possibleMoves.push([qOfMovingPiece + move[0], rOfMovingPiece + move[1]]);
            }
        }

        return possibleMoves;
    }
}

function pawnMoves(q, r, owner) {
    let vec1 = [1, -1, 0];
    let vec2 = [0, -1, 1];
    let vec3 = [1, -2, 1];

    for (let i = owner; i > 0; i--) {
        vec1 = [-vec1[1], -vec1[2], -vec1[0]];
        vec2 = [-vec2[1], -vec2[2], -vec2[0]];
    }
    const hex1 = [q + vec1[0], r + vec1[1]];
    const hex2 = [q + vec2[0], r + vec2[1]];

    return [hex1, hex2];
}

export function getPiece(q, r, board) {
    return board.find(hex => hex.q === q && hex.r === r);
}