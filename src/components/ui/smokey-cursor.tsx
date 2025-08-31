// @ts-nocheck
"use client";

import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

const SmokeyCursor = ({
  className,
  cursorOuterWidth,
  cursorOuterHeight,
  cursorInnerWidth,
  cursorInnerHeight,
  color,
  outerScale,
  innerScale,
  outerStyle,
  innerStyle,
}: {
  className?: string;
  cursorOuterWidth?: number;
  cursorOuterHeight?: number;
  cursorInnerWidth?: number;
  cursorInnerHeight?: number;
  color?: string;
  outerScale?: number;
  innerScale?: number;
  outerStyle?: React.CSSProperties;
  innerStyle?: React.CSSProperties;
}) => {
  const cursorOuterRef = useRef<HTMLDivElement>(null);
  const cursorInnerRef = useRef<HTMLDivElement>(null);
  const requestRef = useRef<number>();
  const previousTimeRef = useRef<number>();
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isActiveClickable, setIsActiveClickable] = useState(false);
  let endX = useRef(0);
  let endY = useRef(0);

  const onMouseMove = React.useCallback(
    ({ clientX, clientY }: { clientX: number; clientY: number }) => {
      setCoords({ x: clientX, y: clientY });
      if (cursorInnerRef.current) {
        cursorInnerRef.current.style.top = `${clientY}px`;
        cursorInnerRef.current.style.left = `${clientX}px`;
      }
      endX.current = clientX;
      endY.current = clientY;
    },
    []
  );

  const animateOuterCursor = React.useCallback(
    (time: number) => {
      if (previousTimeRef.current !== undefined) {
        if (cursorOuterRef.current) {
          coords.x += (endX.current - coords.x) / 8;
          coords.y += (endY.current - coords.y) / 8;
          cursorOuterRef.current.style.top = `${coords.y}px`;
          cursorOuterRef.current.style.left = `${coords.x}px`;
        }
      }
      previousTimeRef.current = time;
      requestRef.current = requestAnimationFrame(animateOuterCursor);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [requestRef]
  );

  useEffect(() => {
    requestRef.current = requestAnimationFrame(animateOuterCursor);
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, [animateOuterCursor]);

  const onMouseDown = React.useCallback(() => {
    setIsActive(true);
  }, []);

  const onMouseUp = React.useCallback(() => {
    setIsActive(false);
  }, []);

  const onMouseEnter = React.useCallback(() => {
    setIsVisible(true);
  }, []);

  const onMouseLeave = React.useCallback(() => {
    setIsVisible(false);
  }, []);

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("mouseup", onMouseUp);
    document.addEventListener("mouseenter", onMouseEnter);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      document.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("mouseup", onMouseUp);
      document.removeEventListener("mouseenter", onMouseEnter);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, [onMouseMove, onMouseDown, onMouseUp, onMouseEnter, onMouseLeave]);

  useEffect(() => {
    if (isActive) {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
          innerScale || 0.7
        })`;
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
          outerScale || 3
        })`;
        cursorOuterRef.current.style.filter = "blur(10px)";
      }
    } else {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        cursorInnerRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOuterRef.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursorOuterRef.current.style.filter = "blur(0px)";
      }
    }
  }, [innerScale, outerScale, isActive]);

  useEffect(() => {
    const clickableElements = document.querySelectorAll(
      'a, input[type="submit"], input[type="image"], label[for], select, button, .link'
    );

    clickableElements.forEach((el) => {
      el.addEventListener("mouseover", () => {
        setIsActive(true);
        setIsActiveClickable(true);
      });
      el.addEventListener("click", () => {
        setIsActive(true);
        setIsActiveClickable(true);
      });
      el.addEventListener("mousedown", () => {
        setIsActive(true);
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseup", () => {
        setIsActive(true);
        setIsActiveClickable(true);
      });
      el.addEventListener("mouseout", () => {
        setIsActive(false);
        setIsActiveClickable(false);
      });
    });

    return () => {
      clickableElements.forEach((el) => {
        el.removeEventListener("mouseover", () => {
          setIsActive(true);
          setIsActiveClickable(true);
        });
        el.removeEventListener("click", () => {
          setIsActive(true);
          setIsActiveClickable(true);
        });
        el.removeEventListener("mousedown", () => {
          setIsActive(true);
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseup", () => {
          setIsActive(true);
          setIsActiveClickable(true);
        });
        el.removeEventListener("mouseout", () => {
          setIsActive(false);
          setIsActiveClickable(false);
        });
      });
    };
  }, [isActive]);

  useEffect(() => {
    if (isActiveClickable) {
      if (cursorInnerRef.current && cursorOuterRef.current) {
        cursorInnerRef.current.style.transform = `translate(-50%, -50%) scale(${
          innerScale || 0.1
        })`;
        cursorOuterRef.current.style.transform = `translate(-50%, -50%) scale(${
          outerScale || 1
        })`;
      }
    }
  }, [innerScale, outerScale, isActiveClickable]);

  const styles = {
    cursor: {
      zIndex: 999,
      position: "fixed",
      opacity: 1,
      pointerEvents: "none",
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
    cursorInner: {
      position: "fixed",
      width: cursorInnerWidth || 10,
      height: cursorInnerHeight || 10,
      pointerEvents: "none",
      backgroundColor: color ? `rgba(${color}, 1)` : "rgba(3, 169, 244, 1)",
      borderRadius: "50%",
      zIndex: 9999,
      transition: "opacity 0.15s ease-in-out, transform 0.25s ease-in-out",
    },
    cursorOuter: {
      position: "fixed",
      width: cursorOuterWidth || 40,
      height: cursorOuterHeight || 40,
      pointerEvents: "none",
      backgroundColor: color ? `rgba(${color}, 0.2)` : "rgba(3, 169, 244, 0.4)",
      borderRadius: "50%",
      zIndex: 9999,
      transition: "opacity 0.15s ease-in-out, transform 0.15s ease-in-out",
    },
  };

  return (
    <React.Fragment>
      <div
        ref={cursorOuterRef}
        style={{ ...styles.cursorOuter, ...outerStyle }}
        className={cn(className, {
          "opacity-0": !isVisible,
        })}
      />
      <div
        ref={cursorInnerRef}
        style={{ ...styles.cursorInner, ...innerStyle }}
        className={cn(className, {
          "opacity-0": !isVisible,
        })}
      />
    </React.Fragment>
  );
};

export default SmokeyCursor;
