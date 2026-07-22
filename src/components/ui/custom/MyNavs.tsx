import { useTheme } from "@/components/theme-provider"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {
  IconBrightness,
  IconBrightnessUp,
  IconDeviceDesktop,
} from "@tabler/icons-react"
import { Tabs, TabsList, TabsTrigger } from "../tabs"

const BrightnessToggle = () => {
  const { setTheme, theme } = useTheme()

  return (
    <Tabs defaultValue={theme} onValueChange={(value) => setTheme(value)}>
      <TabsList>
        <TabsTrigger value="system">
          <IconDeviceDesktop size={30} />
        </TabsTrigger>
        <TabsTrigger value="dark">
          <IconBrightness size={30} />
        </TabsTrigger>
        <TabsTrigger value="light">
          <IconBrightnessUp size={30} />
        </TabsTrigger>
      </TabsList>
    </Tabs>
  )
}

export function MyNavigation() {
  return (
    <div className="sticky top-0 z-50 flex w-full flex-row items-center justify-end bg-background/80 px-4 py-2 backdrop-blur-md">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <BrightnessToggle />
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}
