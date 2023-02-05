export const getRatio= (width: number, height: number) => width/height;

export const getWidth= (height: number, ratio: number) => height*ratio

export const getHeight= (width: number, ratio: number) => width/ratio