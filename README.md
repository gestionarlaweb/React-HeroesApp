# Herores App

## Anotaciones
- Login: David Rabassa
- Utilizamos LocalStorage para mantener el usuario


### Dependencias instaladas:
- react-router-dom (https://reactrouter.com/)
- animate.css (https://animate.style/)
- query-string (https://www.npmjs.com/package/query-string)

Provider lo utilizaremos en la parte más alta de la aplicación (HeroesApp.jsx)

<code>
export const HeroesApp = () => {
   
  return (
    
    <AuthProvider>
   
      <AppRouter/>
     
    </AuthProvider>
    
  )
  
}
<code>