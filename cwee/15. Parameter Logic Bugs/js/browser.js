import*as Log from './logging.js';export let isTouchDevice=('ontouchstart'in document.documentElement)||(document.ontouchstart!==undefined)||(navigator.maxTouchPoints>0)||(navigator.msMaxTouchPoints>0);window.addEventListener('touchstart',function onFirstTouch(){isTouchDevice=true;window.removeEventListener('touchstart',onFirstTouch,false);},false);export let dragThreshold=10*(window.devicePixelRatio||1);let _supportsCursorURIs=false;try{const target=document.createElement('canvas');target.style.cursor='url("data:image/x-icon;base64,AAACAAEACAgAAAIAAgA4AQAAFgAAACgAAAAIAAAAEAAAAAEAIAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AAAAAAAAAAAAAAAAAAAAAA==") 2 2, default';if(target.style.cursor.indexOf("url")===0){Log.Info("Data URI scheme cursor supported");_supportsCursorURIs=true;}else{Log.Warn("Data URI scheme cursor not supported");}}catch(exc){Log.Error("Data URI scheme cursor test exception: "+exc);}
export const supportsCursorURIs=_supportsCursorURIs;let _supportsImageMetadata=false;try{new ImageData(new Uint8ClampedArray(4),1,1);_supportsImageMetadata=true;}catch(ex){}
export const supportsImageMetadata=_supportsImageMetadata;let _hasScrollbarGutter=true;try{const container=document.createElement('div');container.style.visibility='hidden';container.style.overflow='scroll';document.body.appendChild(container);const child=document.createElement('div');container.appendChild(child);const scrollbarWidth=(container.offsetWidth-child.offsetWidth);container.parentNode.removeChild(container);_hasScrollbarGutter=scrollbarWidth!=0;}catch(exc){Log.Error("Scrollbar test exception: "+exc);}
export const hasScrollbarGutter=_hasScrollbarGutter;export function isMac(){return navigator&&!!(/mac/i).exec(navigator.platform);}
export function isWindows(){return navigator&&!!(/win/i).exec(navigator.platform);}
export function isIOS(){return navigator&&(!!(/ipad/i).exec(navigator.platform)||!!(/iphone/i).exec(navigator.platform)||!!(/ipod/i).exec(navigator.platform));}
export function isSafari(){return navigator&&(navigator.userAgent.indexOf('Safari')!==-1&&navigator.userAgent.indexOf('Chrome')===-1);}
export function isIE(){return navigator&&!!(/trident/i).exec(navigator.userAgent);}
export function isEdge(){return navigator&&!!(/edge/i).exec(navigator.userAgent);}
export function isFirefox(){return navigator&&!!(/firefox/i).exec(navigator.userAgent);}