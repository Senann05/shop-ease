import { useState } from 'react'
import { useRegisterMutation } from '../features/auth/authApi'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/auth/authSlice'
import { AppDispatch } from '../app/store'
import '../styles/style.css' // Stil üçün

const RegisterForm = () => {
  // 🧾 Local state: input dəyərlərini saxlayırıq
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [email, setEmail] = useState('')

  // 🔁 API-yə register sorğusu atmaq üçün RTK Query hook
  const [register, { isLoading, error }] = useRegisterMutation()

  // 📦 Redux dispatch funksiyası
  const dispatch = useDispatch<AppDispatch>()

  // ⏎ Form göndərildikdə işləyir
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      // API-yə POST sorğusu atırıq
      const userData = await register({ username, password, email }).unwrap()

      // Gələn cavabı Redux-a yazırıq
      dispatch(setCredentials(userData))

      console.log('Qeydiyyat uğurludur ✅', userData)
    } catch (err) {
      console.error('Qeydiyyat uğursuzdur ❌', err)
    }
  }

  return (
    <div className="auth-container">
      <h2>Qeydiyyat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="İstifadəçi adı"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
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
          {isLoading ? 'Göndərilir...' : 'Qeydiyyatdan keç'}
        </button>
        {/* Əgər API xətası olarsa onu göstəririk */}
        {error && <p className="error">Qeydiyyat zamanı xəta baş verdi ❌</p>}
      </form>
    </div>
  )
}

export default RegisterForm
