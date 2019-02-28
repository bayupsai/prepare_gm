import React from 'react'
import Placeholder from 'rn-placeholder'

export const Shimmer = ({
    isLoaded, children
})=> (
    <Placeholder.ImageContent
        lineNumber={2}
        lineSpacing={5}
        lastLineWidth="30%"
        onReady={isLoaded}
        animate="fade"
    >
        {children}
    </Placeholder.ImageContent>
)