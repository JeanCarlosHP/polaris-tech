const Verification = {
  checkUserPass() {
    const buttonLogin = document.querySelector('button#login')

    buttonLogin.addEventListener('click', () => {
      const user = document.querySelector('#user')
      const pass = document.querySelector('#pass')

      if (user.value && pass.value === 'admin') {
        return
      } else {
        const invalidCredencial = document.querySelector('.invalid-credencial')

        invalidCredencial.classList.toggle('active')
      }
    })
  }
}

export { Verification }
