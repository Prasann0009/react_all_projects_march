import { Suspense } from "react"

const LoadingWrapper = ({ Child, screenName }) => {
    return <>
        <Suspense fallback={`Loading ${screenName}`}>
            <Child />
        </Suspense>
    </>
}

export default LoadingWrapper;