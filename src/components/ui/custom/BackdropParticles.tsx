import Particles from "@/components/Particles"
import { getSystemTheme, useTheme } from "@/components/theme-provider"

export const BackdropParticles = () => {
  const { theme } = useTheme()
  const isDarkTheme =
    theme === "dark" || (theme === "system" && getSystemTheme() === "dark")
  const particleColor = isDarkTheme ? ["#ffffff"] : ["#000000"]

  if (!isDarkTheme) return null

  return (
    <>
      <div className="mask-image-linear absolute top-0 right-0 left-0 z-0 h-100 mask-t-from-transparent mask-t-to-black">
        <Particles
          key={theme}
          particleColors={particleColor}
          particleCount={1000}
          particleSpread={60}
          speed={0.5}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation
          pixelRatio={1}
        />
      </div>
      <div className="mask-image-linear absolute right-0 bottom-0 left-0 z-0 h-100 mask-b-from-transparent mask-b-to-black">
        <Particles
          key={theme}
          particleColors={particleColor}
          particleCount={1000}
          particleSpread={60}
          speed={0.5}
          particleBaseSize={150}
          moveParticlesOnHover={false}
          alphaParticles
          disableRotation
          pixelRatio={1}
        />
      </div>
    </>
  )
}
