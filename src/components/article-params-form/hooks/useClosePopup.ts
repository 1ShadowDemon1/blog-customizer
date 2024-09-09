import { useState, useRef, FormEvent, useLayoutEffect, RefObject } from 'react';

type useClosePopupT = {
  onClose: () => void
  objectRef: RefObject<HTMLElement>
}

export function useClosePopup({ onClose, objectRef}: useClosePopupT) {
  useLayoutEffect(() => {

    function clickWhithoutBlock(evt: MouseEvent) {
      const {target} = evt
      const clickWhithoutBlockModel = target instanceof Node && objectRef.current && !objectRef.current.contains(target)

      if(clickWhithoutBlockModel) {onClose()}
    }

    function escape (evt:KeyboardEvent) {
      if(evt.key === "Escape") {onClose()}
    }
    
    document.addEventListener('keydown', escape)
    document.addEventListener('mousedown', clickWhithoutBlock)

    return() => {
      document.removeEventListener('keydown', escape)
      document.removeEventListener('mousedown', clickWhithoutBlock)
    }
  })
}