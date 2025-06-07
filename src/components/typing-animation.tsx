"use client"
import { useState, useEffect, useMemo } from "react"
import { cn } from "@/lib/utils"

const TypingAnimation = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseDuration = 1500,
  className,
}: {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  pauseDuration?: number
  className?: string
}) => {
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [displayedText, setDisplayedText] = useState("")

  const currentText = useMemo(() => texts[textIndex % texts.length], [texts, textIndex])

  useEffect(() => {
    if (isDeleting) {
      if (charIndex > 0) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex - 1))
          setCharIndex(charIndex - 1)
        }, deletingSpeed)
        return () => clearTimeout(timeoutId)
      } else {
        setIsDeleting(false)
        setTextIndex((prev) => prev + 1)
      }
    } else {
      if (charIndex < currentText.length) {
        const timeoutId = setTimeout(() => {
          setDisplayedText(currentText.substring(0, charIndex + 1))
          setCharIndex(charIndex + 1)
        }, typingSpeed)
        return () => clearTimeout(timeoutId)
      } else {
        const timeoutId = setTimeout(() => setIsDeleting(true), pauseDuration)
        return () => clearTimeout(timeoutId)
      }
    }
  }, [charIndex, isDeleting, currentText, typingSpeed, deletingSpeed, pauseDuration])

  return (
    <span className={cn("typing-cursor relative", className)}>
      {displayedText}
      <style jsx global>{`
        .typing-cursor::after {
          content: '|';
          position: absolute;
          right: -0.2em; /* Adjust as needed */
          top: 0;
          bottom: 0;
          animation: blink 1s step-end infinite;
          color: var(--primary); /* Use primary color from CSS vars */
        }
        @keyframes blink {
          from, to { opacity: 0; }
          50% { opacity: 1; }
        }
      `}</style>
    </span>
  )
}

TypingAnimation.defaultProps = {
  texts: ["Software Engineer", "Web Developer", "Problem Solver", "Full Stack"],
  typingSpeed: 100,
  deletingSpeed: 50,
  pauseDuration: 1500,
}

export default TypingAnimation
