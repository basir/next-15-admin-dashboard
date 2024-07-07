import AppLogo from '@/components/shared/app-logo'
import LoginForm from '@/components/shared/login-form'
import { Card, CardContent, CardHeader } from '@/components/ui/card'

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full ">
      <main className="w-full max-w-md mx-auto">
        <Card>
          <CardHeader className="space-y-4 flex justify-center items-center">
            <AppLogo />
          </CardHeader>
          <CardContent className="space-y-4">
            <LoginForm />
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
