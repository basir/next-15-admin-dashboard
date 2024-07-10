import { signOut } from '@/auth'
import AppLogo from '../app-logo'
import ModeToggle from './mode-toggle'
import NavLinks from './nav-links'
import { Button } from '@/components/ui/button'
import { PowerIcon } from 'lucide-react'

export default function SideNav() {
  return (
    <div className="flex flex-col h-full p-3">
      <div>
        <AppLogo />
      </div>

      <div className="flex flex-row grow  space-x-2 md:flex-col md:space-x-0 md:space-y-2 md:mt-2">
        <NavLinks />
        <div className="h-auto w-full grow rounded-md md:block"></div>

        <div className="flex md:flex-col ">
          <ModeToggle />
          <form
            action={async () => {
              'use server'
              await signOut()
            }}
          >
            <Button
              variant="ghost"
              className="w-full justify-start text-muted-foreground"
            >
              <PowerIcon className="w-6 mr-2" />
              <div className="hidden md:block">Sign Out</div>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}
