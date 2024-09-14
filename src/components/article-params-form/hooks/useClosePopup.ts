// import { useLayoutEffect, RefObject } from 'react';

// type useClosePopupT = {
  
//   openPopup: boolean
//   onClose: () => void
//   objectRef: RefObject<HTMLElement>
// }

// export function useClosePopup({openPopup, onClose, objectRef}: useClosePopupT) {
//   if (!openPopup) {false}

//   useLayoutEffect(() => {

//     function clickWhithoutBlock(evt: MouseEvent) {
//       const {target} = evt
//       const clickWhithoutBlockModel = target instanceof Node && objectRef.current && !objectRef.current.contains(target)

//       if(clickWhithoutBlockModel) {onClose()}
//     }

//     function escape (evt:KeyboardEvent) {
//       if(evt.key === "Escape") {onClose()}
//     }
    
//     document.addEventListener('keydown', escape)
//     document.addEventListener('mousedown', clickWhithoutBlock)

//     return() => {
//       document.removeEventListener('keydown', escape)
//       document.removeEventListener('mousedown', clickWhithoutBlock)
//     }
//   })
// }