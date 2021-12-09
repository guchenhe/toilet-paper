import React, {
    useRef,
    useState,
    useCallback,
    useLayoutEffect,
    ReactNode,
    CSSProperties,
    useMemo
} from "react";

import styled from "styled-components";

const InfiniteScrollLoopOuter = styled.div`
    position: relative;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 10%;
        background: none;
        pointer-events: none;
    }
    `;

const InfiniteScrollLoopInner = styled.div`
    overflow-y: scroll;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  `;

  function InfiniteScrollLoop({
    surroundingBackup = 2,
    outerStyle,
    innerStyle,
    children
  }: {
    surroundingBackup?: number;
    scrollPaddingPercentage?: number;
    outerStyle?: CSSProperties;
    innerStyle?: CSSProperties;
    children: ReactNode;
  }): JSX.Element {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [height, setHeight] = useState<number>(0);
  
    const surroundingBackupRange = useMemo(
      () => Array(surroundingBackup).fill(null),
      [surroundingBackup]
    );
    const backupHeight = useMemo(() => height * surroundingBackup, [
      surroundingBackup
    ]);
  
    const handleScroll = useCallback(() => {
      if (scrollRef.current) {
        const scroll = scrollRef.current.scrollTop;
        if (scroll < backupHeight || scroll >= backupHeight + height) {
          scrollRef.current.scrollTop = backupHeight + (scroll % height);
        }
      }
    }, [height]);
  
    useLayoutEffect(() => {
      if (contentRef.current) {
        setHeight(contentRef.current.offsetHeight);
        if (scrollRef.current) scrollRef.current.scrollTop = backupHeight;
      }
    }, [contentRef?.current?.offsetHeight]);
  
    return (
      <InfiniteScrollLoopOuter style={outerStyle}>
        <InfiniteScrollLoopInner
          className="infinite-scroll-loop-inner"
          ref={scrollRef}
          style={{
            height,
            padding: `${height / 4}px 0`,
            ...innerStyle
          }}
          onScroll={handleScroll}
        >
          {surroundingBackupRange.fill(null).map(() => (
            <div>{children}</div>
          ))}
          <div ref={contentRef}>{children}</div>
          {surroundingBackupRange.map(() => (
            <div>{children}</div>
          ))}
        </InfiniteScrollLoopInner>
      </InfiniteScrollLoopOuter>
    );
  }

  export default InfiniteScrollLoop;