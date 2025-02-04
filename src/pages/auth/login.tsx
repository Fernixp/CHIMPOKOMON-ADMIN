import { Card } from '@/components/ui/card'
import { UserAuthForm } from './components/user-auth-form'
import { useAuth } from '@/hooks/useAuth'
import { Navigate } from 'react-router-dom'

export default function Login() {
  const { data, isError, isLoading } = useAuth()
  if (data) {
    return <Navigate to='/' />
  }
  return (
    <>
      <div className='container grid h-svh flex-col items-center justify-center bg-primary-foreground lg:max-w-none lg:px-0'>
        <div className='mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[480px] lg:p-8'>
          <div className='mb-4 flex items-center justify-center'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='none'
              stroke='currentColor'
              strokeWidth='2'
              strokeLinecap='round'
              strokeLinejoin='round'
              className='mr-2 h-6 w-6'
            >
              <path d='M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3' />
            </svg>
            <h1 className='text-xl font-medium'>Chimpokomon Admin</h1>
          </div>
          <Card className='p-6'>
            <div className='flex flex-col space-y-2 text-left'>
              <h1 className='text-center text-2xl font-semibold tracking-tight'>
                Iniciar Sesión
              </h1>
              <p className='text-center text-sm text-muted-foreground'>
                Introduce tu correo electrónico y contraseña a continuación
              </p>
            </div>
            <UserAuthForm />
            <p className='mt-4 px-8 text-center text-sm text-muted-foreground'>
              Al hacer clic en iniciar sesión, aceptas nuestros{' '}
              <a
                href='/terms'
                className='underline underline-offset-4 hover:text-primary'
              >
                Términos de Servicio
              </a>{' '}
              and{' '}
              <a
                href='/privacy'
                className='underline underline-offset-4 hover:text-primary'
              >
                Política de Privacidad
              </a>
              .
            </p>
          </Card>
        </div>
      </div>

    </>
  )
}
