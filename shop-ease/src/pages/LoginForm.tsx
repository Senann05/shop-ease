import { useState } from 'react'
import { useLoginMutation } from '../features/auth/authApi'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { AppDispatch } from '../app/store'
import '../styles/style.css' // Stil üçün

const LoginForm = () => {
  // 🔐 Local state: input-lardan gələn məlumatı saxlayırıq
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  // 🔁 API-yə login sorğusu atmaq üçün hook
  const [login, { isLoading, error }] = useLoginMutation()

  // 🧠 Redux dispatch funksiyası
  const dispatch = useDispatch<AppDispatch>()

  // ✅ Form göndərildikdə işləyir
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // API-yə POST sorğusu atırıq
      const userData = await login({ username, password }).unwrap()

      // Gələn cavabı Redux-a yazırıq
      dispatch(setCredentials(userData))

      // Girişdən sonra istəsək yönləndirmə edə bilərik
      console.log('Giriş uğurludur ✅', userData)
    } catch (err) {
      console.error('Giriş uğursuzdur ❌', err)
    }
  }

  return (
    <div className="auth-container">
      <h2>Daxil ol</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Şifrə"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Giriş edilir...' : 'Daxil ol'}
        </button>
        {/* Əgər API xətası olarsa onu göstəririk */}
        {error && <p className="error">Giriş zamanı xəta baş verdi ❌</p>}
      </form>
    </div>
  )
}

export default LoginForm
