import React, { useState, useRef, useLayoutEffect, forwardRef } from 'react'
import { motion } from 'framer-motion'

export const SmoothCaret = forwardRef(({
  label,
  icon: Icon,
  value = '',
  onChange,
  type = 'text',
  placeholder = '',
  error,
  className = '',
  ...props
}, ref) => {
  const [isFocused, setIsFocused] = useState(false)
  const [caretIndex, setCaretIndex] = useState(value.toString().length)
  const [caretX, setCaretX] = useState(0)

  const internalRef = useRef(null)
  const inputRef = ref || internalRef
  const mirrorRef = useRef(null)

  // Track cursor position inside native input (arrow keys, clicks, typing)
  const handleCaretUpdate = () => {
    if (inputRef.current) {
      const pos = inputRef.current.selectionStart ?? value.toString().length
      setCaretIndex(pos)
    }
  }

  // Calculate exact pixel width of text up to the cursor position
  useLayoutEffect(() => {
    if (mirrorRef.current) {
      setCaretX(mirrorRef.current.offsetWidth)
    }
  }, [value, caretIndex])

  const textBeforeCaret = value.toString().slice(0, caretIndex)

  return (
    <div className="flex flex-col gap-1.5 w-full relative">
      {label && (
        <label className="text-xs font-semibold text-blue-100/80 tracking-wide uppercase px-1">
          {label}
        </label>
      )}

      <div className="relative flex items-center group">
        {/* Optional Icon */}
        {Icon && (
          <div className="absolute left-4 text-[#FFBD00]/70 group-focus-within:text-[#FFBD00] transition duration-300 pointer-events-none z-10">
            <Icon className="h-5 w-5" />
          </div>
        )}

        {/* Offscreen Mirror Span used to calculate exact text width */}
        <span
          ref={mirrorRef}
          aria-hidden="true"
          className="absolute opacity-0 pointer-events-none whitespace-pre text-sm font-sans"
          style={{ visibility: 'hidden' }}
        >
          {textBeforeCaret || ''}
        </span>

        {/* Input Field */}
        <input
          ref={inputRef}
          type={type}
          value={value}
          onChange={(e) => {
            if (onChange) onChange(e)
            handleCaretUpdate()
          }}
          onKeyUp={handleCaretUpdate}
          onClick={handleCaretUpdate}
          onSelect={handleCaretUpdate}
          onFocus={() => {
            setIsFocused(true)
            handleCaretUpdate()
          }}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className={`
            w-full h-12 bg-[#031853] text-white text-sm font-sans
            border border-white/15 rounded-xl placeholder:text-blue-200/40
            focus:outline-none focus:border-[#FFBD00] focus:ring-2 focus:ring-[#FFBD00]/20
            transition duration-300 caret-transparent
            ${Icon ? 'pl-11 pr-4' : 'px-4'}
            ${className}
          `}
          {...props}
        />

        {/* Liquid Smooth Animated Caret */}
        {isFocused && (
          <motion.div
            className="absolute w-[2.5px] h-5 bg-[#FFBD00] rounded-full shadow-[0_0_10px_#FFBD00] pointer-events-none z-10"
            initial={false}
            animate={{
              x: (Icon ? 44 : 16) + caretX,
              opacity: [1, 0.2, 1]
            }}
            transition={{
              x: { type: 'spring', stiffness: 500, damping: 32 },
              opacity: { repeat: Infinity, duration: 0.85, ease: 'easeInOut' }
            }}
          />
        )}
      </div>

      {error && (
        <span className="text-xs text-rose-400 font-medium px-1">
          {error}
        </span>
      )}
    </div>
  )
})

SmoothCaret.displayName = 'SmoothCaret'